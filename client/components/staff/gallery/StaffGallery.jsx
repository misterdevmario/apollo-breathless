"use client";

import { useInfo } from "@/context/Context";
import Image from "next/image";
import styles from "./StaffGallery.module.css";
import { usePathname } from "next/navigation";

const StaffGallery = ({ id, closeModal }) => {
  const {
    info,
    updateStaffMonday,
    updateStaffTuesday,
    updateStaffWednesday,
    updateStaffThursday,
    updateStaffFriday,
    updateStaffSaturday,
    updateStaffSunday,
    handleStaffImage,
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
        {info.staffGallery.map((item, i) => (
          <Image
            key={i}
            src={item}
            alt="staff"
            width={250}
            height={500}
            priority
            onClick={() => {
              if (selectedDay == "lunes" && id !== null) {
                updateStaffMonday({ staffImg: item }, id);
              }
              if (selectedDay == "martes" && id !== null) {
                updateStaffTuesday({ staffImg: item }, id);
              }
              if (selectedDay == "miercoles" && id !== null) {
                updateStaffWednesday({ staffImg: item }, id);
              }
              if (selectedDay == "jueves" && id !== null) {
                updateStaffThursday({ staffImg: item }, id);
              }
              if (selectedDay == "viernes" && id !== null) {
                updateStaffFriday({ staffImg: item }, id);
              }
              if (selectedDay == "sabado" && id !== null) {
                updateStaffSaturday({ staffImg: item }, id);
              }
              if (selectedDay == "domingo" && id !== null) {
                updateStaffSunday({ staffImg: item }, id);
              }
              if (id == null) handleStaffImage(item);

              closeModal();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StaffGallery;
