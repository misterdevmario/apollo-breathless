"use client";

import Dinning from "@/components/dinning/Dinning";
import { useInfo } from "@/context/Context";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Viernes = () => {
  const router = usePathname();
  const { info } = useInfo();
  const [dinngInfo, setDiningInfo] = useState();
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
    if (selectedDay == "lunes") setDiningInfo(info?.dinningMonday);
    if (selectedDay == "martes") setDiningInfo(info?.dinningTuesday);
    if (selectedDay == "miercoles") setDiningInfo(info?.dinningWednesday);
    if (selectedDay == "jueves") setDiningInfo(info?.dinningThursday);
    if (selectedDay == "viernes") setDiningInfo(info?.dinningFriday);
    if (selectedDay == "sabado") setDiningInfo(info?.dinningSaturday);
    if (selectedDay == "domingo") setDiningInfo(info?.dinningSunday);
  }, [
    info.dinningTuesday,
    info.dinningMonday,
    info.dinningThursday,
    info.dinningWednesday,
    info.dinningFriday,
    info.dinningSaturday,
    info.dinningSunday,
    selectedDay,
  ]);
  return (
    <div>
      <Dinning dinngInfo={dinngInfo} />
    </div>
  );
};

export default Viernes;
