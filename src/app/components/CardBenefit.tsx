"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export default function CardBenefit({
	cardIcon,
	cardDescription,
	delayToAppear,
}: {
	cardIcon: StaticImageData;
	cardDescription: string;
	delayToAppear?: number;
}) {
	return (
		<motion.div
			className="py-6 border-b border-orange-itau flex gap-6 items-center group cursor-default"
			initial={{ opacity: 0, scale: 0 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5, delay: delayToAppear }}
		>
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
		</motion.div>
	);
}
