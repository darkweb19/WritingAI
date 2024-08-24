import BlogCard from "@/components/BlogCard";
import { blogPosts } from "../../data/blogPosts";

export default function BlogPage() {
	return (
		<>
			<h1 className="text-4xl font-bold mb-8 text-gray-900">Our Blog</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{blogPosts.map((post) => (
					<BlogCard
						key={post.id}
						id={post.id}
						title={post.title}
						image={post.image}
						excerpt={""}
						author={""}
						date={""}
					/>
				))}
			</div>
		</>
	);
}
