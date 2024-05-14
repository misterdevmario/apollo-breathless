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
import DinningGallery from "./gallery/DinningGallery";
import MenusGallery from "../menusGallery/MenusGallery";
import { time } from "@/lib/language";
import styles from "./Dinning.module.css";
import { usePathname } from "next/navigation";
import { getDinningMonday } from "@/lib/apidaysweek/apimonday";
import { getDinningTuesday } from "@/lib/apidaysweek/apituesday";
import { getDinningWednesday } from "@/lib/apidaysweek/apiwednesday";
import { getDinningThursday } from "@/lib/apidaysweek/apithursday";
import { getDinningSaturday } from "@/lib/apidaysweek/apisaturday";
import { getDinningSunday } from "@/lib/apidaysweek/apisunday";
import { getDinningFriday } from "@/lib/apidaysweek/apifriday";

const validation = Yup.object().shape({
  name: Yup.string()
    .required("*Campo requerido")
    .max(19, "La longitud maxima es de 19 letras!"),
  hourStart: Yup.string().required("*Campo requerido"),
  hourEnd: Yup.string().required("*Campo requerido"),
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

const Dinning = () => {
  const [dinner, setDinner] = useState();
  const {
    updateDinningMonday,
    updateDinningTuesday,
    updateDinningWednesday,
    updateDinningThursday,
    updateDinningFriday,
    updateDinningSaturday,
    updateDinningSunday,
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

  useEffect(() => {
    (async () => {
      if (selectedDay == "lunes") {
        const dinningResponseMonday = await getDinningMonday();
        setDinner(dinningResponseMonday.data);
        setMenu(
          dinningResponseMonday.data
            .filter((item) => item.id == id)
            .map((item) => item.attributes.menus)
        );
      }
      if (selectedDay == "martes") {
        const dinningResponseTuesday = await getDinningTuesday();
        setDinner(dinningResponseTuesday.data);
        setMenu(
          dinningResponseTuesday.data
            .filter((item) => item.id == id)
            .map((item) => item.attributes.menus)
        );
      }
      if (selectedDay == "miercoles") {
        const dinningResponseWednesday = await getDinningWednesday();
        setDinner(dinningResponseWednesday.data);
        setMenu(
          dinningResponseWednesday.data
            .filter((item) => item.id == id)
            .map((item) => item.attributes.menus)
        );
      }
      if (selectedDay == "jueves") {
        const dinningResponseThursday = await getDinningThursday();
        setDinner(dinningResponseThursday.data);
        setMenu(
          dinningResponseThursday.data
            .filter((item) => item.id == id)
            .map((item) => item.attributes.menus)
        );
      }
      if (selectedDay == "viernes") {
        const dinningResponseFriday = await getDinningFriday();
        setDinner(dinningResponseFriday.data);
        setMenu(
          dinningResponseFriday.data
            .filter((item) => item.id == id)
            .map((item) => item.attributes.menus)
        );
      }
      if (selectedDay == "sabado") {
        const dinningResponseSaturday = await getDinningSaturday();
        setDinner(dinningResponseSaturday.data);
        setMenu(
          dinningResponseSaturday.data
            .filter((item) => item.id == id)
            .map((item) => item.attributes.menus)
        );
      }
      if (selectedDay == "domingo") {
        const dinningResponseSunday = await getDinningSunday();
        setDinner(dinningResponseSunday.data);
        setMenu(
          dinningResponseSunday.data
            .filter((item) => item.id == id)
            .map((item) => item.attributes.menus)
        );
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
    id,
  ]);
  const sortedRestaurants = dinner?.sort((a, b) => a.id - b.id);

  const handleMenu = () => {
    const menu = dinner
      .filter((item) => item.id == id)
      .map((item) => item.attributes.menus);
    setMenu(menu);
  };

  const handleIndexMenu = (i) => {
    menusArray[0].splice(i, 1);
  };

  const menusArray = dinner
    ?.filter((item) => item.id == id)
    .map((menus) => menus.attributes.menus);

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        {sortedRestaurants
          ?.map((item) => (
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
                  await updateDinningMonday(data, item.id);
                if (selectedDay == "martes")
                  await updateDinningTuesday(data, item.id);
                if (selectedDay == "miercoles")
                  await updateDinningWednesday(data, item.id);
                if (selectedDay == "jueves")
                  await updateDinningThursday(data, item.id);
                if (selectedDay == "viernes")
                  await updateDinningFriday(data, item.id);
                if (selectedDay == "sabado")
                  await updateDinningSaturday(data, item.id);
                if (selectedDay == "domingo")
                  await updateDinningSunday(data, item.id);
              }}
            >
              {({ handlesubmit }) => (
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
                        src={item.attributes.diningImg}
                        alt="bar"
                        width={100}
                        height={100}
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
          ))
          .sort()}
        <Modal isOpen={isOpenGallery} closeModal={closeGallery}>
          <DinningGallery id={id} closeModal={closeGallery} />
        </Modal>
        <Modal isOpen={isOpenMenuLgEn} closeModal={closeMenuLgEn}>
          <div className={styles.menuLg}>
            <h1>Menu</h1>
            {menu[0]?.map((item, i) => (
              <>
                <div className={styles.edit_delete_icons_container}>
                  <div className={styles.icons}>
                    <FaEdit
                      className={styles.menu_delete_edit}
                      size={50}
                      onClick={() => {
                        openMenusGallery();
                        setMenuId(i);
                      }}
                    />
                    {menusArray[0]?.length < 2 ? null : (
                      <MdDeleteOutline
                        className={styles.menu_delete_edit}
                        size={50}
                        onClick={() => {
                          if (selectedDay == "lunes" && id !== null) {
                            handleIndexMenu(i);
                            updateDinningMonday(
                              { menus: [...menusArray[0]] },
                              id
                            );
                          }
                          if (selectedDay == "martes" && id !== null) {
                            handleIndexMenu(i);
                            updateDinningTuesday(
                              { menus: [...menusArray[0]] },
                              id
                            );
                          }
                          if (selectedDay == "miercoles" && id !== null) {
                            handleIndexMenu(i);
                            updateDinningWednesday(
                              { menus: [...menusArray[0]] },
                              id
                            );
                          }
                          if (selectedDay == "jueves" && id !== null) {
                            handleIndexMenu(i);
                            updateDinningThursday(
                              { menus: [...menusArray[0]] },
                              id
                            );
                          }
                          if (selectedDay == "viernes" && id !== null) {
                            handleIndexMenu(i);
                            updateDinningFriday(
                              { menus: [...menusArray[0]] },
                              id
                            );
                          }
                          if (selectedDay == "sabado" && id !== null) {
                            handleIndexMenu(i);
                            updateDinningSaturday(
                              { menus: [...menusArray[0]] },
                              id
                            );
                          }
                          if (selectedDay == "domingo" && id !== null) {
                            handleIndexMenu(i);
                            updateDinningSunday(
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

                  setPostMenu(true);
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

export default Dinning;
