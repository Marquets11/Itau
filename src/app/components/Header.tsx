import Image from "next/image";
import Logo from "@/assets/logo.svg";
import SearchBar from "./SearchBar";
import UserIcon from "@/assets/icon-user.svg";
import DropDownButton from "./DropDownButton";

export default function Header() {
	return (
		<div className="bg-orange-itau text-white flex flex-wrap gap-5 justify-center lg:justify-between pl-20">
			<div className="flex py-3">
				<Image src={Logo} alt="Logo" className="w-10" />
				<nav className="flex items-center ml-12 gap-10 max-sm:hidden">
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
			<div className="flex items-center">
				<SearchBar />
				<div className="bg-blue-700 h-full flex gap-2 items-center p-5 cursor-pointer hover:bg-blue-900 duration-300">
					<Image src={UserIcon} alt="user-icon" />
					Acessar conta
				</div>
			</div>
		</div>
	);
}
