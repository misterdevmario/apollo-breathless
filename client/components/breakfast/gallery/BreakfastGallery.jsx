"use client";

import { useInfo } from "@/context/Context";
import Image from "next/image";
import styles from "./BreakfastGallery.module.css";
import { usePathname } from "next/navigation";

const BreakfastGallery = ({ id, closeModal }) => {
  const {
    info,
    updateBreakfastFriday,
    updateBreakfastMonday,
    updateBreakfastTuesday,
    updateBreakfastWednesday,
    updateBreakfastThursday,
    updateBreakfastSaturday,
    updateBreakfastSunday,
    handleImage,
  } = useInfo();
  const router = usePathname();
  const selectedDay = router.includes("actividades")
    ? router.replace("/editar/actividades/", "")
    : router.includes("bars")
    ? router.replace("/editar/bars/", "")
    : router.includes("staff")
    ? router.replace("/editar/staff/", "")
    : router.includes("dinning")
    ? router.replace("/editar/dinning/", "")
    : router.includes("breakfast")
    ? router.replace("/editar/breakfast/", "")
    : router.includes("flyers")
    ? router.replace("/editar/flyers/", "")
    : null;
  return (
    <div className={styles.container}>
      <h1>Elige una imagen</h1>
      <div className={styles.image_container}>
        {info.barsrestaurantsGallery.map((item, i) => (
          <Image
            key={i}
            src={item}
            alt="bar"
            width={250}
            height={500}
            priority
            onClick={() => {
              if (selectedDay == "lunes" && id !== null) {
                updateBreakfastMonday({ breakfastImg: item }, id);
              } else {
                handleImage(item);
              }
              if (selectedDay == "martes" && id !== null) {
                updateBreakfastTuesday({ breakfastImg: item }, id);
              } else {
                handleImage(item);
              }
              if (selectedDay == "miercoles" && id !== null) {
                updateBreakfastWednesday({ breakfastImg: item }, id);
              } else {
                handleImage(item);
              }
              if (selectedDay == "jueves" && id !== null) {
                updateBreakfastThursday({ breakfastImg: item }, id);
              } else {
                handleImage(item);
              }
              if (selectedDay == "viernes" && id !== null) {
                updateBreakfastFriday({ breakfastImg: item }, id);
              } else {
                handleImage(item);
              }
              if (selectedDay == "sabado" && id !== null) {
                updateBreakfastSaturday({ breakfastImg: item }, id);
              } else {
                handleImage(item);
              }
              if (selectedDay == "domingo" && id !== null) {
                updateBreakfastSunday({ breakfastImg: item }, id);
              } else {
                handleImage(item);
              }
              closeModal();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BreakfastGallery;
