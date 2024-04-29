"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaRegHourglass } from "react-icons/fa";
import { useState } from "react";
import { BsMenuDown, BsMenuUp } from "react-icons/bs";
import axios from "axios";

const links = [
  "ACTIVIDADES",
  "STAFF",
  "DINNING",
  "BREAKFAST",
  "BARS",
  "FLYERS",
];
const days = [
  "LUNES",
  "MARTES",
  "MIERCOLES",
  "JUEVES",
  "VIERNES",
  "SABADO",
  "DOMINGO",
];

const Navbar = () => {
  const navigate = useRouter();
  const router = usePathname();
  const [toggle, setToggle] = useState(false);
  const [toggleDays, setToggleDays] = useState(false);

  const logOut = async () => {
    const response = await axios.post("/api/logout");
    navigate.push("/login");
  };

  const selectedDay = router.includes("actividades")
    ? router.replace("/editar/actividades/", "").toLocaleUpperCase()
    : router.includes("bars")
    ? router.replace("/editar/bars/", "").toLocaleUpperCase()
    : router.includes("staff")
    ? router.replace("/editar/staff/", "").toLocaleUpperCase()
    : router.includes("dinning")
    ? router.replace("/editar/dinning/", "").toLocaleUpperCase()
    : router.includes("breakfast")
    ? router.replace("/editar/breakfast/", "").toLocaleUpperCase()
    : router.includes("flyers")
    ? router.replace("/editar/flyers/", "").toLocaleUpperCase()
    : "/";
  const selectedPath = router.includes("/editar") ? router
    .replace("/editar/", "")
    .replace(`/${selectedDay.toLocaleLowerCase()}`, ""): '/';
    
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/logo.svg" alt="logo" width={120} height={120} priority />
        <div
          className={styles.selecteday}
          onClick={() =>
            toggleDays ? setToggleDays(false) : setToggleDays(true)
          }
        >
          {selectedDay}
        </div>
        {toggleDays ? (
          <div className={styles.day_options}>
            {days.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  navigate.push(
                    `/editar/${selectedPath}/${item.toLocaleLowerCase()}`
                  );
                  setToggleDays(false);
                }}
              >
                {item != selectedDay ? item : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div className={styles.toogle_navbar_container}>
        <div className={styles.logo_toggle}>
          <Image src="/logo.svg" alt="logo" width={50} height={50} priority />
     
          {toggleDays ? (
            <div className={styles.day_options}>
              {days.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    navigate.push(
                      `/editar/${selectedPath}/${item.toLocaleLowerCase()}`
                    );
                    setToggleDays(false);
                  }}
                >
                  {item != selectedDay ? item : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className={styles.toggle_tittle}>
          {router
            .replace("/editar/", "")
            .replace(`/${selectedDay.toLocaleLowerCase()}`, "")}
                 <div
            className={styles.selecteday_toggle}
            onClick={() =>
              toggleDays ? setToggleDays(false) : setToggleDays(true)
            }
          >
            {selectedDay}
          </div>
        </div>
        {!toggle ? (
          <BsMenuUp onClick={() => setToggle(true)} size={30} />
        ) : (
          <BsMenuDown size={30} onClick={() => setToggle(false)} />
        )}
      </div>
      <div className={styles.links_container}>
        {links.map((item, i) => (
          <Link
            key={i}
            className={
              selectedPath == item.toLowerCase()
                ? `${styles.active}`
                : `${null}`
            }
            href={`/editar/${item.toLowerCase()}/${selectedDay.toLocaleLowerCase()}`}
          >
            {item}
          </Link>
        ))}
      </div>
      <div className={styles.outlinks}>
        <div className={styles.home}>
          <FaRegHourglass size={35} onClick={() => navigate.push("/")} />
        </div>
        <div className={styles.logout}>
          <RiLogoutCircleRLine size={35} onClick={() => logOut()} />
        </div>
      </div>

      {/* section<768px */}

      {toggle && (
        <div className={styles.toggle_links_container}>
          {links.map((item, i) => (
            <Link
              key={i}
              className={
                selectedPath == item.toLowerCase()
                  ? `${styles.active_toggle}`
                  : `${null}`
              }
              href={`/editar/${item.toLowerCase()}/${selectedDay.toLocaleLowerCase()}`}
              onClick={() => {
                setToggle(false);
              }}
            >
              {item}
            </Link>
          ))}
          <div className={styles.toggle_outlinks}>
            <div className={styles.home}>
              <FaRegHourglass size={40} onClick={(event) => {event.stopPropagation();navigate.push("/")}} />
            </div>
            <div className={styles.logout}>
              <RiLogoutCircleRLine size={40} onClick={() => logOut()} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
