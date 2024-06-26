import type { Metadata } from "next";

import "src/styles/globals.css";

import { boldSans, fontSans, primarySans } from "src/lib/font";
import { cn } from "src/lib/utils";
import QueryProvider from "src/provider/query-provider";
import { ThemeProvider } from "src/provider/theme-provider";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
	title: "Upmint",
	description:
		"Discover and explore new crypto project and analize their social stats all in one place! Explore the newest drops, trending collections, and fresh creations daily on our platform.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"font-sans",
					fontSans.variable,
					boldSans.variable,
					primarySans.variable
				)}
			>
				<SessionProvider>
					<QueryProvider>
						<ThemeProvider
							attribute="class"
							defaultTheme="system"
							enableSystem
							disableTransitionOnChange
						>
							{children}
						</ThemeProvider>
					</QueryProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
