import React from "react";
import { Spacer,  Text, Block, Flex, Row,  Link} from "vcc-ui";
import { Car } from "../types/car.interface";
import Image from "next/image";
import styles from "./CarroCard.module.css";
interface CardProps {
	car: Car
}
export function CarroCard({ car }: CardProps) {
	return (
		<div className={styles.cardWrapper}>
			{/*RESPONSAVEL PELA CATEGORIA DOS CARROS*/}
			<Text variant="bates">{car?.bodyType}</Text>
				<Flex>
					<Row>
						{/*RESPONSAVEL PELO NOME E MODELO DOS CARROS*/}
						<Text variant="amundsen" extend={{margin: 0}}>
						{car?.modelName}
						</Text>
						<Text variant="bates" subStyle="inline-link"extend={{margin: 0}}>
						{car?.modelType}
						</Text>
					
					</Row>
				</Flex>
			
			{/*RESPONSAVEL PELA IMAGEM DOS CARROS*/}
			<Image src={car.imageUrl} 
			alt="Imagem de carros"  
			width={250} 
			height={200}>
			</Image>
			
			<Spacer />
			
			<Flex extend={{
				justifyContent: 'flex-start',
				alignItems: 'center',
				flexDirection: 'row'
			}}>
				{/*RESPONSAVEL PELO LINK DOS CARROS*/}
				<Link href="https://www.volvocars.com/" arrow="right">
					SHOP
				</Link>
				<Spacer />
				<Link href="https://www.volvocars.com/" arrow="right">
					LEARN
				</Link>
			</Flex>

			</div>
			
	)
}