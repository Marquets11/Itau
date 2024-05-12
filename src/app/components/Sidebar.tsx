"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CloseIcon from "@/assets/close-icon.webp";
import DropDownButton from "./DropDownButton";
import { useSidebarContext } from "../hooks/SidebarContext";

export default function Sidebar() {
	const { isMenuOpen, setIsMenuOpen } = useSidebarContext();

	return (
		<div className={`w-full h-full fixed top-0 z-10 backdrop-blur-sm flex`}>
			<div className="flex-1" onClick={() => setIsMenuOpen(false)}></div>
			<motion.div
				className={`absolute right-0 top-0 h-full w-60 p-5 bg-blue-700 shadow-2xl shadow-black`}
				initial={{ opacity: 0, x: 200 }}
				whileInView={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: 200 }}
				transition={{ duration: 0.4 }}
			>
				<Image
					src={CloseIcon}
					alt="CloseIcon"
					className="absolute right-3 top-3 w-6 h-6 p-1 rounded-full bg-white bg-opacity-0 hover:bg-opacity-20"
					onClick={() => setIsMenuOpen(false)}
				/>

				<nav className="flex flex-col justify-start mt-10 sm:ml-12 gap-10 z-20">
					<DropDownButton
						buttonName="Para você"
						optionsDropDown={["Opção 01", "Opção 02", "Opção 03"]}
					/>
					<DropDownButton
						buttonName="Para empresas"
						optionsDropDown={["Opção 01", "Opção 02"]}
					/>
					<DropDownButton
						buttonName="Serviços"
						optionsDropDown={[
							"Opção 01",
							"Opção 02",
							"Opção 03",
							"Opção 04",
							"Opção 05",
						]}
					/>
					<DropDownButton buttonName="Ajuda" />
				</nav>
			</motion.div>
		</div>
	);
}
