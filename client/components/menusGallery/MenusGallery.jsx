"use client";

import { useInfo } from "@/context/Context";
import Image from "next/image";
import styles from "./MenusGallery.module.css";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
//DINNING
import { getDinningMonday } from "@/lib/apidaysweek/apimonday";
import { getDinningTuesday } from "@/lib/apidaysweek/apituesday";
import { getDinningWednesday } from "@/lib/apidaysweek/apiwednesday";
import { getDinningThursday } from "@/lib/apidaysweek/apithursday";
import { getDinningSaturday } from "@/lib/apidaysweek/apisaturday";
import { getDinningSunday } from "@/lib/apidaysweek/apisunday";
import { getDinningFriday } from "@/lib/apidaysweek/apifriday";
//Breakfast
import { getBreakfastMonday } from "@/lib/apidaysweek/apimonday";
import { getBreakfastTuesday } from "@/lib/apidaysweek/apituesday";
import { getBreakfastWednesday } from "@/lib/apidaysweek/apiwednesday";
import { getBreakfastThursday } from "@/lib/apidaysweek/apithursday";
import { getBreakfastSaturday } from "@/lib/apidaysweek/apisaturday";
import { getBreakfastSunday } from "@/lib/apidaysweek/apisunday";
import { getBreakfastFriday } from "@/lib/apidaysweek/apifriday";

const MenusGallery = ({ id, menuId, closeModal, postMenu }) => {
  const {
    info,
    updateDinningFriday,
    updateDinningMonday,
    updateDinningTuesday,
    updateDinningWednesday,
    updateDinningThursday,
    updateDinningSaturday,
    updateDinningSunday,
    //BREAKFAST
    updateBreakfastMonday,
    updateBreakfastTuesday,
    updateBreakfastWednesday,
    updateBreakfastThursday,
    updateBreakfastFriday,
    updateBreakfastSaturday,
    updateBreakfastSunday,
    handleImage,
  } = useInfo();

  const [dinner, setDinner] = useState();
  const [breakfast, setBreakfast] = useState();

  const router = usePathname();
  const selectedSection = router.split("/")[2];
  const selectedDay = router.includes("actividades")
    ? router.replace("/editar/actividades/", "")
    : router.includes("bares")
    ? router.replace("/editar/bares/", "")
    : router.includes("staff")
    ? router.replace("/editar/staff/", "")
    : router.includes("cena")
    ? router.replace("/editar/cena/", "")
    : router.includes("desayuno-comida")
    ? router.replace("/editar/desayuno-comida/", "")
    : router.includes("flyers")
    ? router.replace("/editar/flyers/", "")
    : router.includes("pantalla")
    ? router.replace("/editar/pantalla/", ""): "" && postMenu == false;

  useEffect(() => {
    (async () => {

      //Dining
      if (selectedDay == "lunes") {
        const dinningResponseMonday = await getDinningMonday();
        setDinner(dinningResponseMonday.data);
      }
      if (selectedDay == "martes") {
        const dinningResponseTuesday = await getDinningTuesday();
        setDinner(dinningResponseTuesday.data);
      }
      if (selectedDay == "miercoles") {
        const dinningResponseWednesday = await getDinningWednesday();
        setDinner(dinningResponseWednesday.data);
      }
      if (selectedDay == "jueves") {
        const dinningResponseThursday = await getDinningThursday();
        setDinner(dinningResponseThursday.data);
      }
      if (selectedDay == "viernes") {
        const dinningResponseFriday = await getDinningFriday();
        setDinner(dinningResponseFriday.data);
      }
      if (selectedDay == "sabado") {
        const dinningResponseSaturday = await getDinningSaturday();
        setDinner(dinningResponseSaturday.data);
      }
      if (selectedDay == "domingo") {
        const dinningResponseSunday = await getDinningSunday();
        setDinner(dinningResponseSunday.data);
      }
      //Breakfast
      if (selectedDay == "lunes") {
        const breakfastResponseMonday = await getBreakfastMonday();
        setBreakfast(breakfastResponseMonday.data);
      }
      if (selectedDay == "martes") {
        const breakfastResponseTuesday = await getBreakfastTuesday();
        setBreakfast(breakfastResponseTuesday.data);
      }
      if (selectedDay == "miercoles") {
        const breakfastResponseWednesday = await getBreakfastWednesday();
        setBreakfast(breakfastResponseWednesday.data);
      }
      if (selectedDay == "jueves") {
        const breakfastResponseThursday = await getBreakfastThursday();
        setBreakfast(breakfastResponseThursday.data);
      }
      if (selectedDay == "viernes") {
        const breakfastResponseFriday = await getBreakfastFriday();
        setBreakfast(breakfastResponseFriday.data);
      }
      if (selectedDay == "sabado") {
        const breakfastResponseSaturday = await getBreakfastSaturday();
        setBreakfast(breakfastResponseSaturday.data);
      }
      if (selectedDay == "domingo") {
        const breakfastResponseSunday = await getBreakfastSunday();
        setBreakfast(breakfastResponseSunday.data);
      }
    })();
  }, [
    selectedDay,
    updateDinningMonday,
    updateDinningTuesday,
    updateDinningWednesday,
    updateDinningThursday,
    updateDinningFriday,
    updateDinningSaturday,
    updateDinningSunday,
  ]);
//Dining
  const handleIndexMenuDining = (item) => {
    menusArrayDining[0][menuId] = item;
  };

  const pushMenuDining = (item) => {
    menusArrayDining[0].push(item);
  };

  const menusArrayDining = dinner
    ?.filter((item) => item.id == id)
    .map((menus) => menus.attributes.menus);

    //Breakfast
  const handleIndexMenuBreakfast = (item) => {
    menusArrayBreakfast[0][menuId] = item;
  };

  const pushMenuBreakfast = (item) => {
    menusArrayBreakfast[0].push(item);
  };

  const menusArrayBreakfast = breakfast
    ?.filter((item) => item.id == id)
    .map((menus) => menus.attributes.menus);

  return (
    <div className={styles.container}>
      <h1>Elige un menu</h1>
      <div className={styles.image_container}>
        {info.menusGallery.map((item, i) => (
          <Image
            key={i}
            src={item}
            alt="bar"
            width={1080}
            height={1920}
            priority
            onClick={() => {
              // DINNING
              if (
                selectedSection == "cena" &&
                selectedDay == "lunes" &&
                id !== null &&
                postMenu == false
              ) {
                handleIndexMenuDining(item);
                updateDinningMonday({ menus: [...menusArrayDining[0]] }, id);
              } else  if (
                selectedSection == "cena" &&
                selectedDay == "lunes" &&
                id !== null &&
                postMenu == true
              ) {
                pushMenuDining(item);
                updateDinningMonday({ menus: [...menusArrayDining[0]] }, id);
              }
              if (
                selectedSection == "cena" &&
                selectedDay == "martes" &&
                id !== null &&
                postMenu == false
              ) {
                handleIndexMenuDining(item);
                updateDinningTuesday({ menus: [...menusArrayDining[0]] }, id);
              } else  if (
                selectedSection == "cena" &&
                selectedDay == "martes" &&
                id !== null &&
                postMenu == true
              ) {
                pushMenuDining(item);
                updateDinningTuesday({ menus: [...menusArrayDining[0]] }, id);
              }
              if (
                selectedSection == "cena" &&
                selectedDay == "miercoles" &&
                id !== null &&
                postMenu == false
              ) {
                handleIndexMenuDining(item);
                updateDinningWednesday({ menus: [...menusArrayDining[0]] }, id);
              } else  if (
                selectedSection == "cena" &&
                selectedDay == "miercoles" &&
                id !== null &&
                postMenu == true
              ) {
                pushMenuDining(item);
                updateDinningWednesday({ menus: [...menusArrayDining[0]] }, id);
              }
              if (
                selectedSection == "cena" &&
                selectedDay == "jueves" &&
                id !== null &&
                postMenu == false
              ) {
                handleIndexMenuDining(item);
                updateDinningThursday({ menus: [...menusArrayDining[0]] }, id);
              } else  if (
                selectedSection == "cena" &&
                selectedDay == "jueves" &&
                id !== null &&
                postMenu == true
              ) {
                pushMenuDining(item);
                updateDinningThursday({ menus: [...menusArrayDining[0]] }, id);
              }
              if (
                selectedSection == "cena" &&
                selectedDay == "viernes" &&
                id !== null &&
                postMenu == false
              ) {
                handleIndexMenuDining(item);
                updateDinningFriday({ menus: [...menusArrayDining[0]] }, id);
              } else  if (
                selectedSection == "cena" &&
                selectedDay == "viernes" &&
                id !== null &&
                postMenu == true
              ) {
                pushMenuDining(item);
                updateDinningFriday({ menus: [...menusArrayDining[0]] }, id);
              }
              if (
                selectedSection == "cena" &&
                selectedDay == "sabado" &&
                id !== null &&
                postMenu == false
              ) {
                handleIndexMenuDining(item);
                updateDinningSaturday({ menus: [...menusArrayDining[0]] }, id);
              } else  if (
                selectedSection == "cena" &&
                selectedDay == "sabado" &&
                id !== null &&
                postMenu == true
              ) {
                pushMenuDining(item);
                updateDinningSaturday({ menus: [...menusArrayDining[0]] }, id);
              }
              if (
                selectedSection == "cena" &&
                selectedDay == "domingo" &&
                id !== null &&
                postMenu == false
              ) {
                handleIndexMenuDining(item);
                updateDinningSunday({ menus: [...menusArrayDining[0]] }, id);
              } else  if (
                selectedSection == "cena" &&
                selectedDay == "domingo" &&
                id !== null &&
                postMenu == true
              ) {
                pushMenuDining(item);
                updateDinningSunday({ menus: [...menusArrayDining[0]] }, id);
              }

              // BREAKFAST
              if (
                selectedSection == "desayuno-comida" &&
                selectedDay == "lunes" &&
                id !== null &&
                postMenu == false
              ) {
                handleIndexMenuBreakfast(item);
                updateBreakfastMonday({ menus: [...menusArrayBreakfast[0]] }, id);
              } else  if (
                selectedSection == "desayuno-comida" &&
                selectedDay == "lunes" &&
                id !== null &&
                postMenu == true
              ) {
                pushMenuBreakfast(item);
                updateBreakfastMonday({ menus: [...menusArrayBreakfast[0]] }, id);

              }
              if (
                selectedSection == "desayuno-comida" &&
                selectedDay == "martes" &&
                id !== null &&
                postMenu == false
              ) {
                handleIndexMenuBreakfast(item);
                updateBreakfastTuesday({ menus: [...menusArrayBreakfast[0]] }, id);
              } else  if (
                selectedSection == "desayuno-comida" &&
                selectedDay == "martes" &&
                id !== null &&
                postMenu == true
              ) {
                pushMenuBreakfast(item);
                updateBreakfastTuesday({ menus: [...menusArrayBreakfast[0]] }, id);

              }
              if (
                selectedSection == "desayuno-comida" &&
                selectedDay == "miercoles" &&
                id !== null &&
                postMenu == false
              ) {
                handleIndexMenuBreakfast(item);
                updateBreakfastWednesday({ menus: [...menusArrayBreakfast[0]] }, id);
              } else  if (
                selectedSection == "desayuno-comida" &&
                selectedDay == "miercoles" &&
                id !== null &&
                postMenu == true
              ) {
                pushMenuBreakfast(item);
                updateBreakfastWednesday({ menus: [...menusArrayBreakfast[0]] }, id);

              }
              if (
                selectedSection == "desayuno-comida" &&
                selectedDay == "jueves" &&
                id !== null &&
                postMenu == false
              ) {
                handleIndexMenuBreakfast(item);
                updateBreakfastThursday({ menus: [...menusArrayBreakfast[0]] }, id);
              } else  if (
                selectedSection == "desayuno-comida" &&
                selectedDay == "jueves" &&
                id !== null &&
                postMenu == true
              ) {
                pushMenuBreakfast(item);
                updateBreakfastThursday({ menus: [...menusArrayBreakfast[0]] }, id);

              }
              if (
                selectedSection == "desayuno-comida" &&
                selectedDay == "viernes" &&
                id !== null &&
                postMenu == false
              ) {
                handleIndexMenuBreakfast(item);
                updateBreakfastFriday({ menus: [...menusArrayBreakfast[0]] }, id);
              } else  if (
                selectedSection == "desayuno-comida" &&
                selectedDay == "viernes" &&
                id !== null &&
                postMenu == true
              ) {
                pushMenuBreakfast(item);
                updateBreakfastFriday({ menus: [...menusArrayBreakfast[0]] }, id);

              }
              if (
                selectedSection == "desayuno-comida" &&
                selectedDay == "sabado" &&
                id !== null &&
                postMenu == false
              ) {
                handleIndexMenuBreakfast(item);
                updateBreakfastSaturday({ menus: [...menusArrayBreakfast[0]] }, id);
              } else  if (
                selectedSection == "desayuno-comida" &&
                selectedDay == "sabado" &&
                id !== null &&
                postMenu == true
              ) {
                pushMenuBreakfast(item);
                updateBreakfastSaturday({ menus: [...menusArrayBreakfast[0]] }, id);

              }
              if (
                selectedSection == "desayuno-comida" &&
                selectedDay == "domingo" &&
                id !== null &&
                postMenu == false
              ) {
                handleIndexMenuBreakfast(item);
                updateBreakfastSunday({ menus: [...menusArrayBreakfast[0]] }, id);
              }else  if (
                selectedSection == "desayuno-comida" &&
                selectedDay == "domingo" &&
                id !== null &&
                postMenu ==true
              ){
                pushMenuBreakfast(item);
                updateBreakfastSunday({ menus: [...menusArrayBreakfast[0]] }, id);

              }
              closeModal();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MenusGallery;
