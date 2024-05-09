import Image from "next/image";
import DropArrow from "@/assets/arrow-down.svg";

export default function DropDownButton({
	buttonName,
	optionsDropDown,
}: {
	buttonName: string;
	optionsDropDown?: string[];
}) {
	return (
		<div>
			<button
				className={`group relative ${
					optionsDropDown && optionsDropDown.length > 0 && "peer"
				}`}
			>
				{buttonName}
				{optionsDropDown && optionsDropDown.length > 0 && (
					<Image
						src={DropArrow}
						alt="drop-arrow"
						className="ml-1 inline-block group-hover:translate-x-2 group-focus:translate-x-2 duration-300"
					/>
				)}
			</button>
			<div className="hidden absolute top-12 peer-focus:flex flex-col min-w-36 bg-opacity-90 bg-blue-700 rounded-lg">
				{optionsDropDown &&
					optionsDropDown.length > 0 &&
					optionsDropDown.map((option) => (
						<button className="p-2 text-start font-bold bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md duration-200">
							{option}
						</button>
					))}
			</div>
		</div>
	);
}
