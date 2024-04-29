"use client";

import { useInfo } from "@/context/Context";
import HeaderRender from "../home/header/HeaderRender";
import FooterRender from "@/home/footer/FooterRender";
import Transition from "@/home/transition/Transition";
import { useEffect, useState } from "react";
import Activities from "@/home/activities/Activities";
import { getActivitiesSunday, getBarsSunday, getBreakfastSunday, getDinningSunday, getFlyersSunday, getFlyersTitleSunday, getStaffsSunday } from "@/lib/apidaysweek/apisunday";
import { getActivitiesMonday, getBarsMonday, getBreakfastMonday, getDinningMonday, getFlyersMonday, getFlyersTitleMonday, getStaffsMonday } from "@/lib/apidaysweek/apimonday";
import { getActivitiesTuesday, getBarsTuesday, getBreakfastTuesday, getDinningTuesday, getFlyersTitleTuesday, getFlyersTuesday, getStaffsTuesday } from "@/lib/apidaysweek/apituesday";
import { getActivitiesWednesday, getBarsWednesday, getBreakfastWednesday, getDinningWednesday, getFlyersTitleWednesday, getFlyersWednesday, getStaffsWednesday } from "@/lib/apidaysweek/apiwednesday";
import { getActivitiesThursday, getBarsThursday, getBreakfastThursday, getDinningThursday, getFlyersThursday, getFlyersTitleThursday, getStaffsThursday } from "@/lib/apidaysweek/apithursday";
import { getActivitiesFriday, getBarsFriday, getBreakfastFriday, getDinningFriday, getFlyersFriday, getFlyersTitleFriday, getStaffsFriday } from "@/lib/apidaysweek/apifriday";
import { getActivitiesSaturday, getBarsSaturday, getBreakfastSaturday, getDinningSaturday, getFlyersSaturday, getFlyersTitleSaturday, getStaffsSaturday } from "@/lib/apidaysweek/apisaturday";

export default function Page() {
  const [show, setShow] = useState("hide");
  const [dayInfo, setDayInfo] = useState({
    activities: [],
    staff: [],
    dining: [],
    breakfast: [],
    bars: [],
    flyers: [],
    flyersTitle: [],
  });
  const [day, setDay] = useState(new Date().getDay());
  const [display, setDisplay] = useState("hide");

  useEffect(() => {
    dayInfo.activities.length == 0 ? setDisplay("hide") : setDisplay("show");
  }, [dayInfo.activities]);

  useEffect(() => {
    setDay(new Date().getDay());
   ( async () => {
    if (day == 0) {
      const activitiesResponseSunday = await getActivitiesSunday();
      const staffResponseSunday = await getStaffsSunday();
      const dinningResponseSunday = await getDinningSunday();
      const breakfastResponseSunday = await getBreakfastSunday();
      const barsResponseSunday = await getBarsSunday();
      const flyersResponseSunday = await getFlyersSunday();
      const flyersTitleResponseSunday = await getFlyersTitleSunday();
      setDayInfo({
        activities: activitiesResponseSunday.data,
        staff: staffResponseSunday.data,
        dining: dinningResponseSunday.data,
        breakfast: breakfastResponseSunday.data,
        bars: barsResponseSunday.data,
        flyers: flyersResponseSunday.data,
        flyersTitle: flyersTitleResponseSunday.data,
      });
    }

    if (day == 1) {
      const activitiesResponseMonday = await getActivitiesMonday();
      const staffResponseMonday = await getStaffsMonday();
      const dinningResponseMonday = await getDinningMonday();
      const breakfastResponseMonday = await getBreakfastMonday();
      const barsResponseMonday = await getBarsMonday();
      const flyersResponseMonday = await getFlyersMonday();
      const flyersTitleResponseMonday = await getFlyersTitleMonday();
      setDayInfo({
        activities: activitiesResponseMonday.data,
        staff: staffResponseMonday.data,
        dining: dinningResponseMonday.data,
        breakfast: breakfastResponseMonday.data,
        bars: barsResponseMonday.data,
        flyers: flyersResponseMonday.data,
        flyersTitle: flyersTitleResponseMonday.data,
      });
    }

    if (day == 2) {
      const activitiesResponseTuesday = await getActivitiesTuesday();
      const staffResponseTuesday = await getStaffsTuesday();
      const dinningResponseTuesday = await getDinningTuesday();
      const breakfastResponseTuesday = await getBreakfastTuesday();
      const barsResponseTuesday = await getBarsTuesday();
      const flyersResponseTuesday = await getFlyersTuesday();
      const flyersTitleResponseTuesday = await getFlyersTitleTuesday();
      setDayInfo({
        activities: activitiesResponseTuesday.data,
        staff: staffResponseTuesday.data,
        dining: dinningResponseTuesday.data,
        breakfast: breakfastResponseTuesday.data,
        bars: barsResponseTuesday.data,
        flyers: flyersResponseTuesday.data,
        flyersTitle: flyersTitleResponseTuesday.data,
      });
    }

    if (day == 3) {
      const activitiesResponseWednesday = await getActivitiesWednesday();
      const staffResponseWednesday = await getStaffsWednesday();
      const dinningResponseWednesday = await getDinningWednesday();
      const breakfastResponseWednesday = await getBreakfastWednesday();
      const barsResponseWednesday = await getBarsWednesday();
      const flyersResponseWednesday = await getFlyersWednesday();
      const flyersTitleResponseWednesday = await getFlyersTitleWednesday();
      setDayInfo({
        activities: await activitiesResponseWednesday.data,
        staff: staffResponseWednesday.data,
        dining: dinningResponseWednesday.data,
        breakfast: breakfastResponseWednesday.data,
        bars: barsResponseWednesday.data,
        flyers: flyersResponseWednesday.data,
        flyersTitle: flyersTitleResponseWednesday.data,
      });
    }

    if (day == 4) {
      const activitiesResponseThursday = await getActivitiesThursday();
      const staffResponseThursday = await getStaffsThursday();
      const dinningResponseThursday = await getDinningThursday();
      const breakfastResponseThursday = await getBreakfastThursday();
      const barsResponseThursday = await getBarsThursday();
      const flyersResponseThursday = await getFlyersThursday();
      const flyersTitleResponseThursday = await getFlyersTitleThursday();
      setDayInfo({
        activities: activitiesResponseThursday.data,
        staff: staffResponseThursday.data,
        dining: dinningResponseThursday.data,
        breakfast: breakfastResponseThursday.data,
        bars: barsResponseThursday.data,
        flyers: flyersResponseThursday.data,
        flyersTitle: flyersTitleResponseThursday.data,
      });
    }

    if (day == 5) {
      const activitiesResponseFriday = await getActivitiesFriday();
      const staffResponseFriday = await getStaffsFriday();
      const dinningResponseFriday = await getDinningFriday();
      const breakfastResponseFriday = await getBreakfastFriday();
      const barsResponseFriday = await getBarsFriday();
      const flyersResponseFriday = await getFlyersFriday();
      const flyersTitleResponseFriday = await getFlyersTitleFriday();
      setDayInfo({
        activities: activitiesResponseFriday.data,
        staff: staffResponseFriday.data,
        dining: dinningResponseFriday.data,
        breakfast: breakfastResponseFriday.data,
        bars: barsResponseFriday.data,
        flyers: flyersResponseFriday.data,
        flyersTitle: flyersTitleResponseFriday.data,
      });
    }

    if (day == 6) {
      const activitiesResponseSaturday = await getActivitiesSaturday();
      const staffResponseSaturday = await getStaffsSaturday();
      const dinningResponseSaturday = await getDinningSaturday();
      const breakfastResponseSaturday = await getBreakfastSaturday();
      const barsResponseSaturday = await getBarsSaturday();
      const flyersResponseSaturday = await getFlyersSaturday();
      const flyersTitleResponseSaturday = await getFlyersTitleSaturday();
      setDayInfo({
        activities: activitiesResponseSaturday.data,
        staff: staffResponseSaturday.data,
        dining: dinningResponseSaturday.data,
        breakfast: breakfastResponseSaturday.data,
        bars: barsResponseSaturday.data,
        flyers: flyersResponseSaturday.data,
        flyersTitle: flyersTitleResponseSaturday.data,
      });
    }
  })()
  }, [day]);

  useEffect(() => {
    setTimeout(() => {
      setShow("show");
      setDay(new Date().getDay());
    }, 3000);
  });
  return (
    <main>
      <Transition />
      <div className={display}>
        <HeaderRender />
        <Activities info={dayInfo} />
        <FooterRender info={dayInfo} />
      </div>
    </main>
  );
}
