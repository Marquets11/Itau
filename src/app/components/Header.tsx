"use client";

import Image from "next/image";
import Logo from "@/assets/logo.svg";
import SearchBar from "./SearchBar";
import UserIcon from "@/assets/icon-user.svg";
import DropDownButton from "./DropDownButton";
import HamburguerMenuIcon from "@/assets/hamburguer-icon.png";
import Sidebar from "./Sidebar";
import { useSidebarContext } from "../hooks/SidebarContext";

export default function Header() {
	const { isMenuOpen, setIsMenuOpen } = useSidebarContext();

	return (
		<div className="bg-orange-itau text-white flex flex-wrap gap-1 md:gap-5 justify-center lg:justify-between md:pl-10 lg:pl-20">
			<div className="flex py-3 max-sm:w-full justify-around">
				<Image src={Logo} alt="Logo" className="w-16 sm:w-10" />
				<Image
					src={HamburguerMenuIcon}
					alt="HamburguerMenuIcon"
					className="w-10 h-12 sm:hidden self-center cursor-pointer"
					onClick={() => setIsMenuOpen(true)}
				/>
				{isMenuOpen && <Sidebar />}
				<nav className="hidden sm:flex items-center ml-12 gap-10">
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
			</div>
			<div className="flex items-center pl-2 sm:pl-0">
				<SearchBar />
				<div className="bg-blue-700 h-full flex gap-2 items-center py-2 px-2 border-b-2 cursor-pointer hover:bg-blue-900 duration-300">
					<Image src={UserIcon} alt="user-icon" />
					<span className="text-center sm:text-start">Acessar conta</span>
				</div>
			</div>
		</div>
	);
}
