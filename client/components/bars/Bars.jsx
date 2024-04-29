"use client";

import Image from "next/image";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useInfo } from "@/context/Context";
import { useModal } from "../modal/useModal";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import styles from "./Bars.module.css";
import BarsGallery from "./gallery/BarsGallery";
import { usePathname } from "next/navigation";
import { time } from "@/lib/language";
import { getBarsMonday } from "@/lib/apidaysweek/apimonday";
import { getBarsTuesday } from "@/lib/apidaysweek/apituesday";
import { getBarsWednesday } from "@/lib/apidaysweek/apiwednesday";
import { getBarsThursday } from "@/lib/apidaysweek/apithursday";
import { getBarsFriday } from "@/lib/apidaysweek/apifriday";
import { getBarsSaturday } from "@/lib/apidaysweek/apisaturday";
import { getBarsSunday } from "@/lib/apidaysweek/apisunday";

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

const Bars = () => {
  const [bars, setBars] = useState();
  const {
    updateBarMonday,
    updateBarTuesday,
    updateBarWednesday,
    updateBarThursday,
    updateBarFriday,
    updateBarSaturday,
    updateBarSunday,
  } = useInfo();
  const [id, setId] = useState("");
  const [isOpenGallery, openGallery, closeGallery] = useModal(true);


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
  useEffect(() => {
    (async () => {
      if (selectedDay == "lunes") {
        const barsResponseMonday = await getBarsMonday();
        setBars(barsResponseMonday.data);
      }
      if (selectedDay == "martes") {
        const barsResponseTuesday = await getBarsTuesday();
        setBars(barsResponseTuesday.data);
      }
      if (selectedDay == "miercoles") {
        const barsResponseWednesday = await getBarsWednesday();
        setBars(barsResponseWednesday.data);
      }
      if (selectedDay == "jueves") {
        const barsResponseThursday = await getBarsThursday();
        setBars(barsResponseThursday.data);
      }
      if (selectedDay == "viernes") {
        const barsResponseFriday = await getBarsFriday();
        setBars(barsResponseFriday.data);
      }
      if (selectedDay == "sabado") {
        const barsResponseSaturday = await getBarsSaturday();
        setBars(barsResponseSaturday.data);
      }
      if (selectedDay == "domingo") {
        const barsResponseSunday = await getBarsSunday();
        setBars(barsResponseSunday.data);
      }
    })();
  }, [
    selectedDay,
    updateBarMonday,
    updateBarTuesday,
    updateBarWednesday,
    updateBarThursday,
    updateBarFriday,
    updateBarSaturday,
    updateBarSunday,
  ]);

  const handleMenuLgEn = () => {
    const description = bars
      .filter((item) => item.id == id)
      .map((item) => item.attributes?.menuImgEn);
    setMenuLgEn(description.toString());
  };
  const handleMenuLgEs = () => {
    const description = bars
      .filter((item) => item.id == id)
      .map((item) => item.attributes?.menuImgEs);
    setMenuLgEs(description.toString());
  };
  const sortedBars = bars?.sort((a, b) => a.id - b.id);
  return (
    <div className={styles.container}>
      {sortedBars?.map((item) => (
        <Formik
          key={item.id}
          initialValues={{
            name: item.attributes.name.toUpperCase(),
            hourStart: item.attributes.hourStart.toUpperCase(),
            hourEnd: item.attributes.hourEnd.toUpperCase(),
          }}
          validationSchema={validation}
          onSubmit={async (data, actions) => {
            if (selectedDay == "lunes") await updateBarMonday(data, item.id);
            if (selectedDay == "martes") await updateBarTuesday(data, item.id);
            if (selectedDay == "miercoles")
              await updateBarWednesday(data, item.id);
            if (selectedDay == "jueves") await updateBarThursday(data, item.id);
            if (selectedDay == "viernes") await updateBarFriday(data, item.id);
            if (selectedDay == "sabado") await updateBarSaturday(data, item.id);
            if (selectedDay == "domingo") await updateBarSunday(data, item.id);
          }}
        >
          {({ handlesubmit }) => (
            <div key={item.id}>
              <Form className={styles.form}>
                <div className={styles.hours}>
                  <Field as="select" name="hourStart" placeholder={"Inicio"}>
                    <option value="defaultValue">
                      {item.attributes.hourStart}
                    </option>
                    {time.map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </Field>
                  <Field as="select" name="hourEnd" placeholder={"Termino"}>
                    <option value="defaultValue">
                      {item.attributes.hourEnd}
                    </option>
                    {time.map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </Field>
                </div>
                <Field name="name" placeholder="nombre" />
                <ErrorMessage
                  name="name"
                  component="p"
                  className={styles.error}
                />

                <Image
                  src={item.attributes.barImg}
                  alt="bar"
                  width={200}
                  height={250}
                  priority
                  onClick={() => {
                    openGallery();
                    setId(item.id);
                  }}
                />
                {/* <div className={styles.menus}>
                  <div className={styles.menuitem}>
                    <label htmlFor="">Menu ingles</label>
                    <Image
                      src={item.attributes.menuImgEn}
                      alt="bar"
                      width={200}
                      height={250}
                      priority
                      onClick={() => {
                        setId(item.id);
                        handleMenuLgEn();
                        openMenuLgEn();
                      }}
                      onMouseEnter={() => setId(item.id)}
                    />{" "}
                  </div>
                  <div className={styles.menuitem}>
                    <label htmlFor="">menu español</label>
                    <Image
                      src={item.attributes.menuImgEs}
                      alt="bar"
                      width={200}
                      height={250}
                      priority
                      onClick={() => {
                        setId(item.id);
                        handleMenuLgEs();
                        openMenuLgEs();
                      }}
                      onMouseEnter={() => setId(item.id)}
                    />
                  </div>
                </div> */}
                <button className={styles.save} type="submit">
                  Guardar
                </button>
              </Form>
            </div>
          )}
        </Formik>
      ))}
      {/* <Modal isOpen={isOpenMenuLgEn} closeModal={closeMenuLgEn}>
        <div className={styles.menuLg}>
          <h1>Menu ingles</h1>
          <Image src={menuLgEn} alt="Menu" width={600} height={800} priority />
        </div>
      </Modal>
      <Modal isOpen={isOpenMenuLgEs} closeModal={closeMenuLgEs}>
        <div className={styles.menuLg}>
          <h1> Menu español</h1>
          <Image src={menuLgEs} alt="Menu" width={600} height={800} priority />
        </div>
      </Modal>*/}
      <Modal isOpen={isOpenGallery} closeModal={closeGallery}>
        <BarsGallery id={id} closeModal={closeGallery} />
      </Modal> 
    </div>
  );
};

export default Bars;
