import Link from "next/link";
import { JSX, SVGProps } from "react";

export function LandingPage() {
	return (
		<div className="flex flex-col min-h-[100dvh]">
			<header className="bg-background px-4 lg:px-6 h-14 flex items-center justify-between">
				<Link href="#" className="flex items-center" prefetch={false}>
					<FeatherIcon className="h-6 w-6 text-primary" />
					<span className="sr-only">Blog</span>
				</Link>
				<nav className="hidden lg:flex gap-4 sm:gap-6">
					<Link
						href="#"
						className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
						prefetch={false}
					>
						Home
					</Link>
					<Link
						href="#"
						className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
						prefetch={false}
					>
						Blog
					</Link>
					<Link
						href="#"
						className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
						prefetch={false}
					>
						About
					</Link>
					<Link
						href="#"
						className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
						prefetch={false}
					>
						Contact
					</Link>
				</nav>
			</header>
			<main className="flex-1">
				<section className="bg-background py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
						<div className="flex flex-col justify-center space-y-4">
							<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
								Discover the Art of Storytelling
							</h1>
							<p className="text-muted-foreground md:text-xl">
								Immerse yourself in a world of captivating
								narratives, where words come alive and ideas
								take flight.
							</p>
							<Link
								href="#"
								className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								Read the Blog
							</Link>
						</div>
						<img
							src="/placeholder.svg"
							width="550"
							height="550"
							alt="Hero"
							className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
						/>
					</div>
				</section>
				<section className="bg-muted py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
									Featured Blog Posts
								</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Dive into our curated selection of
									thought-provoking articles and insightful
									perspectives.
								</p>
							</div>
						</div>
						<div className="mx-auto grid gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							<Link
								href="#"
								className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								<img
									src="/placeholder.svg"
									width="550"
									height="310"
									alt="Blog Post"
									className="mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center"
								/>
								<div className="space-y-1">
									<h3 className="text-lg font-semibold group-hover:underline">
										Unleashing the Power of Minimalism
									</h3>
									<p className="text-muted-foreground line-clamp-2">
										Discover how embracing a minimalist
										lifestyle can transform your life and
										unlock new levels of productivity and
										fulfillment.
									</p>
								</div>
							</Link>
							<Link
								href="#"
								className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								<img
									src="/placeholder.svg"
									width="550"
									height="310"
									alt="Blog Post"
									className="mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center"
								/>
								<div className="space-y-1">
									<h3 className="text-lg font-semibold group-hover:underline">
										The Art of Mindful Living
									</h3>
									<p className="text-muted-foreground line-clamp-2">
										Explore the transformative power of
										mindfulness and learn how to cultivate a
										deeper sense of presence and inner
										peace.
									</p>
								</div>
							</Link>
							<Link
								href="#"
								className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								<img
									src="/placeholder.svg"
									width="550"
									height="310"
									alt="Blog Post"
									className="mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center"
								/>
								<div className="space-y-1">
									<h3 className="text-lg font-semibold group-hover:underline">
										The Power of Simplicity
									</h3>
									<p className="text-muted-foreground line-clamp-2">
										Discover how embracing simplicity can
										lead to a more fulfilling and
										intentional life, freeing you from the
										clutches of consumerism.
									</p>
								</div>
							</Link>
							<Link
								href="#"
								className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								<img
									src="/placeholder.svg"
									width="550"
									height="310"
									alt="Blog Post"
									className="mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center"
								/>
								<div className="space-y-1">
									<h3 className="text-lg font-semibold group-hover:underline">
										The Art of Slow Living
									</h3>
									<p className="text-muted-foreground line-clamp-2">
										Explore the benefits of slowing down and
										embracing a more intentional pace of
										life, finding joy in the present moment.
									</p>
								</div>
							</Link>
						</div>
					</div>
				</section>
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-muted-foreground">
					&copy; 2024 Blog. All rights reserved.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link
						href="#"
						className="text-xs hover:underline underline-offset-4 text-muted-foreground"
						prefetch={false}
					>
						Terms of Service
					</Link>
					<Link
						href="#"
						className="text-xs hover:underline underline-offset-4 text-muted-foreground"
						prefetch={false}
					>
						Privacy
					</Link>
				</nav>
			</footer>
		</div>
	);
}

function FeatherIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
			<path d="M16 8 2 22" />
			<path d="M17.5 15H9" />
		</svg>
	);
}
