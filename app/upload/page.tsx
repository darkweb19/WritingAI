"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadPage() {
	const [file, setFile] = useState<File | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!file) return;

		setIsLoading(true);
		const formData = new FormData();
		formData.append("markdown", file);

		try {
			const response = await fetch("/api/upload", {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				const { filename } = await response.json();
				router.push(`/blog/${filename}`); // Redirect to the new blog post
			} else {
				throw new Error("Upload failed");
			}
		} catch (error) {
			console.error("Error uploading file:", error);
			alert("Failed to upload file. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="container mx-auto mt-10">
			<h1 className="text-2xl font-bold mb-5">Upload Blog Post</h1>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label htmlFor="markdown" className="block mb-2">
						Select Markdown File:
					</label>
					<input
						type="file"
						id="markdown"
						accept=".md"
						onChange={handleFileChange}
						className="border p-2 w-full"
					/>
				</div>
				<button
					type="submit"
					disabled={!file || isLoading}
					className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
				>
					{isLoading ? "Uploading..." : "Upload"}
				</button>
			</form>
		</div>
	);
}
