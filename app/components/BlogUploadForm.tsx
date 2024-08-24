"use client";
import React, { useState } from "react";

export default function BlogUploadForm() {
	const [file, setFile] = useState<File | null>(null);
	const [message, setMessage] = useState("");

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!file) {
			setMessage("Please select a file");
			return;
		}

		const formData = new FormData();
		formData.append("file", file);

		try {
			const response = await fetch("/api/blog", {
				method: "POST",
				body: formData,
			});

			const data = await response.json();

			if (response.ok) {
				setMessage(`Blog post created successfully: ${data.fileName}`);
			} else {
				setMessage(`Error: ${data.error}`);
			}
		} catch (error) {
			setMessage("An error occurred while uploading the file");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="file" accept=".md" onChange={handleFileChange} />
			<button type="submit">Upload and Create Blog</button>
			{message && <p>{message}</p>}
		</form>
	);
}
