import * as Nav from '@/components/Nav'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Image from 'next/image';
const cera = localFont({
	src: [
		{
			path: './fonts/Cera-Pro-Regular.woff2',
			weight: '400'
		},
		{
			path: './fonts/Cera-Pro-Medium.woff2',
			weight: '500'
		}
	],
	variable: '--font-cera'
})

export const metadata: Metadata = {
	title: {
		template: '%s | Musée',
		default: 'Musée' // a default is required when creating a template
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`relative scroll-smooth bg-black text-white ${cera.variable}`}>
			<body
				className="~header-py-6/12"
				style={{ '--header-h': 'calc(var(--header-py) * 2 + 1.375rem)' }}
			>
				<Guides />
				<header className="fixed top-0 z-10 w-full py-[--header-py]">
					<div className="grid-guides container flex items-center justify-between gap-4 md:grid">
						<Image
							src="/logo.jpg"
							alt="Logo"
							width={100}
							height={40}
							className="h-10 w-auto object-contain"
						/>

						<Nav.Root className="col-span-3 max-md:hidden">
							<Nav.Item active={true}>Home</Nav.Item>
							<a href="https://www.instagram.com/bafsdelc.college/" target="_blank" rel="noopener noreferrer">
								<Nav.Item>Instagram</Nav.Item>
							</a>
							<a href="https://www.facebook.com/bafsdelc.college" target="_blank" rel="noopener noreferrer">
								<Nav.Item>facebook</Nav.Item>
							</a>

						</Nav.Root>

						<a
							href="https://form1-9f1x.vercel.app/"
							target="_blank"
							rel="noopener noreferrer"
							className="justify-self-end rounded-full bg-white px-5 py-2 text-sm font-semibold text-black shadow-md transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-black/50 flex items-center gap-2 inline-flex"
						>
							Join Us
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
							</svg>
						</a>

					</div>

				</header>
				{children}
			</body>
		</html>
	)
}

function Guides() {
	return (
		<div className="pointer-events-none fixed inset-0 z-50 size-full">
			<div className="grid-guides container relative grid h-full max-guides-4:~px-6/8">
				<div className="border-r border-white/10 max-guides-4:border-l"></div>
				<div className="border-r border-white/10"></div>
				<div className="border-r border-white/10 max-guides-4:hidden"></div>
				<div className="border-r border-white/10 max-guides-5:hidden"></div>
			</div>
		</div>
	)
}
