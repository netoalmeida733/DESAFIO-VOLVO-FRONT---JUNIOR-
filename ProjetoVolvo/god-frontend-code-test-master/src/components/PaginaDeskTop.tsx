import { ChevronLeft, ChevronRight } from "lucide-react";
import  styles  from "./CarroCard.module.css";

interface PaginaDeskTopProps {
	onClickLeft: () => void;
	onClickRight: () =>  void;
}

export default function PaginaDeskTop({onClickLeft , onClickRight }: PaginaDeskTopProps){
	return(
		<div className={styles.btnWrapper}>
			<button  className={styles.button} onClick={onClickLeft} ><ChevronLeft  size={18} /></button>
			<button className={styles.button} onClick={onClickRight}> <ChevronRight size={18} /></button>
			</div>
	);
} 


