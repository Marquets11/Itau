import Image from "next/image";
import WomanImage from "@/assets/woman.png";
import AppleLogo from "@/assets/apple-logo.png";
import GooglePlayLogo from "@/assets/google-play-logo.png";
import DownArrow from "@/assets/arrow-explorer.svg";
import DownloadButton from "./DownloadButton";

export default function FirstContainer() {
	return (
		<div className="bg-bg-hero bg-no-repeat text-white">
			<main className="grid lg:grid-cols-2 lg:grid-rows-1">
				<section className="flex flex-col lg:justify-center gap-5 px-3 sm:px-20 py-10">
					<h1 className="text-5xl sm:text-7xl font-bold">
						Tenha seu banco na palma da mão.
					</h1>
					<p className="text-justify">
						Todas as operações que você precisa em um só lugar. Simples,
						completo e feito para você.
					</p>
					<nav className="flex gap-5">
						<DownloadButton imageRef={AppleLogo} appName="Apple Store" />
						<DownloadButton
							imageRef={GooglePlayLogo}
							appName="Google Play"
							delayToAppear={0.5}
						/>
					</nav>
					<button className="flex items-center gap-2 mt-20 group w-44 opacity-60 hover:opacity-100">
						<Image
							src={DownArrow}
							alt="down-arrow"
							className="group-hover:scale-125 duration-700"
						/>
						<span className="group-hover:translate-x-3 duration-700">
							Continue explorando
						</span>
					</button>
				</section>
				<Image
					src={WomanImage}
					alt="woman-image"
					className="self-end place-self-center max-lg:hidden"
				/>
			</main>
		</div>
	);
}
