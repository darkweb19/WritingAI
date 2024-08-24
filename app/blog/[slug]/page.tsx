import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
	const postsDirectory = path.join(process.cwd(), "public", "blog-posts");
	const filenames = await fs.readdir(postsDirectory);

	return filenames.map((filename) => ({
		slug: path.parse(filename).name,
	}));
}

export default async function BlogPost({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = params;
	const filePath = path.join(
		process.cwd(),
		"public",
		"blog-posts",
		`${slug}.md`
	);

	try {
		const fileContents = await fs.readFile(filePath, "utf8");
		const result = await remark().use(html).process(fileContents);
		const contentHtml = result.toString();

		return (
			<div className="container mx-auto mt-10">
				<article
					className="prose lg:prose-xl"
					dangerouslySetInnerHTML={{ __html: contentHtml }}
				/>
			</div>
		);
	} catch (error) {
		notFound();
	}
}
