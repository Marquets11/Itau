import Image, { StaticImageData } from "next/image";

export default function CardBenefit({
	cardIcon,
	cardDescription,
}: {
	cardIcon: StaticImageData;
	cardDescription: string;
}) {
	return (
		<div className="py-6 border-b border-orange-itau flex gap-6 items-center group cursor-default">
			<div className="w-8 h-8 flex justify-center">
				<Image
					src={cardIcon}
					alt="cellphone-icon"
					className="group-hover:-rotate-12 group-hover:scale-125 duration-300"
				/>
			</div>
			<p className="text-sm text-justify group-hover:scale-105 group-hover:font-bold duration-200">
				{cardDescription}
			</p>
		</div>
	);
}
