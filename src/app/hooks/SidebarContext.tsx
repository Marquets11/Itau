"use client";

import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

interface Sidebar {
	isMenuOpen: boolean;
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const SidebarContext = createContext<Sidebar>({
	isMenuOpen: false,
	setIsMenuOpen: (): boolean => false,
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<SidebarContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
			{children}
		</SidebarContext.Provider>
	);
}

export const useSidebarContext = () => useContext(SidebarContext);
