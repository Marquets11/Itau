"use client";

import Image from "next/image";
import Cellphone from "@/assets/phone.png";
import TelIcon from "@/assets/icon-phone.svg";
import SolucionsIcon from "@/assets/icon-solutions.svg";
import OptionsIcon from "@/assets/icon-options.svg";
import CardIcon from "@/assets/icon-card.svg";
import CardBenefit from "./CardBenefit";
import { motion } from "framer-motion";

export default function SecondContainer() {
	return (
		<div className="min-h-screen bg-orange-100 py-2">
			<main className="grid lg:grid-cols-2 lg:grid-rows-1">
				<section className="flex flex-col lg:justify-center gap-5 px-20 py-10">
					<motion.h2
						className="font-bold text-orange-itau uppercase text-sm"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						transition={{ duration: 0.7, delay: 0.3 }}
					>
						Serviços exclusivos
					</motion.h2>
					<motion.h1
						className="text-5xl font-bold"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						transition={{ duration: 0.7 }}
					>
						Gerencie suas finanças sem sair de casa
					</motion.h1>
					<motion.p
						className="text-sm"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						transition={{ duration: 0.7, delay: 0.8 }}
					>
						Veja como você pode cuidar das suas finanças pelo app Itaú de forma
						segura, rápida e o melhor, no conforto da sua casa.
					</motion.p>
					<nav>
						<CardBenefit
							cardIcon={TelIcon}
							cardDescription="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver."
						/>
						<CardBenefit
							cardIcon={SolucionsIcon}
							cardDescription="Soluções de empréstimos e renegociação para organizar suas finanças."
							delayToAppear={0.2}
						/>
						<CardBenefit
							cardIcon={OptionsIcon}
							cardDescription="Diversas opções de investimentos, de acordo com o seu perfil de investidor."
							delayToAppear={0.4}
						/>
						<CardBenefit
							cardIcon={CardIcon}
							cardDescription="Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual."
							delayToAppear={0.6}
						/>
					</nav>
				</section>

				<motion.div
					className="self-center place-self-center max-lg:hidden hover:shadow-black hover:shadow-2xl rounded-3xl duration-300"
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 100 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					transition={{ duration: 0.2, damping: 10, stiffness: 260 }}
				>
					<Image src={Cellphone} alt="cellphone-image" width={250} />
				</motion.div>
			</main>
		</div>
	);
}
