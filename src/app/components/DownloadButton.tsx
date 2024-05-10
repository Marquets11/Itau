"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export default function DownloadButton({
	imageRef,
	appName,
	delayToAppear,
}: {
	imageRef: StaticImageData;
	appName?: string;
	delayToAppear?: number;
}) {
	return (
		<motion.div
			className="border-2 rounded-lg p-1 sm:p-3 flex items-center gap-3 hover:cursor-pointer hover:bg-blue-800 duration-500"
			initial={{ opacity: 0, scale: 0 }}
			whileInView={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0 }}
			transition={{ duration: 0.2, delay: delayToAppear }}
		>
			<Image
				src={imageRef}
				alt={appName ?? "logo"}
				className="w-5 h-6 sm:w-8 sm:h-9"
			/>
			<div>
				<p className="text-xs">Download em</p>
				<p className="font-bold text-md sm:text-xl">{appName}</p>
			</div>
		</motion.div>
	);
}
