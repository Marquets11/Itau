import Image from "next/image";
import DropArrow from "@/assets/arrow-down.svg";

export default function DropDownButton({ buttonName }: { buttonName: string }) {
	return (
		<button className="group">
			{buttonName}
			<Image
				src={DropArrow}
				alt="drop-arrow"
				className="ml-1 inline-block group-hover:translate-x-2 duration-300"
			/>
		</button>
	);
}
