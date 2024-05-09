"use client";

import Bars from "@/components/bars/Bars";
import { useInfo } from "@/context/Context";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Domingo = () => {
  return (
    <div>
      <Bars />
    </div>
  );
};

export default Domingo;
