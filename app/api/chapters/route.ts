import { NextResponse } from "next/server";
import axios from "axios";
import { BASE_URL } from "@/constants/appConstants";

export async function GET() {
	try {
		const apiUrl = new URL("/wp-json/wp/v2/chapter", BASE_URL);
		apiUrl.searchParams.append("_fields", "id,title,slug,subtitle,acf");
		apiUrl.searchParams.append("orderby", "date");
		apiUrl.searchParams.append("order", "asc");

		const response = await axios.get(apiUrl.toString());
		const chapters = response.data;

		return NextResponse.json(chapters);
	} catch (error) {
		console.error("Failed to fetch chapters:", error);
		return NextResponse.json({ error: "Failed to fetch chapters" }, { status: 500 });
	}
}
