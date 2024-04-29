"use client";
import { useInfo } from "@/context/Context";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Breakfast from "@/components/breakfast/Breakfast";

const Viernes = () => {
  const { info } = useInfo();
  const router = usePathname();
  const [breakfastInfo, setBreakfastInfo] = useState();
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
    if (selectedDay == "lunes") setBreakfastInfo(info?.breakfastMonday);
    if (selectedDay == "martes") setBreakfastInfo(info?.breakfastTuesday);
    if (selectedDay == "miercoles") setBreakfastInfo(info?.breakfastThursday);
    if (selectedDay == "jueves") setBreakfastInfo(info?.breakfastWednesday);
    if (selectedDay == "viernes") setBreakfastInfo(info?.breakfastFriday);
    if (selectedDay == "sabado") setBreakfastInfo(info?.breakfastSaturday);
    if (selectedDay == "domingo") setBreakfastInfo(info?.breakfastSunday);
  }, [
    info.breakfastTuesday,
    info.breakfastMonday,
    info.breakfastThursday,
    info.breakfastWednesday,
    info.breakfastFriday,
    info.breakfastSaturday,
    info.breakfastSunday,
    selectedDay,
  ]);
  return (
    <div>
      <Breakfast breakfastInfo={breakfastInfo} />
    </div>
  );
};

export default Viernes;
