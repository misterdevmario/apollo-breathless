"use client";

import { useInfo } from "@/context/Context";
import Image from "next/image";
import styles from "./FlyersGallery.module.css";
import { usePathname } from "next/navigation";

const FlyersGallery = ({ id, closeModal }) => {
  const {
    info,
    updateFlyerMonday,
    updateFlyerTuesday,
    updateFlyerWednesday,
    updateFlyerThursday,
    updateFlyerFriday,
    updateFlyerSaturday,
    updateFlyerSunday,
    handleFlyerImage,
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
        {info.flyersGallery.map((item, i) => (
          <Image
            key={i}
            src={item}
            alt="staff"
            width={250}
            height={500}
            priority
            onClick={() => {
              if ( selectedDay == "lunes" && id !== null)
                updateFlyerMonday({ flyerImg: item }, id);
              if (selectedDay == "martes" && id !== null)
                updateFlyerTuesday({ flyerImg: item }, id);
              if (selectedDay == "miercoles" && id !== null)
                updateFlyerWednesday({ flyerImg: item }, id);
              if (selectedDay == "jueves" && id !== null)
                updateFlyerThursday({ flyerImg: item }, id);
              if (selectedDay == "viernes" && id !== null)
                updateFlyerFriday({ flyerImg: item }, id);
              if (selectedDay == "sabado" && id !== null)
                updateFlyerSaturday({ flyerImg: item }, id);
              if (selectedDay == "domingo" && id !== null)
                updateFlyerSunday({ flyerImg: item }, id);
              if(id == null)handleFlyerImage(item)
              closeModal();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FlyersGallery;
