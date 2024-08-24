"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { usePathname } from "next/navigation";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	const breadcrumbItems = [
		{ label: "Home", href: "/" },
		{ label: "Blog", href: "/blog" },
	];

	// Add the current page to the breadcrumb if it's a blog post
	if (pathname.startsWith("/blog/") && pathname !== "/blog") {
		const postTitle = pathname.split("/").pop() || "";
		breadcrumbItems.push({ label: postTitle, href: pathname });
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<Breadcrumb items={breadcrumbItems} />
			{children}
		</div>
	);
}
