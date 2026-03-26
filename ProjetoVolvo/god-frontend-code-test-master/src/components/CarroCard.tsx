import React from "react";
import { Spacer,  Text, Block, Flex, Row,  Link} from "vcc-ui";
import { Car } from "../types/car.interface";
import styles from "./CarroCard.module.css";
import Image from "next/image";
interface CardProps {
	car: Car
}
export function CarroCard({ car }: CardProps) {
	return (
		<div className={styles.cardWrapper} 
		  style={{
		     "--bg1": car.bg1 || "#dcdcdc",
   		     "--bg2": car.bg2 || "#c8c8c8",
    	     "--bg3": car.bg3 || "#b5b5b5",
		  } as React.CSSProperties
		  }>
			{/*RESPONSAVEL PELA CATEGORIA DOS CARROS*/}
		
				<div className={styles.cardContent}>
			        <Text variant="amundsen">{car?.modelName}</Text>
			        <Text variant="ootah">{car?.bodyType}</Text>
			        <Text variant="bates">{car?.modelType}</Text>
		      </div>
		      
			
			{/*RESPONSAVEL PELA IMAGEM DOS CARROS*/}
			<Image
			className={styles.cardImage}
			src={car.imageUrl} 
			alt={car.modelName} 
			width={500} 
			height={360}>
			</Image>
	<div className={styles.progressBar}>
  <div className={styles.progressFill}></div>
</div>
		</div>
			
	)
}