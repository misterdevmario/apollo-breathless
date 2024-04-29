"use client";

import Image from "next/image";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useInfo } from "@/context/Context";
import { useModal } from "../modal/useModal";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import FlyersGallery from "./gallery/FlyersGallery";
import { RiImageAddLine } from "react-icons/ri";
import styles from "./Flyers.module.css";
import { useModalDesc } from "../modalDesc/useModalDesc";
import { usePathname } from "next/navigation";
import ModalDesc from "../modalDesc/ModalDesc";
import { time } from "@/lib/language";
import {
  getFlyersMonday,
  getFlyersTitleMonday,
} from "@/lib/apidaysweek/apimonday";
import {
  getFlyersTitleTuesday,
  getFlyersTuesday,
} from "@/lib/apidaysweek/apituesday";
import {
  getFlyersTitleWednesday,
  getFlyersWednesday,
} from "@/lib/apidaysweek/apiwednesday";
import {
  getFlyersThursday,
  getFlyersTitleThursday,
} from "@/lib/apidaysweek/apithursday";
import {
  getFlyersFriday,
  getFlyersTitleFriday,
} from "@/lib/apidaysweek/apifriday";
import {
  getFlyersSaturday,
  getFlyersTitleSaturday,
} from "@/lib/apidaysweek/apisaturday";
import {
  getFlyersSunday,
  getFlyersTitleSunday,
} from "@/lib/apidaysweek/apisunday";

const validation = Yup.object().shape({
  nameEn: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  nameEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  hourStart: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  hourEnd: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  spotEn: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  spotEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
});

const titleValidation = Yup.object().shape({
  nameEn: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  nameEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
});
const Flyers = () => {
  const [flyer, setFlyer] = useState();
  const [flyerTitle, setFlyerTitle] = useState();
  const {
    updateFlyerMonday,
    postFlyerMonday,
    deleteFlyerMonday,

    updateFlyerTuesday,
    postFlyerTuesday,
    deleteFlyerTuesday,

    updateFlyerWednesday,
    postFlyerWednesday,
    deleteFlyerWednesday,

    updateFlyerThursday,
    postFlyerThursday,
    deleteFlyerThursday,

    updateFlyerFriday,
    postFlyerFriday,
    deleteFlyerFriday,

    updateFlyerSaturday,
    postFlyerSaturday,
    deleteFlyerSaturday,

    updateFlyerSunday,
    postFlyerSunday,
    deleteFlyerSunday,
    updateFlyerTitleMonday,
    updateFlyerTitleTuesday,
    updateFlyerTitleWednesday,
    updateFlyerTitleThursday,
    updateFlyerTitleFriday,
    updateFlyerTitleSaturday,
    updateFlyerTitleSunday,
    flyerImage,
    handleDescription,
  } = useInfo();
  const [id, setId] = useState("");
  const [desc, setDesc] = useState("");

  const [isOpenGallery, openGallery, closeGallery] = useModal(true);
  const [isOpenModalFlyerEn, openModalFlyerEn, closeModalFlyerEn] =
    useModalDesc(true);
  const [isOpenModalFlyerEs, openModalFlyerEs, closeModalFlyerEs] =
    useModalDesc(true);
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
        const flyersResponseMonday = await getFlyersMonday();
        const flyersTitleResponseMonday = await getFlyersTitleMonday();
        setFlyer(flyersResponseMonday.data);
        setFlyerTitle(flyersTitleResponseMonday.data);
      }
      if (selectedDay == "martes") {
        const flyersResponseTuesday = await getFlyersTuesday();
        const flyersTitleResponseTuesday = await getFlyersTitleTuesday();
        setFlyer(flyersResponseTuesday.data);
        setFlyerTitle(flyersTitleResponseTuesday.data);
      }
      if (selectedDay == "miercoles") {
        const flyersResponseWednesday = await getFlyersWednesday();
        const flyersTitleResponseWednesday = await getFlyersTitleWednesday();
        setFlyer(flyersResponseWednesday.data);
        setFlyerTitle(flyersTitleResponseWednesday.data);
      }
      if (selectedDay == "jueves") {
        const flyersResponseThursday = await getFlyersThursday();
        const flyersTitleResponseThursday = await getFlyersTitleThursday();
        setFlyer(flyersResponseThursday.data);
        setFlyerTitle(flyersTitleResponseThursday.data);
      }
      if (selectedDay == "viernes") {
        const flyersResponseFriday = await getFlyersFriday();
        const flyersTitleResponseFriday = await getFlyersTitleFriday();
        setFlyer(flyersResponseFriday.data);
        setFlyerTitle(flyersTitleResponseFriday.data);
      }
      if (selectedDay == "sabado") {
        const flyersResponseSaturday = await getFlyersSaturday();
        const flyersTitleResponseSaturday = await getFlyersTitleSaturday();
        setFlyer(flyersResponseSaturday.data);
        setFlyerTitle(flyersTitleResponseSaturday.data);
      }
      if (selectedDay == "domingo") {
        const flyersResponseSunday = await getFlyersSunday();
        const flyersTitleResponseSunday = await getFlyersTitleSunday();
        setFlyer(flyersResponseSunday.data);
        setFlyerTitle(flyersTitleResponseSunday.data);
      }
    })();
  }, [
    selectedDay,
    updateFlyerMonday,
    postFlyerMonday,
    deleteFlyerMonday,

    updateFlyerTuesday,
    postFlyerTuesday,
    deleteFlyerTuesday,

    updateFlyerWednesday,
    postFlyerWednesday,
    deleteFlyerWednesday,

    updateFlyerThursday,
    postFlyerThursday,
    deleteFlyerThursday,

    updateFlyerFriday,
    postFlyerFriday,
    deleteFlyerFriday,

    updateFlyerSaturday,
    postFlyerSaturday,
    deleteFlyerSaturday,

    updateFlyerSunday,
    postFlyerSunday,
    deleteFlyerSunday,
    updateFlyerTitleMonday,
    updateFlyerTitleTuesday,
    updateFlyerTitleWednesday,
    updateFlyerTitleThursday,
    updateFlyerTitleFriday,
    updateFlyerTitleSaturday,
    updateFlyerTitleSunday,
  ]);
  const handleFlyerEn = () => {
    const description = flyer
      .filter((item) => item.id == id)
      .map((item) => item.attributes.descEn);
    setDesc(description);
  };
  const handleFlyerEs = () => {
    const description = flyer
      .filter((item) => item.id == id)
      .map((item) => item.attributes.descEs);
    setDesc(description);
  };

  return (
    <div className={styles.container}>
      {flyerTitle?.map((item) => (
        <Formik
          key={item.id}
          initialValues={{
            nameEn: item.attributes.nameEn,
            nameEs: item.attributes.nameEs,
          }}
          validationSchema={titleValidation}
          onSubmit={async (data, actions) => {
            if (selectedDay == "lunes")
              await updateFlyerTitleMonday(data, item.id);
            if (selectedDay == "martes")
              await updateFlyerTitleTuesday(data, item.id);
            if (selectedDay == "miercoles")
              await updateFlyerTitleWednesday(data, item.id);
            if (selectedDay == "jueves")
              await updateFlyerTitleThursday(data, item.id);
            if (selectedDay == "viernes")
              await updateFlyerTitleFriday(data, item.id);
            if (selectedDay == "sabado")
              await updateFlyerTitleSaturday(data, item.id);
            if (selectedDay == "domingo")
              await updateFlyerTitleSunday(data, item.id);
          }}
        >
          <Form className={styles.title}>
            <label htmlFor="">Titulo ingles</label>
            <Field name="nameEn" placeholder="titulo ingles" />
            <ErrorMessage
              name="nameEn"
              component="p"
              className={styles.error}
            />
            <label htmlFor="">Titulo español</label>
            <Field name="nameEs" placeholder="titulo español" />
            <ErrorMessage
              name="nameEs"
              component="p"
              className={styles.error}
            />
            <button type="submit">Guardar</button>
          </Form>
        </Formik>
      ))}
      <div className={styles.cards_container}>
        {flyer?.map((item, i) => (
          <Formik
            key={item.id}
            initialValues={{
              nameEn: item.attributes.nameEn,
              nameEs: item.attributes.nameEs,
              hourStart: item.attributes.hourStart,
              hourEnd: item.attributes.hourEnd,
              spotEn: item.attributes.spotEn,
              spotEs: item.attributes.spotEs,
            }}
            validationSchema={validation}
            onSubmit={async (data, actions) => {
              if (selectedDay == "lunes")
                await updateFlyerMonday(data, item.id);
              if (selectedDay == "martes")
                await updateFlyerTuesday(data, item.id);
              if (selectedDay == "miercoles")
                await updateFlyerWednesday(data, item.id);
              if (selectedDay == "jueves")
                await updateFlyerThursday(data, item.id);
              if (selectedDay == "viernes")
                await updateFlyerFriday(data, item.id);
              if (selectedDay == "sabado")
                await updateFlyerSaturday(data, item.id);
              if (selectedDay == "domingo")
                await updateFlyerSunday(data, item.id);
            }}
          >
            {({ handleSubmit }) => (
              <div>
                <Form className={styles.form}>
                  <div className={styles.inputs}>
                    <div className={styles.hours}>
                      <Field
                        as="select"
                        name="hourStart"
                        placeholder={"Inicio"}
                      >
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
                    <Field name="nameEn" placeholder="nombre ingles" />
                    <ErrorMessage
                      name="nameEn"
                      component="p"
                      className={styles.error}
                    />
                    <Field name="nameEs" placeholder="nombre español" />
                    <ErrorMessage
                      name="nameEs"
                      component="p"
                      className={styles.error}
                    />
                    <Field name="spotEn" placeholder="locacion ingles" />
                    <ErrorMessage
                      name="spotEn"
                      component="p"
                      className={styles.error}
                    />
                    <Field name="spotEs" placeholder="locacion español" />
                    <ErrorMessage
                      name="spotEs"
                      component="p"
                      className={styles.error}
                    />
                    <Field
                      value={item.attributes.descEn}
                      placeholder="Descripcion Ingles"
                      onClick={() => {
                        handleFlyerEn();
                        openModalFlyerEn();
                      }}
                      onMouseEnter={() => setId(item.id)}
                    />

                    <Field
                      value={item.attributes.descEs}
                      placeholder="Descripcion Español"
                      onClick={() => {
                        handleFlyerEs();
                        openModalFlyerEs();
                      }}
                      onMouseEnter={() => setId(item.id)}
                    />

                    <button className={styles.save} type="submit">
                      Guardar
                    </button>
                    {flyer?.length > 1 ? (
                      <button
                        type="button"
                        className={styles.delete}
                        onClick={() => {
                          if (selectedDay == "lunes")
                            deleteFlyerMonday(item.id);
                          if (selectedDay == "martes")
                            deleteFlyerTuesday(item.id);
                          if (selectedDay == "miercoles")
                            deleteFlyerWednesday(item.id);
                          if (selectedDay == "jueves")
                            deleteFlyerThursday(item.id);
                          if (selectedDay == "viernes")
                            deleteFlyerFriday(item.id);
                          if (selectedDay == "sabado")
                            deleteFlyerSaturday(item.id);
                          if (selectedDay == "domingo")
                            deleteFlyerSunday(item.id);
                        }}
                      >
                        Eliminar
                      </button>
                    ) : null}
                  </div>
                  <Image
                    className={styles.form_image}
                    src={item.attributes.flyerImg}
                    alt="bar"
                    width={200}
                    height={250}
                    priority
                    onClick={() => {
                      openGallery();
                      setId(item.id);
                    }}
                  />
                </Form>
              </div>
            )}
          </Formik>
        ))}
        <ModalDesc
          isOpen={isOpenModalFlyerEn}
          En
          closeModal={closeModalFlyerEn}
        >
          <div className={styles.description}>
            <div>descripción ingles</div>

            <textarea
              type="textarea"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              maxLength="120"
              cols="30"
              rows="5"
            />
            <button
              onClick={() => {
                handleDescription(desc);
                if (selectedDay == "lunes")
                  updateFlyerMonday({ descEn: desc }, id);
                if (selectedDay == "martes")
                  updateFlyerTuesday({ descEn: desc }, id);
                if (selectedDay == "miercoles")
                  updateFlyerWednesday({ descEn: desc }, id);
                if (selectedDay == "jueves")
                  updateFlyerThursday({ descEn: desc }, id);
                if (selectedDay == "viernes")
                  updateFlyerFriday({ descEn: desc }, id);
                if (selectedDay == "sabado")
                  updateFlyerSaturday({ descEn: desc }, id);
                if (selectedDay == "domingo")
                  updateFlyerSunday({ descEn: desc }, id);
                closeModalFlyerEn();
              }}
              disabled={!desc}
            >
              Guardar
            </button>
          </div>
        </ModalDesc>
        <ModalDesc isOpen={isOpenModalFlyerEs} closeModal={closeModalFlyerEs}>
          <div className={styles.description}>
            <div>descripción español</div>
            <textarea
              type="textarea"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              maxLength="120"
              cols="30"
              rows="5"
            />
            <button
              onClick={() => {
                handleDescription(desc);
                if (selectedDay == "lunes")
                  updateFlyerMonday({ descEs: desc }, id);
                if (selectedDay == "martes")
                  updateFlyerTuesday({ descEs: desc }, id);
                if (selectedDay == "miercoles")
                  updateFlyerWednesday({ descEs: desc }, id);
                if (selectedDay == "jueves")
                  updateFlyerThursday({ descEs: desc }, id);
                if (selectedDay == "viernes")
                  updateFlyerFriday({ descEs: desc }, id);
                if (selectedDay == "sabado")
                  updateFlyerSaturday({ descEs: desc }, id);
                if (selectedDay == "domingo")
                  updateFlyerSunday({ descEs: desc }, id);
                closeModalFlyerEs();
              }}
              disabled={!desc}
            >
              Guardar
            </button>
          </div>
        </ModalDesc>
        <Formik
          initialValues={{
            hourStart: "",
            hourEnd: "",
            nameEn: "",
            nameEs: "",
            spotEn: "",
            spotEs: "",
            descEn: "",
            descEs: "",
          }}
          validationSchema={validation}
          onSubmit={async (data, { resetForm }) => {
            data.flyerImg = flyerImage;
            if (selectedDay == "lunes") await postFlyerMonday(data);
            if (selectedDay == "martes") await postFlyerTuesday(data);
            if (selectedDay == "miercoles") await postFlyerWednesday(data);
            if (selectedDay == "jueves") await postFlyerThursday(data);
            if (selectedDay == "viernes") await postFlyerFriday(data);
            if (selectedDay == "sabado") await postFlyerSaturday(data);
            if (selectedDay == "domingo") await postFlyerSunday(data);
            resetForm({ values: "" });
          }}
        >
          {({ handleSubmit }) => (
            <div>
              <Form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputs}>
                  <div className={styles.hours}>
                    <Field as="select" name="hourStart" placeholder="Inicio">
                      <option value="defaultValue">Inicio</option>
                      {time.map((item, i) => (
                        <option key={i} value={item}>
                          {item}
                        </option>
                      ))}
                    </Field>
                    <Field as="select" name="hourEnd" placeholder="Termino">
                      <option value="defaultValue">termino</option>
                      {time.map((item, i) => (
                        <option key={i} value={item}>
                          {item}
                        </option>
                      ))}
                    </Field>
                  </div>

                  <Field name="nameEn" placeholder="nombre ingles" />
                  <ErrorMessage
                    name="nameEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="nameEs" placeholder="nombre español" />
                  <ErrorMessage
                    name="nameEs"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="spotEn" placeholder="locacion ingles" />
                  <ErrorMessage
                    name="spotEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="spotEs" placeholder="locacion español" />
                  <ErrorMessage
                    name="spotEs"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="descEn" placeholder="descripción ingles" />
                  <ErrorMessage
                    name="descEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="descEs" placeholder="descripción español" />
                  <ErrorMessage
                    name="descEs"
                    component="p"
                    className={styles.error}
                  />
                  <button
                    className={styles.save}
                    disabled={!flyerImage}
                    type="submit"
                  >
                    Guardar
                  </button>
                </div>

                {!flyerImage ? (
                  <div className="flex items-center justify-center w-1/2 h-12">
                    <RiImageAddLine
                      size={80}
                      onClick={() => {
                        openGallery();
                        setId(null);
                      }}
                    />
                  </div>
                ) : (
                  <Image
                    className={styles.post_form_image}
                    src={flyerImage}
                    alt="staff"
                    width={200}
                    height={250}
                    priority
                    onClick={() => {
                      openGallery();
                      setId(null);
                    }}
                  />
                )}
              </Form>
              <Modal isOpen={isOpenGallery} closeModal={closeGallery}>
                <FlyersGallery id={id} closeModal={closeGallery} />
              </Modal>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Flyers;
