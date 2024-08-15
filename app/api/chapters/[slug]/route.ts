import { NextResponse } from "next/server";
import axios from "axios";
import { BASE_URL } from "@/constants/appConstants";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
	const { slug } = params;

	if (!slug) {
		return NextResponse.json({ message: "Missing slug parameter" }, { status: 400 });
	}

	try {
		const apiUrl = new URL("/wp-json/wp/v2/chapter", BASE_URL);
		apiUrl.searchParams.append("slug", slug);
		apiUrl.searchParams.append("_fields", "title,content,acf,slug,status");

		const response = await axios.get(apiUrl.toString());
		const data = response.data;

		if (data.length === 0) {
			return NextResponse.json({ message: "No content found for the provided slug." }, { status: 404 });
		}

		return NextResponse.json({ data });
	} catch (error: any) {
		return NextResponse.json(
			{ message: `Error fetching content: ${error.response?.data?.message || error.message}` },
			{ status: 500 }
		);
	}
}
