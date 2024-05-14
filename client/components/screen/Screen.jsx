"use client";

import Image from "next/image";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useInfo } from "@/context/Context";
import { useModal } from "../modal/useModal";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import { usePathname } from "next/navigation";
import { getScreensMonday } from "@/lib/apidaysweek/apimonday";
import { getScreensTuesday } from "@/lib/apidaysweek/apituesday";
import { getScreensWednesday } from "@/lib/apidaysweek/apiwednesday";
import { getScreensThursday } from "@/lib/apidaysweek/apithursday";
import { getScreensFriday } from "@/lib/apidaysweek/apifriday";
import { getScreensSaturday } from "@/lib/apidaysweek/apisaturday";
import { getScreensSunday } from "@/lib/apidaysweek/apisunday";
import styles from "./Screen.module.css";

const validation = Yup.object().shape({
  name: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  hourStart: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  hourEnd: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
});

const Screen = () => {
  const [screen, setScreen] = useState();
  const {
    updateScreenMonday,
    updateScreenTuesday,
    updateScreenWednesday,
    updateScreenThursday,
    updateScreenFriday,
    updateScreenSaturday,
    updateScreenSunday,
  } = useInfo();
  const [id, setId] = useState("");
  const [isOpenGallery, openGallery, closeGallery] = useModal(true);

  const router = usePathname();
  const selectedDay = router.includes("pantalla")
    ? router.replace("/editar/pantalla/", "")
    : null;

  useEffect(() => {
    (async () => {
      if (selectedDay == "lunes") {
        const screenResponseMonday = await getScreensMonday();
        setScreen(screenResponseMonday.data);
      }
      if (selectedDay == "martes") {
        const screenResponseTuesday = await getScreensTuesday();
        setScreen(screenResponseTuesday.data);
      }
      if (selectedDay == "miercoles") {
        const screenResponseWednesday = await getScreensWednesday();
        setScreen(screenResponseWednesday.data);
      }
      if (selectedDay == "jueves") {
        const screenResponseThursday = await getScreensThursday();
        setScreen(screenResponseThursday.data);
      }
      if (selectedDay == "viernes") {
        const screenResponseFriday = await getScreensFriday();
        setScreen(screenResponseFriday.data);
      }
      if (selectedDay == "sabado") {
        const screenResponseSaturday = await getScreensSaturday();
        setScreen(screenResponseSaturday.data);
      }
      if (selectedDay == "domingo") {
        const screenResponseSunday = await getScreensSunday();
        setScreen(screenResponseSunday.data);
      }
    })();
  }, [
    selectedDay,
    // updatScreenMonday,
    // updatScreenTuesday,
    // updatScreenWednesday,
    // updatScreenThursday,
    // updatScreenFriday,
    // updatScreenSaturday,
    // updatScreenSunday,
  ]);
  console.log(  screen?.map(item => item.attributes.data.assets.map(item => item)));
  console.log(screen)
  const sortedScreen = screen?.sort((a, b) => a.id - b.id);
  return (
    <div className={styles.container}>
      <div className={styles.card_container}>
        {sortedScreen?.map((item, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.id_name_container}>
              <div className={styles.id}>{item.attributes.data.hardware_id}</div>
              <div className={styles.route_name}>{item.attributes.data.route_name}</div>
            </div>
            <form className={styles.form} action="">
              <div className="duration">{item.attributes.data.duration} </div>
              <div className="interval">{item.attributes.data.interval} </div>
            </form>
            {}
            <div className={styles.image_video}>
             <Image
             src= {item.attributes.data.assets?.map(item => item.toString())}
             alt="image"
             width={200}
             height={100}
             />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Screen;
