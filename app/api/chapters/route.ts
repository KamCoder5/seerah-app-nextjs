import { NextResponse } from "next/server";
import { fetchAllChapters } from "@/app/queries/fetchAllChapters";

export async function GET() {
	try {
		const chapters = await fetchAllChapters();
		return NextResponse.json(chapters);
	} catch (error) {
		console.error("Failed to fetch chapters:", error);
		return NextResponse.json({ error: "Failed to fetch chapters" }, { status: 500 });
	}
}
