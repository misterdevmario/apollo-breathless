"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useInfo } from "@/context/Context";
import StaffGallery from "./gallery/StaffGallery";
import { RiImageAddLine } from "react-icons/ri";
import styles from "./Staff.module.css";
import ModalDesc from "@/components/modalDesc/ModalDesc";
import Modal from "@/components/modal/Modal";
import { useModal } from "@/components/modal/useModal";
import { useModalDesc } from "@/components/modalDesc/useModalDesc";
import { usePathname } from "next/navigation";
import { getStaffsMonday } from "@/lib/apidaysweek/apimonday";
import { getStaffsTuesday } from "@/lib/apidaysweek/apituesday";
import { getStaffsWednesday } from "@/lib/apidaysweek/apiwednesday";
import { getStaffsThursday } from "@/lib/apidaysweek/apithursday";
import { getStaffsFriday } from "@/lib/apidaysweek/apifriday";
import { getStaffsSaturday } from "@/lib/apidaysweek/apisaturday";
import { getStaffsSunday } from "@/lib/apidaysweek/apisunday";

const validation = Yup.object().shape({
  name: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  positionEn: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  positionEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
});

const Staff = () => {
  const [staff, setStaff] = useState();
  const {
    updateStaffMonday,
    postStaffMonday,
    deleteStaffMonday,

    updateStaffTuesday,
    postStaffTuesday,
    deleteStaffTuesday,

    updateStaffWednesday,
    postStaffWednesday,
    deleteStaffWednesday,

    updateStaffThursday,
    postStaffThursday,
    deleteStaffThursday,

    updateStaffFriday,
    postStaffFriday,
    deleteStaffFriday,

    updateStaffSaturday,
    postStaffSaturday,
    deleteStaffSaturday,

    updateStaffSunday,
    postStaffSunday,
    deleteStaffSunday,

    staffImage,
    handleDescription,
  } = useInfo();
  const [id, setId] = useState("");
  const [desc, setDesc] = useState("");
  const [isOpenGallery, openGallery, closeGallery] = useModal(true);
  const [isOpenModalBioEn, openModalBioEn, closeModalBioEn] =
    useModalDesc(true);
  const [isOpenModalBioEs, openModalBioEs, closeModalBioEs] =
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
        const staffResponseMonday = await getStaffsMonday();
        setStaff(staffResponseMonday.data);
      }
      if (selectedDay == "martes") {
        const staffResponseTuesday = await getStaffsTuesday();
        setStaff(staffResponseTuesday.data);
      }
      if (selectedDay == "miercoles") {
        const staffResponseWednesday = await getStaffsWednesday();
        setStaff(staffResponseWednesday.data);
      }
      if (selectedDay == "jueves") {
        const staffResponseThursday = await getStaffsThursday();
        setStaff(staffResponseThursday.data);
      }
      if (selectedDay == "viernes") {
        const staffResponseFriday = await getStaffsFriday();
        setStaff(staffResponseFriday.data);
      }
      if (selectedDay == "sabado") {
        const staffResponseSaturday = await getStaffsSaturday();
        setStaff(staffResponseSaturday.data);
      }
      if (selectedDay == "domingo") {
        const staffResponseSunday = await getStaffsSunday();
        setStaff(staffResponseSunday.data);
      }
    })();
  }, [
    selectedDay,
    updateStaffMonday,
    postStaffMonday,
    deleteStaffMonday,

    updateStaffTuesday,
    postStaffTuesday,
    deleteStaffTuesday,

    updateStaffWednesday,
    postStaffWednesday,
    deleteStaffWednesday,

    updateStaffThursday,
    postStaffThursday,
    deleteStaffThursday,

    updateStaffFriday,
    postStaffFriday,
    deleteStaffFriday,

    updateStaffSaturday,
    postStaffSaturday,
    deleteStaffSaturday,

    updateStaffSunday,
    postStaffSunday,
    deleteStaffSunday,
  ]);

  const handleBioEn = () => {
    const description = staff
      .filter((item) => item.id == id)
      .map((item) => item.attributes.bioEn);
    setDesc(description);
  };
  const handleBioEs = () => {
    const description = staff
      .filter((item) => item.id == id)
      .map((item) => item.attributes.bioEs);
    setDesc(description);
  };

  return (
    <div className={styles.container}>
      {staff?.map((item, i) => (
        <Formik
          key={item.id}
          initialValues={{
            name: item.attributes.name,
            positionEn: item.attributes.positionEn,
            positionEs: item.attributes.positionEs,
          }}
          validationSchema={validation}
          onSubmit={async (data, actions) => {
            if (selectedDay == "lunes") await updateStaffMonday(data, item.id);
            if (selectedDay == "martes")
              await updateStaffTuesday(data, item.id);
            if (selectedDay == "miercoles")
            await updateStaffWednesday(data, item.id);
            if (selectedDay == "jueves")
            await updateStaffThursday(data, item.id);
            if (selectedDay == "viernes")
              await updateStaffFriday(data, item.id);
            if (selectedDay == "sabado")
              await updateStaffSaturday(data, item.id);
            if (selectedDay == "domingo")
              await updateStaffSunday(data, item.id);
          }}
        >
          {({ handlesubmit }) => (
            <div key={item.id}>
              <Form className={styles.form}>
                <div className={styles.inputs}>
                  <Field name="name" placeholder="nombre" />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="positionEn" placeholder="posición ingles" />
                  <ErrorMessage
                    name="positionEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="positionEs" placeholder="posición español" />
                  <ErrorMessage
                    name="positionEs"
                    component="p"
                    className={styles.error}
                  />

                  <Field
                    value={item.attributes.bioEn}
                    placeholder="bio ingles"
                    onClick={() => {
                      handleBioEn();
                      openModalBioEn();
                    }}
                    onMouseEnter={() => setId(item.id)}
                  />
                  <ErrorMessage
                    name="bioEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field
                    value={item.attributes.bioEs}
                    placeholder="bio español"
                    onClick={() => {
                      handleBioEs();
                      openModalBioEs();
                    }}
                    onMouseEnter={() => setId(item.id)}
                  />
                  <ErrorMessage
                    name="bioEs"
                    component="p"
                    className={styles.error}
                  />

                  <button className={styles.save} type="submit">
                    Guardar
                  </button>
                  {staff.length > 1 ? (
                    <button
                      type="button"
                      className={styles.delete}
                      onClick={() => {
                        if (selectedDay == "lunes") deleteStaffMonday(item.id);
                        if (selectedDay == "martes")
                          deleteStaffTuesday(item.id);
                        if (selectedDay == "miercoles")
                          deleteStaffWednesday(item.id);
                        if (selectedDay == "jueves")
                          deleteStaffThursday(item.id);
                        if (selectedDay == "viernes")
                          deleteStaffFriday(item.id);
                        if (selectedDay == "sabado")
                          deleteStaffSaturday(item.id);
                        if (selectedDay == "domingo")
                          deleteStaffSunday(item.id);
                      }}
                    >
                      Eliminar
                    </button>
                  ) : null}
                </div>
                <Image
                  className={styles.form_image}
                  src={item.attributes.staffImg}
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
      <ModalDesc isOpen={isOpenModalBioEn} En closeModal={closeModalBioEn}>
        <div className={styles.bio}>
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
                updateStaffMonday({ bioEn: desc }, id);
              if (selectedDay == "martes")
                updateStaffTuesday({ bioEn: desc }, id);
              if (selectedDay == "miercoles")
                updateStaffWednesday({ bioEn: desc }, id);
              if (selectedDay == "jueves")
                updateStaffThursday({ bioEn: desc }, id);
              if (selectedDay == "viernes")
                updateStaffFriday({ bioEn: desc }, id);
              if (selectedDay == "sabado")
                updateStaffSaturday({ bioEn: desc }, id);
              if (selectedDay == "domingo")
                updateStaffSunday({ bioEn: desc }, id);
              closeModalBioEn();
            }}
            disabled={!desc}
          >
            Guardar
          </button>
        </div>
      </ModalDesc>
      <ModalDesc isOpen={isOpenModalBioEs} closeModal={closeModalBioEs}>
        <div className={styles.bio}>
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
                updateStaffMonday({ bioEs: desc }, id);
              if (selectedDay == "martes")
                updateStaffTuesday({ bioEs: desc }, id);
              if (selectedDay == "miercoles")
                updateStaffWednesday({ bioEs: desc }, id);
              if (selectedDay == "jueves")
                updateStaffThursday({ bioEs: desc }, id);
              if (selectedDay == "viernes")
                updateStaffFriday({ bioEs: desc }, id);
              if (selectedDay == "sabado")
                updateStaffSaturday({ bioEs: desc }, id);
              if (selectedDay == "domingo")
                updateStaffSunday({ bioEs: desc }, id);
              closeModalBioEs();
            }}
            disabled={!desc}
          >
            Guardar
          </button>
        </div>
      </ModalDesc>
      <Formik
        initialValues={{
          name: "",
          positionEn: "",
          positionEs: "",
          bioEn: "",
          bioEs: "",
        }}
        validationSchema={validation}
        onSubmit={async (data, { resetForm }) => {
          data.staffImg = staffImage;
          if (selectedDay == "lunes") await postStaffMonday(data);
          if (selectedDay == "martes") await postStaffTuesday(data);
          if (selectedDay == "miercoles") await postStaffWednesday(data);
          if (selectedDay == "jueves") await postStaffThursday(data);
          if (selectedDay == "viernes") await postStaffFriday(data);
          if (selectedDay == "sabado") await postStaffSaturday(data);
          if (selectedDay == "domingo") await postStaffSunday(data);
          resetForm({ values: "" });
        }}
      >
        {({ handleSubmit }) => (
          <div>
            <Form className={styles.form}>
              <div className={styles.inputs}>
                <Field name="name" placeholder="nombre" />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="name"
                />
                <Field name="positionEn" placeholder="posición ingles" />
                <ErrorMessage
                  name="positionEn"
                  component="p"
                  className={styles.error}
                />
                <Field name="positionEs" placeholder="posición español" />
                <ErrorMessage
                  name="positionEs"
                  component="p"
                  className={styles.error}
                />

                <Field name="bioEn" placeholder="bio ingles" />
                <ErrorMessage
                  name="bioEn"
                  component="p"
                  className={styles.error}
                />
                <Field name="bioEs" placeholder="bio español" />
                <ErrorMessage
                  name="bioEs"
                  component="p"
                  className={styles.error}
                />
                <button
                  className={styles.save}
                  disabled={!staffImage}
                  type="submit"
                >
                  Guardar
                </button>
              </div>

              {!staffImage ? (
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
                  src={staffImage}
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
              <StaffGallery id={id} closeModal={closeGallery} />
            </Modal>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Staff;
