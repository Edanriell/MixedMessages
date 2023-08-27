import "./styles/_globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "MixedMessages",
	description: "MixedMessages"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			data-theme="light">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
