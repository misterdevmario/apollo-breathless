"use client";

import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useInfo } from "@/context/Context";
import Modal from "@/components/modal/Modal";
import { useModal } from "@/components/modal/useModal";
import { useModalDesc } from "@/components/modalDesc/useModalDesc";
import { useEffect, useState } from "react";
import { RiImageAddLine } from "react-icons/ri";
import ActivitiesGallery from "./gallery/ActivitiesGallery";
import { time } from "@/lib/language";
import ModalDesc from "@/components/modalDesc/ModalDesc";
import styles from "./Carousel.module.css";
import { usePathname } from "next/navigation";
import { getActivitiesMonday } from "@/lib/apidaysweek/apimonday";
import { getActivitiesTuesday } from "@/lib/apidaysweek/apituesday";
import { getActivitiesWednesday } from "@/lib/apidaysweek/apiwednesday";
import { getActivitiesThursday } from "@/lib/apidaysweek/apithursday";
import { getActivitiesFriday } from "@/lib/apidaysweek/apifriday";
import { getActivitiesSaturday } from "@/lib/apidaysweek/apisaturday";
import { getActivitiesSunday } from "@/lib/apidaysweek/apisunday";

const validation = Yup.object().shape({
  activitieEn: Yup.string()
    .required("*Campo requerido")
    .max(22, "La longitud maxima es de 22 letras!"),
  activitieEs: Yup.string()
    .required("*Campo requerido")
    .max(22, "La longitud maxima es de 22 letras!"),

  hourStart: Yup.string().required("*Campo requerido"),
  hourEnd: Yup.string().required("*Campo requerido"),

  spotEn: Yup.string()
    .required("*Campo requerido")
    .max(22, "La longitud maxima es de 22 letras!"),
  spotEs: Yup.string()
    .required("*Campo requerido")
    .max(22, "La longitud maxima es de 22 letras!"),
});

const Carousel = () => {
  const [activities, setActivities] = useState();
  const {
    updateActivityMonday,
    postActivityMonday,
    deleteActivityMonday,

    updateActivityTuesday,
    postActivityTuesday,
    deleteActivityTuesday,

    updateActivityWednesday,
    postActivityWednesday,
    deleteActivityWednesday,

    updateActivityThursday,
    postActivityThursday,
    deleteActivityThursday,

    updateActivityFriday,
    postActivityFriday,
    deleteActivityFriday,

    updateActivitySaturday,
    postActivitySaturday,
    deleteActivitySaturday,

    updateActivitySunday,
    postActivitySunday,
    deleteActivitySunday,
    image,
    handleDescription,
  } = useInfo();
  const [colorActive, setColorActive] = useState("");
  const [id, setId] = useState("");
  const [desc, setDesc] = useState("");
  const [isOpenGallery, openGallery, closeGallery] = useModal(true);
  const [isOpenModalDescEn, openModalDescEn, closeModalDescEn] =
    useModalDesc(true);
  const [isOpenModalDescEs, openModalDescEs, closeModalDescEs] =
    useModalDesc(true);
  const [hoursUppercase, sethoursUppercase] = useState([]);
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
        const activitiesResponseMonday = await getActivitiesMonday();
        setActivities(activitiesResponseMonday.data);
      }
      if (selectedDay == "martes") {
        const activitiesResponseTuesday = await getActivitiesTuesday();
        setActivities(activitiesResponseTuesday.data);
      }
      if (selectedDay == "miercoles") {
        const activitiesResponseWednesday = await getActivitiesWednesday();
        setActivities(activitiesResponseWednesday.data);
      }
      if (selectedDay == "jueves") {
        const activitiesResponseThursday = await getActivitiesThursday();
        setActivities(activitiesResponseThursday.data);
      }
      if (selectedDay == "viernes") {
        const activitiesResponseFriday = await getActivitiesFriday();
        setActivities(activitiesResponseFriday.data);
      }
      if (selectedDay == "sabado") {
        const activitiesResponseSaturday = await getActivitiesSaturday();
        setActivities(activitiesResponseSaturday.data);
      }
      if (selectedDay == "domingo") {
        const activitiesResponseSunday = await getActivitiesSunday();
        setActivities(activitiesResponseSunday.data);
      }
    })();
  }, [
    selectedDay,
    updateActivityMonday,
    postActivityMonday,
    deleteActivityMonday,

    updateActivityTuesday,
    postActivityTuesday,
    deleteActivityTuesday,

    updateActivityWednesday,
    postActivityWednesday,
    deleteActivityWednesday,

    updateActivityThursday,
    postActivityThursday,
    deleteActivityThursday,

    updateActivityFriday,
    postActivityFriday,
    deleteActivityFriday,

    updateActivitySaturday,
    postActivitySaturday,
    deleteActivitySaturday,

    updateActivitySunday,
    postActivitySunday,
    deleteActivitySunday,
  ]);
  useEffect(() => {
    const hoursUppercase = [];
    for (let i = 0; i < time.length; i++) {
      for (let j = 0; j < activities?.length; j++) {
        if (time[i] === activities[j].attributes.hourStart.toLocaleLowerCase())
          hoursUppercase.push(activities[j]);
      }
    }
    sethoursUppercase(hoursUppercase);
  }, [activities, desc]);

console.log(hoursUppercase)

  const handleDescEn = () => {
    const description = hoursUppercase
      .filter((item) => item.id == id)
      .map((item) => item.attributes.descEn);
    setDesc(description);
  };
  const handleDescEs = () => {
    const description = hoursUppercase
      .filter((item) => item.id == id)
      .map((item) => item.attributes.descEs);
    setDesc(description);
  };

  const handleColor = (e) => {
    setColorActive(e.target.id);
  };
  return (
    <div className={styles.container}>
      {hoursUppercase?.map((item) => (
        <Formik
          key={item.id}
          initialValues={{
            activitieEn: item.attributes.activitieEn.toUpperCase(),
            activitieEs: item.attributes.activitieEs.toUpperCase(),
            hourStart: item.attributes.hourStart.toUpperCase(),
            hourEnd: item.attributes.hourEnd.toUpperCase(),
            spotEn: item.attributes.spotEn.toUpperCase(),
            spotEs: item.attributes.spotEs.toUpperCase(),
          }}
          validationSchema={validation}
          onSubmit={async (data, actions) => {
            if (selectedDay == "lunes")
              await updateActivityMonday(data, item.id);
            if (selectedDay == "martes")
              await updateActivityTuesday(data, item.id);
            if (selectedDay == "miercoles")
              await updateActivityWednesday(data, item.id);
            if (selectedDay == "jueves")
              await updateActivityThursday(data, item.id);
            if (selectedDay == "viernes")
              await updateActivityFriday(data, item.id);
            if (selectedDay == "sabado")
              await updateActivitySaturday(data, item.id);
            if (selectedDay == "domingo")
              await updateActivitySunday(data, item.id);
          }}
        >
          {({ handleSubmit }) => (
            <div>
              <Form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputs}>
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
                  <Field name="activitieEn" placeholder="Actividad Ingles" />
                  <ErrorMessage
                    component="p"
                    className={styles.error}
                    name="activitieEn"
                  />
                  <Field name="activitieEs" placeholder="Actividad Español" />
                  <ErrorMessage
                    component="p"
                    className={styles.error}
                    name="activitieEs"
                  />
                  <Field name="spotEn" placeholder="Locacion Ingles" />
                  <ErrorMessage
                    component="p"
                    className={styles.error}
                    name="spotEn"
                  />
                  <Field name="spotEs" placeholder="Locacion Español" />
                  <ErrorMessage
                    component="p"
                    className={styles.error}
                    name="spotEs"
                  />
                  <Field
                    value={item.attributes.descEn}
                    name="descEn"
                    placeholder="Descripcion Ingles"
                    onClick={() => {
                      handleDescEn();
                      openModalDescEn();
                    }}
                    onMouseEnter={() => setId(item.id)}
                  />

                  <Field
                    value={item.attributes.descEs}
                    id={item.id}
                    placeholder="Descripcion Español"
                    onClick={() => {
                      handleDescEs();
                      openModalDescEs();
                    }}
                    onMouseEnter={() => setId(item.id)}
                  />

                  {/* <div className={styles.colors}>
                    <div
                      className={styles.green}
                      id="blue_active"
                      onClick={(e) => handleColor(e)}
                    ></div>
                    <div
                      className={styles.blue}
                      id="blue_active"
                      onClick={(e) => handleColor(e)}
                    ></div>
                    <Field name="color" placeholder="Actividad Español" />
                  </div> */}

                  <button className={styles.save} type="submit">
                    Guardar
                  </button>
                  {activities.length > 12 ? (
                    <button
                      type="button"
                      className={styles.delete}
                      onClick={() => {
                        if (selectedDay == "lunes")
                          deleteActivityMonday(item.id);
                        if (selectedDay == "martes")
                          deleteActivityTuesday(item.id);
                        if (selectedDay == "miercoles")
                          deleteActivityWednesday(item.id);
                        if (selectedDay == "jueves")
                          deleteActivityThursday(item.id);
                        if (selectedDay == "viernes")
                          deleteActivityFriday(item.id);
                        if (selectedDay == "sabado")
                          deleteActivitySaturday(item.id);
                        if (selectedDay == "domingo")
                          deleteActivitySunday(item.id);
                      }}
                    >
                      Eliminar
                    </button>
                  ) : null}
                </div>
                <Image
                  className={styles.form_image}
                  src={item.attributes.activitieImage}
                  alt="activity"
                  width={400}
                  height={650}
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
      <ModalDesc isOpen={isOpenModalDescEn} En closeModal={closeModalDescEn}>
        <div className={styles.description}>
          <div>descripción ingles</div>
          <textarea
            name="descEn"
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
                updateActivityMonday({ descEn: desc }, id);
              if (selectedDay == "martes")
                updateActivityTuesday({ descEn: desc }, id);
              if (selectedDay == "miercoles")
                updateActivityWednesday({ descEn: desc }, id);
              if (selectedDay == "jueves")
                updateActivityThursday({ descEn: desc }, id);
              if (selectedDay == "viernes")
                updateActivityFriday({ descEn: desc }, id);
              if (selectedDay == "sabado")
                updateActivitySaturday({ descEn: desc }, id);
              if (selectedDay == "domingo")
                updateActivitySunday({ descEn: desc }, id);
              closeModalDescEn();
            }}
            disabled={!desc}
          >
            Guardar
          </button>
        </div>
      </ModalDesc>
      <ModalDesc isOpen={isOpenModalDescEs} closeModal={closeModalDescEs}>
        <div className={styles.description}>
          <div>descripción español</div>
          <textarea
            name="descEn"
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
                updateActivityMonday({ descEs: desc }, id);
              if (selectedDay == "martes")
                updateActivityTuesday({ descEs: desc }, id);
              if (selectedDay == "miercoles")
                updateActivityWednesday({ descEs: desc }, id);
              if (selectedDay == "jueves")
                updateActivityThursday({ descEs: desc }, id);
              if (selectedDay == "viernes")
                updateActivityFriday({ descEs: desc }, id);
              if (selectedDay == "sabado")
                updateActivitySaturday({ descEs: desc }, id);
              if (selectedDay == "domingo")
                updateActivitySunday({ descEs: desc }, id);
              closeModalDescEs();
            }}
            disabled={!desc}
          >
            Guardar
          </button>
        </div>
      </ModalDesc>

      <Formik
        initialValues={{
          activitieEn: "",
          activitieEs: "",
          activitieImage: "",
          hourStart: "",
          hourEnd: "",
          spotEn: "",
          spotEs: "",
          descEn: "",
          descEs: "",
        }}
        validationSchema={validation}
        onSubmit={async (data, { resetForm }) => {
          data.activitieImage = image;
          if (selectedDay == "lunes") postActivityMonday(data);
          if (selectedDay == "martes") postActivityTuesday(data);
          if (selectedDay == "miercoles") postActivityWednesday(data);
          if (selectedDay == "jueves") postActivityThursday(data);
          if (selectedDay == "viernes") postActivityFriday(data);
          if (selectedDay == "sabado") postActivitySaturday(data);
          if (selectedDay == "domingo") postActivitySunday(data);
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

                <Field name="activitieEn" placeholder="Actividad Ingles" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="activitieEn"
                />
                <Field name="activitieEs" placeholder="Actividad Español" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="activitieEs"
                />
                <Field name="spotEn" placeholder="Locacion Ingles" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="spotEn"
                />
                <Field name="spotEs" placeholder="Locacion Español" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="spotEs"
                />
                <Field name="descEn" placeholder="Descripcion ingles" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="descEn"
                />

                <Field name="descEs" placeholder="Descripcion Español" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="descEs"
                />
                <button className={styles.save} disabled={!image} type="submit">
                  Guardar
                </button>
              </div>
              {!image ? (
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
                  src={image}
                  alt="activity"
                  width={200}
                  height={250}
                  priority
                  onClick={() => {
                    openGallery();
                    setId(null);
                  }}
                />
              )}

              <Modal isOpen={isOpenGallery} closeModal={closeGallery}>
                <ActivitiesGallery id={id} closeModal={closeGallery} />
              </Modal>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Carousel;
