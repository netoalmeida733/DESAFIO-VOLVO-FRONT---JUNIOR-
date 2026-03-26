import { ChevronLeft, ChevronRight } from "lucide-react";
import  styles  from "./CarroCard.module.css";

interface PaginaDeskTopProps {
	onClickLeft: () => void;
	onClickRight: () =>  void;
}

export default function PaginaDeskTop({onClickLeft , onClickRight }: PaginaDeskTopProps){
	return(
		<div className={styles.btnWrapper}>
			<button onClick={onClickLeft} ><ChevronLeft /></button>
			<button  onClick={onClickRight}> <ChevronRight /></button>
		</div>
	);
} 


