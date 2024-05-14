"use client";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import Image from "next/image";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useInfo } from "@/context/Context";
import { useModalDesc } from "@/components/modalDesc/useModalDesc";
import Modal from "@/components/modal/Modal";
import BreakfastGallery from "./gallery/BreakfastGallery";
import { time } from "@/lib/language";
import styles from "../dinning/Dinning.module.css";
import { usePathname } from "next/navigation";
import { getBreakfastMonday } from "@/lib/apidaysweek/apimonday";
import { getBreakfastTuesday } from "@/lib/apidaysweek/apituesday";
import { getBreakfastWednesday } from "@/lib/apidaysweek/apiwednesday";
import { getBreakfastThursday } from "@/lib/apidaysweek/apithursday";
import { getBreakfastFriday } from "@/lib/apidaysweek/apifriday";
import { getBreakfastSaturday } from "@/lib/apidaysweek/apisaturday";
import { getBreakfastSunday } from "@/lib/apidaysweek/apisunday";
import MenusGallery from "../menusGallery/MenusGallery";

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
  membersEn: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  membersEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  serviceEn: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  serviceEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  typeEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  typeEn: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  typeEs: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
});

const Breakfast = () => {
  const [breakfast, setBreakfast] = useState();
  const {
    updateBreakfastMonday,
    updateBreakfastTuesday,
    updateBreakfastWednesday,
    updateBreakfastThursday,
    updateBreakfastFriday,
    updateBreakfastSaturday,
    updateBreakfastSunday,
  } = useInfo();
  const [id, setId] = useState("");
  const [postMenu, setPostMenu] = useState(false);
  const [menuId, setMenuId] = useState("");
  const [menu, setMenu] = useState([]);
  const [isOpenGallery, openGallery, closeGallery] = useModalDesc(true);
  const [isOpenMenusGallery, openMenusGallery, closeMenusGallery] =
    useModalDesc(true);
  const [isOpenMenuLgEn, openMenuLgEn, closeMenuLgEn] = useModalDesc(true);

  const router = usePathname();
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
    ? router.replace("/editar/pantalla/", ""): ""
  useEffect(() => {}, []);
  useEffect(() => {
    (async () => {
      if (selectedDay == "lunes") {
        const breakfastResponseMonday = await getBreakfastMonday();
        setBreakfast(breakfastResponseMonday.data);

        setMenu(
          breakfastResponseMonday.data
            .filter((item) => item.id == id)
            .map((item) => item.attributes.menus)
        );
      }
      if (selectedDay == "martes") {
        const breakfastResponseTuesday = await getBreakfastTuesday();
        setBreakfast(breakfastResponseTuesday.data);
        setMenu(
          breakfastResponseTuesday.data
            .filter((item) => item.id == id)
            .map((item) => item.attributes.menus)
        );
      }
      if (selectedDay == "miercoles") {
        const breakfastResponseWednesday = await getBreakfastWednesday();
        setBreakfast(breakfastResponseWednesday.data);
        setMenu(
          breakfastResponseWednesday.data
            .filter((item) => item.id == id)
            .map((item) => item.attributes.menus)
        );
      }
      if (selectedDay == "jueves") {
        const breakfastResponseThursday = await getBreakfastThursday();
        setBreakfast(breakfastResponseThursday.data);
        setMenu(
          breakfastResponseThursday.data
            .filter((item) => item.id == id)
            .map((item) => item.attributes.menus)
        );
      }
      if (selectedDay == "viernes") {
        const breakfastResponseFriday = await getBreakfastFriday();
        setBreakfast(breakfastResponseFriday.data);
        setMenu(
          breakfastResponseFriday.data
            .filter((item) => item.id == id)
            .map((item) => item.attributes.menus)
        );
      }
      if (selectedDay == "sabado") {
        const breakfastResponseSaturday = await getBreakfastSaturday();
        setBreakfast(breakfastResponseSaturday.data);
        setMenu(
          breakfastResponseSaturday.data
            .filter((item) => item.id == id)
            .map((item) => item.attributes.menus)
        );
      }
      if (selectedDay == "domingo") {
        const breakfastResponseSunday = await getBreakfastSunday();
        setBreakfast(breakfastResponseSunday.data);
        setMenu(
          breakfastResponseSunday.data
            .filter((item) => item.id == id)
            .map((item) => item.attributes.menus)
        );
      }
    })();
  }, [
    selectedDay,
    updateBreakfastMonday,
    updateBreakfastTuesday,
    updateBreakfastWednesday,
    updateBreakfastThursday,
    updateBreakfastFriday,
    updateBreakfastSaturday,
    updateBreakfastSunday,
    id,
  ]);
  const sortedRestaurants = breakfast?.sort((a, b) => a.id - b.id);
console.log(breakfast)

  const handleMenu = () => {
    const menu = breakfast
      .filter((item) => item.id == id)
      .map((item) => item.attributes.menus);
    setMenu(menu);
  };
  const handleIndexMenu = (i) => {
    menusArray[0].splice(i, 1);
  };

  const menusArray = breakfast
    ?.filter((item) => item.id == id)
    .map((menus) => menus.attributes.menus);
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        {sortedRestaurants?.map((item) => (
          <Formik
            key={item.id}
            initialValues={{
              name: item.attributes.name,
              hourStart: item.attributes.hourStart,
              hourEnd: item.attributes.hourEnd,
              membersEn: item.attributes.membersEn,
              membersEs: item.attributes.membersEs,
              serviceEn: item.attributes.serviceEn,
              serviceEs: item.attributes.serviceEs,
              typeEn: item.attributes.typeEn,
              typeEs: item.attributes.typeEs,
            }}
            validationSchema={validation}
            onSubmit={async (data, actions) => {
              if (selectedDay == "lunes")
                await updateBreakfastMonday(data, item.id);
              if (selectedDay == "martes")
                await updateBreakfastTuesday(data, item.id);
              if (selectedDay == "miercoles")
                await updateBreakfastWednesday(data, item.id);
              if (selectedDay == "jueves")
                await updateBreakfastThursday(data, item.id);
              if (selectedDay == "viernes")
                await updateBreakfastFriday(data, item.id);
              if (selectedDay == "sabado")
                await updateBreakfastSaturday(data, item.id);
              if (selectedDay == "domingo")
                await updateBreakfastSunday(data, item.id);
            }}
          >
            {({ handlesubmit }) => (
              <Form className={styles.form}>
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
                  <Field name="name" placeholder="nombre" />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="typeEs" placeholder="tipo español" />
                  <ErrorMessage
                    name="typeEs"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="typeEn" placeholder="tipo ingles" />
                  <ErrorMessage
                    name="typeEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="serviceEs" placeholder="servicio español" />
                  <ErrorMessage
                    name="serviceEs"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="serviceEn" placeholder="servicio ingles" />
                  <ErrorMessage
                    name="serviceEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="membersEn" placeholder="locación ingles" />
                  <ErrorMessage
                    name="membersEn"
                    component="p"
                    className={styles.error}
                  />
                  <Field name="membersEs" placeholder="locación español" />
                  <ErrorMessage
                    name="membersEs"
                    component="p"
                    className={styles.error}
                  />

                  <button className={styles.save} type="submit">
                    Guardar
                  </button>
                </div>
                <div className={styles.images}>
                  <div className={styles.diningimg}>
                    <Image
                      src={item.attributes?.breakfastImg}
                      alt="bar"
                      width={200}
                      height={250}
                      priority
                      onClick={() => {
                        openGallery();
                        setId(item.id);
                      }}
                    />
                  </div>
                  <div
                    className={styles.menus}
                    onMouseEnter={() => setId(item.id)}
                  >
                    <div className={styles.menuitem}>
                      <label htmlFor="">Menu</label>
                      <Image
                        src={item.attributes.menus[0]}
                        alt="bar"
                        width={200}
                        height={250}
                        priority
                        onMouseEnter={() => handleMenu()}
                        onClick={() => {
                          openMenuLgEn();
                          setPostMenu(false);
                        }}
                      />{" "}
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        ))}
        <Modal isOpen={isOpenGallery} closeModal={closeGallery}>
          <BreakfastGallery id={id} closeModal={closeGallery} />
        </Modal>
        <Modal isOpen={isOpenMenuLgEn} closeModal={closeMenuLgEn}>
          <div className={styles.menuLg}>
            <h1>Menu</h1>
            {menu[0]?.map((item, i) => (
              <>
                <div className={styles.edit_delete_icons_container}>
                  <div className={styles.icons}>
                    <FaEdit
                      size={50}
                      onClick={() => {
                        openMenusGallery();
                        setMenuId(i);
                      }}
                    />
                    {menusArray[0]?.length < 2 ? null : (
                      <MdDeleteOutline
                        size={50}
                        onClick={() => {
                          if (selectedDay == "lunes" && id !== null) {
                            handleIndexMenu(i);
                            updateBreakfastMonday(
                              { menus: [...menusArray[0]] },
                              id
                            );
                          }
                          if (selectedDay == "martes" && id !== null) {
                            handleIndexMenu(i);
                            updateBreakfastTuesday(
                              { menus: [...menusArray[0]] },
                              id
                            );
                          }
                          if (selectedDay == "miercoles" && id !== null) {
                            handleIndexMenu(i);
                            updateBreakfastWednesday(
                              { menus: [...menusArray[0]] },
                              id
                            );
                          }
                          if (selectedDay == "jueves" && id !== null) {
                            handleIndexMenu(i);
                            updateBreakfastThursday(
                              { menus: [...menusArray[0]] },
                              id
                            );
                          }
                          if (selectedDay == "viernes" && id !== null) {
                            handleIndexMenu(i);
                            updateBreakfastFriday(
                              { menus: [...menusArray[0]] },
                              id
                            );
                          }
                          if (selectedDay == "sabado" && id !== null) {
                            handleIndexMenu(i);
                            updateBreakfastSaturday(
                              { menus: [...menusArray[0]] },
                              id
                            );
                          }
                          if (selectedDay == "domingo" && id !== null) {
                            handleIndexMenu(i);
                            updateBreakfastSunday(
                              { menus: [...menusArray[0]] },
                              id
                            );
                          }
                        }}
                      />
                    )}
                  </div>
                </div>
                <Image
                  key={i}
                  src={item}
                  alt="Menu"
                  width={600}
                  height={800}
                  priority
                />
                <div>{(i + 1).toString()}</div>
              </>
            ))}
            <div>
              <IoMdAddCircleOutline
                size={250}
                onClick={() => {
                  openMenusGallery();
                
                  setPostMenu(true)
                }}
                />
          </div>
          </div>
        </Modal>
        <Modal isOpen={isOpenMenusGallery} closeModal={closeMenusGallery}>
          <MenusGallery
            id={id}
            menuId={menuId}
            closeModal={closeMenusGallery}
            postMenu={postMenu}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Breakfast;
