import React, { useState } from "react";
import { Text } from 'vcc-ui';
import { useCars } from "../hooks/useCars";
import { CarroCard } from "./CarroCard";
import styles from "./CarroCard.module.css";
import { Spacer } from "./Spacer";
import PaginaDeskTop from "./PaginaDeskTop";

export const HelloWorld: React.FC = () => {
  const { cars } = useCars();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState<'left' | 'right' | null>(null);
  const nextIndex = (currentIndex + 1) % cars.length;

  const onClickLeft = () => {
    const cardList = document.getElementById("card-list");
    if (!cardList) return;
    cardList.scrollBy({ left: -300, behavior: "smooth" });

    // ADICIONAR
    if (animating) return;
    setAnimating('left');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length);
      setAnimating(null);
    }, 600);
  };

  const onClickRight = () => {
    const cardList = document.getElementById("card-list");
    if (!cardList) return;
    cardList.scrollBy({ left: 300, behavior: "smooth" });

    // ADICIONAR
    if (animating) return;
    setAnimating('right');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cars.length);
      setAnimating(null);
    }, 600);
  };

  return (
    <div className={styles.homeWrapper}>

      <Text variant='cook'>Modelos em destaque</Text>

      <Spacer />

      <div className={styles.cardsWrapper} id="card-list">

        {cars.map((car, index) => (
          // ADICIONAR: wrapper com classe de anima��o em volta do CarroCard
          <div
            key={car.id}
            className={
              index === currentIndex
                ? animating === 'right' ? styles.slideExit
                : animating === 'left' ? styles.slideEnter
                : styles.slideActive
                : styles.slideHidden
            }
          >
            <CarroCard car={car} />
          </div>
        ))}


        <PaginaDeskTop onClickLeft={onClickLeft} onClickRight={onClickRight} />
      </div>

    </div>
  );
};