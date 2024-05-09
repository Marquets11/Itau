import Image, { StaticImageData } from "next/image";

export default function DownloadButton({
	imageRef,
	appName,
}: {
	imageRef: StaticImageData;
	appName?: string;
}) {
	return (
		<div className="border-2 rounded-lg p-3 flex items-center gap-3 hover:cursor-pointer hover:bg-blue-800 duration-500">
			<Image src={imageRef} alt={appName ?? "logo"} className="w-8 h-9" />
			<div>
				<p className="text-xs">Download em</p>
				<p className="font-bold text-xl">{appName}</p>
			</div>
		</div>
	);
}
