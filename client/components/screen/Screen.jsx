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
  const selectedDay = router.includes("pantalla")? router.replace("/editar/pantalla/", ""): null;

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
console.log(screen)
  // const sortedBars = bars?.sort((a, b) => a.id - b.id);
  return <div >Hello World</div>;
};

export default Screen;
