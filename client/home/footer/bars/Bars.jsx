"use client";

import { useInfo } from "@/context/Context";
import Image from "next/image";
import { sectionTitles, qr } from "@/lib/language";
import styles from "./Bars.module.css";
import Modal from "@/components/modal/Modal";
import { useModal } from "@/components/modal/useModal";
import { useState } from "react";
//import Pdfviewer from "@/home/PDF/PdfViewer";

const Bars = ({ info }) => {
  const { language, languageMobile } = useInfo();

  const [isOpenBarMobile, openBreakfastMobile, closeBarMobile] =
    useModal(true);
  const [infoDesc, setInfoDesc] = useState();
  const handleImg = (id) => {
    const infoModal = info.bars
      .filter((item) => item.id == id)
      .map((item) => ({
        menuImgEn: item.attributes.menuImgEn,
        menuImgEs: item.attributes.menuImgEs,
      }));

    setInfoDesc(infoModal);
  };

  const sortedBars = info.bars?.sort((a, b) => a.id - b.id);


  return (
    <>

      <div className={styles.container}>
        <div className={styles.title}>
          {language == "en" ? sectionTitles?.en.bars : sectionTitles?.es.bars}
        </div>

        <div className={styles.card_container} >
          {sortedBars?.map((item, i) => (
            <div key={i} className={styles.card}>
            {/* <div key={i} className={styles.card} onClick={()=>{handleImg(item.id); openBreakfast();}}> */}
              <div className={styles.imginfo}>
                <Image
                  src={item.attributes.barImg}
                  alt="bar logo"
                  width={80}
                  height={80}
                />
                <div className={styles.hours}>
                  <div className={styles.name}>{item.attributes.name}</div>
                  {item.attributes.hourStart} - {item.attributes.hourEnd}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.qr}>
          <Image src="/qr.png" width={240} height={240} alt="qr" />
          <div className={styles.scan}>{language == "en" ? qr.en : qr.es}</div>
        </div>
      </div>
      {/* 768px */}
      <div className={styles.container_sm}>
        <div className={styles.title}>
          {languageMobile == "en"
            ? sectionTitles?.en.bars
            : sectionTitles?.es.bars}
        </div>

        <div className={styles.card_container}>
          {info?.bars.map((item, i) => (
            <div key={i} className={styles.card}>
            {/* <div key={i} className={styles.card} onClick={()=>{handleImg(item.id); openBreakfastMobile();}}> */}
              <div className={styles.imginfo}>
                <Image
                  src={item.attributes.barImg}
                  alt="bar logo"
                  width={80}
                  height={80}
                />
                <div className={styles.hours}>
                  <div className={styles.name}>{item.attributes.name}</div>
                  {item.attributes.hourStart} - {item.attributes.hourEnd}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpenBarMobile} closeModal={closeBarMobile}>
        <div className={styles.modal_img}>
          <Image
            src={
              languageMobile == "en"
                ? infoDesc?.map((item) => item.menuImgEn).toString()
                : infoDesc?.map((item) => item.menuImgEs).toString()
            }
            alt="menu"
            width={600}
            height={800}
          />
        </div>
      </Modal>
    </>
  );
};

export default Bars;
