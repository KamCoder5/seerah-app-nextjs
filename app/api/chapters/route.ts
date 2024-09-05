import { NextResponse } from "next/server";

export async function GET() {
	try {
		// Construct the API URL
		const apiUrl = new URL("/wp-json/wp/v2/chapter", process.env.API_URL);
		apiUrl.searchParams.append("_fields", "id,title,slug,subtitle,acf");
		apiUrl.searchParams.append("orderby", "date");
		apiUrl.searchParams.append("order", "asc");

		// Use fetch with no-store to prevent caching
		const response = await fetch(apiUrl.toString(), {
			method: "GET",
			cache: "no-store", // Disable caching
		});

		// Handle any non-200 responses
		if (!response.ok) {
			throw new Error(`Failed to fetch chapters: ${response.statusText}`);
		}

		const chapters = await response.json();
		return NextResponse.json(chapters);
	} catch (error) {
		console.error("Failed to fetch chapters:", error);
		return NextResponse.json({ error: "Failed to fetch chapters" }, { status: 500 });
	}
}
