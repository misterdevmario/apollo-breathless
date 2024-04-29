"use client";

import { useInfo } from "@/context/Context";
import Image from "next/image";
import styles from "./ActivitiesGallery.module.css";
import { usePathname } from "next/navigation";

const ActivitiesGallery = ({ id, closeModal }) => {
  const {
    info,
    updateActivityMonday,
    updateActivityTuesday,
    updateActivityWednesday,
    updateActivityThursday,
    updateActivityFriday,
    updateActivitySaturday,
    updateActivitySunday,
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
        {info?.activitiesGallery.map((item, i) => (
          <Image
            key={i}
            src={item}
            alt="activity"
            width={100}
            height={200}
            priority
            onClick={() => {
              if (selectedDay == "lunes" && id !== null) {
                updateActivityMonday({ activitieImage: item }, id);
              }
              if (selectedDay == "martes" && id !== null) {
                updateActivityTuesday({ activitieImage: item }, id);
              }
              if (selectedDay == "miercoles" && id !== null) {
                updateActivityWednesday({ activitieImage: item }, id);
              }
              if (selectedDay == "jueves" && id !== null) {
                updateActivityThursday({ activitieImage: item }, id);
              }
              if (selectedDay == "viernes" && id !== null) {
                updateActivityFriday({ activitieImage: item }, id);
              }
              if (selectedDay == "sabado" && id !== null) {
                updateActivitySaturday({ activitieImage: item }, id);
              }
              if (selectedDay == "domingo" && id !== null) {
                updateActivitySunday({ activitieImage: item }, id);
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

export default ActivitiesGallery;
