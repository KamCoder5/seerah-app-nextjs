import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
	const { slug } = params;

	if (!slug) {
		return NextResponse.json({ message: "Missing slug parameter" }, { status: 400 });
	}

	try {
		// Construct the API URL
		const apiUrl = new URL("/wp-json/wp/v2/chapter", process.env.API_URL);
		apiUrl.searchParams.append("slug", slug);
		apiUrl.searchParams.append("_fields", "title,content,acf,slug,status");

		// Use fetch with no-store to prevent caching
		const response = await fetch(apiUrl.toString(), {
			method: "GET",
			// cache: "no-store", // Disable caching
		});

		// Handle any non-200 responses
		if (!response.ok) {
			throw new Error(`Error fetching content: ${response.statusText}`);
		}

		const data = await response.json();

		if (data.length === 0) {
			return NextResponse.json({ message: "No content found for the provided slug." }, { status: 404 });
		}

		return NextResponse.json({ data });
	} catch (error: any) {
		return NextResponse.json({ message: `Error fetching content: ${error.message}` }, { status: 500 });
	}
}
