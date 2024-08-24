import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
	const formData = await request.formData();
	const file = formData.get("markdown") as File;

	if (!file) {
		return NextResponse.json(
			{ error: "No file uploaded" },
			{ status: 400 }
		);
	}

	const bytes = await file.arrayBuffer();
	const buffer = Buffer.from(bytes);

	// Save the file to the public directory
	const filename = file.name;
	const filepath = path.join(process.cwd(), "public", "blog-posts", filename);

	await fs.writeFile(filepath, buffer);

	return NextResponse.json({ filename: path.parse(filename).name });
}
