import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
	id: number;
	title: string;
	image: string;
	excerpt: string;
	author: string;
	date: string;
}

export default function BlogCard({
	id,
	title,
	image,
	excerpt,
	author,
	date,
}: BlogCardProps) {
	return (
		<div>
			<Link href={`/blog/${id}`} className="block">
				<div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
					<Image
						src={image}
						alt={title}
						width={400}
						height={200}
						className="w-full h-48 object-cover"
					/>
					<div className="p-4">
						<h2 className="text-xl font-semibold mb-2">{title}</h2>
						<p className="text-gray-600 text-sm mb-2">{excerpt}</p>
						<div className="text-gray-500 text-xs">
							<span>{author} | </span>
							<span>{date}</span>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
