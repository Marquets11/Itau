import Image from "next/image";
import Cellphone from "@/assets/phone.png";
import TelIcon from "@/assets/icon-phone.svg";
import SolucionsIcon from "@/assets/icon-solutions.svg";
import OptionsIcon from "@/assets/icon-options.svg";
import CardIcon from "@/assets/icon-card.svg";
import CardBenefit from "./CardBenefit";

export default function SecondContainer() {
	return (
		<div className="min-h-screen bg-orange-100 py-20">
			<main className="grid lg:grid-cols-2 lg:grid-rows-1">
				<section className="flex flex-col lg:justify-center gap-5 px-20 py-10">
					<h2 className="font-bold text-orange-itau uppercase text-sm">
						Serviços exclusivos
					</h2>
					<h1 className="text-5xl font-bold">
						Gerencie suas finanças sem sair de casa
					</h1>
					<p className="text-sm">
						Veja como você pode cuidar das suas finanças pelo app Itaú de forma
						segura, rápida e o melhor, no conforto da sua casa.
					</p>
					<nav>
						<CardBenefit
							cardIcon={TelIcon}
							cardDescription="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver."
						/>
						<CardBenefit
							cardIcon={SolucionsIcon}
							cardDescription="Soluções de empréstimos e renegociação para organizar suas finanças."
						/>
						<CardBenefit
							cardIcon={OptionsIcon}
							cardDescription="Diversas opções de investimentos, de acordo com o seu perfil de investidor."
						/>
						<CardBenefit
							cardIcon={CardIcon}
							cardDescription="Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual."
						/>
					</nav>
				</section>
				<Image
					src={Cellphone}
					alt="cellphone-image"
					className="self-center place-self-center max-lg:hidden hover:shadow-black hover:shadow-2xl rounded-3xl hover:scale-105 duration-300"
					width={250}
				/>
			</main>
		</div>
	);
}
