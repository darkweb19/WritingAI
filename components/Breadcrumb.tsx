import Link from "next/link";

interface BreadcrumbProps {
	items: { label: string; href: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
	return (
		<nav className="text-sm mb-4">
			<ol className="list-none p-0 inline-flex">
				{items.map((item, index) => (
					<li key={index} className="flex items-center">
						{index > 0 && (
							<span className="mx-2 text-gray-500">/</span>
						)}
						{index === items.length - 1 ? (
							<span className="text-gray-700">{item.label}</span>
						) : (
							<Link
								href={item.href}
								className="text-blue-600 hover:underline"
							>
								{item.label}
							</Link>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
}
