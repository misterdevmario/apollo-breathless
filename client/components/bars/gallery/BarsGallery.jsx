"use client";

import { useInfo } from "@/context/Context";
import Image from "next/image";
import styles from "./BarsGallery.module.css";
import { usePathname } from "next/navigation";
const BarsGallery = ({ id, closeModal }) => {
  const {
    info,
    updateBarMonday,
    updateBarTuesday,
    updateBarWednesday,
    updateBarThursday,
    updateBarFriday,
    updateBarSaturday,
    updateBarSunday,
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
                updateBarMonday({ barImg: item }, id);
              }
              if (selectedDay == "martes" && id !== null) {
                updateBarTuesday({ barImg: item }, id);
              }
              if (selectedDay == "miercoles" && id !== null) {
                updateBarWednesday({ barImg: item }, id);
              }
              if (selectedDay == "jueves" && id !== null) {
                updateBarThursday({ barImg: item }, id);
              }
              if (selectedDay == "viernes" && id !== null) {
                updateBarFriday({ barImg: item }, id);
              }
              if (selectedDay == "sabado" && id !== null) {
                updateBarSaturday({ barImg: item }, id);
              }
              if (selectedDay == "domingo" && id !== null) {
                updateBarSunday({ barImg: item }, id);
              }
              if (id == null) handleImage(item);
              closeModal();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BarsGallery;
