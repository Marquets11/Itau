import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { SidebarProvider } from "./hooks/SidebarContext";

const lato = Lato({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Itaú",
	description: "Layout of Itau page",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<SidebarProvider>
				<body className={lato.className}>
					<Header />
					{children}
				</body>
			</SidebarProvider>
		</html>
	);
}
