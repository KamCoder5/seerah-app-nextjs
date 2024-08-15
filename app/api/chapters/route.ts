import { NextResponse } from "next/server";
import axios from "axios";
import { BASE_URL } from "@/constants/appConstants";

export async function GET() {
	const API_URL = `${BASE_URL}/wp-json/wp/v2/chapter?_fields=id,title,slug,subtitle,acf&orderby=date&order=asc`;

	try {
		const response = await axios.get(API_URL);
		const chapters = response.data;
		return NextResponse.json(chapters);
	} catch (error) {
		console.error("Failed to fetch chapters:", error);
		return NextResponse.json({ error: "Failed to fetch chapters" }, { status: 500 });
	}
}
