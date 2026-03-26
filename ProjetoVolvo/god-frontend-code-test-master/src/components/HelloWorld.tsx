import React from "react";
import { Text } from 'vcc-ui';
import { useCars } from "../hooks/useCars";
import { CarroCard } from "./CarroCard";
import  styles  from "./CarroCard.module.css";
import { Spacer } from "./Spacer";
import PaginaDeskTop from "./PaginaDeskTop";


export const HelloWorld: React.FC = () => {
	const {cars} = useCars();
	
	/LOGICA PARA SCROLL DOS BOTOES/
	const onClickLeft = () => {
	  const cardList = document.getElementById("card-list");
	
	  if (!cardList) return;
	
	  cardList.scrollBy({
	    left: -300,
	    behavior: "smooth",
	  });
	};
	
	const onClickRight = () => {
	  const cardList = document.getElementById("card-list");
	
	  if (!cardList) return;
	
	  cardList.scrollBy({
	    left: 300,
	    behavior: "smooth",
	  });
	};
	
  return(
  <div className={styles.homeWrapper}>
  	
  	<Text variant='cook'>Todos os Modelos Recharge</Text>
  
  	<Spacer></Spacer>
  	
  	<div className={styles.cardsWrapper} id="card-list">
		  {cars.map(car => (
		    <CarroCard key={car.id} car={car} />
		  ))}
		</div>
		<PaginaDeskTop onClickLeft={onClickLeft} onClickRight={onClickRight}/>
    </div>
);
};
