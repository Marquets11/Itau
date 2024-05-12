"use client";
import SearchIcon from "@/assets/icon-search.svg";
import Image from "next/image";

export default function SearchBar() {
	return (
		<form
			onSubmit={(ev) => ev.preventDefault()}
			className="flex rounded-full bg-white bg-opacity-0 hover:bg-opacity-20 sm:w-56 mr-2 px-2 py-1 has-[:focus]:bg-opacity-20"
		>
			<button>
				<Image src={SearchIcon} alt="search-icon" className="mr-2" />
			</button>
			<input
				type="text"
				className="w-full bg-transparent outline-none placeholder:text-white peer"
				placeholder="Buscar"
			/>
		</form>
	);
}
