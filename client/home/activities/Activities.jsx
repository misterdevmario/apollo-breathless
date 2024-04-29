"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { CiLocationOn } from "react-icons/ci";
import { time, descriptions } from "@/lib/language";
import { useInfo } from "@/context/Context";
import Image from "next/image";
import styles from "./Activities.module.css";
import { useModal } from "@/components/modal/useModal";
import Modal from "@/components/modal/Modal";
import { useState } from "react";

const Activities = ({ info }) => {
  const { language, languageMobile } = useInfo();
  const [isOpenActivity, openActivity, closeActivity] = useModal(true);
  const [isOpenActivityMobile, openActivityMobile, closeActivityMobile] = useModal(true);
  const [infoDesc, setInfoDesc] = useState();

  const sortedHours = [];
  for (let i = 0; i < time.length; i++) {
    for (let j = 0; j < info?.activities.length; j++) {
      if (
        time[i] ==
        info?.activities[j].attributes.hourStart
          .toLocaleLowerCase()
          .replace(" ", "")
      )
        sortedHours.push(info?.activities[j]);
    }
  }
  const handleImg = (id) => {
    const infoModal = sortedHours
      .filter((item) => item.id == id)
      .map((item) => ({
        descEn: item.attributes.descEn,
        descEs: item.attributes.descEs,
        img: item.attributes.activitieImage,
      }));

    setInfoDesc(infoModal);
  };
  return (
    <>
      <Modal isOpen={isOpenActivity} closeModal={closeActivity}>
        <div className={styles.modal_img}>
          <Image
            src={infoDesc?.map((item) => item.img).toString()}
            alt="menu"
            width={600}
            height={800}
          />
          <div className={styles.modaldesc}>
            <div className={styles.modaldesc_item}>
              <div className={styles.modaldesc_desc}>
                {language == "en"
                  ? descriptions.descEn
                  : descriptions.descEs
                 }
              </div>
              <div className={styles.modal_desc_text}>
                {language == "en"
                  ? infoDesc?.map((item) => item.descEn).toString()
                  : infoDesc?.map((item) => item.descEs).toString()}
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className={styles.container_lg}>
        <Swiper
          className={styles.slideshow_lg}
          spaceBetween={3}
          slidesPerView={6}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {sortedHours.map((item, i) => (
            <SwiperSlide
              key={i}
              className={styles.slide}
              onClick={(id) => {
                openActivity();
                handleImg(item.id);
              }}
            >
              <div className={styles.card}>
                <Image
                  src={item.attributes.activitieImage}
                  alt={
                    language?.lang == "en"
                      ? item.attributes.activitieEn
                      : item.attributes.activitieEs
                  }
                  width={400}
                  height={600}
                  priority
                />
                <div className={styles.infocard}>
                  <div className={styles.hours}>
                    <div>
                      {item.attributes.hourStart} - {item.attributes.hourEnd}
                    </div>
                  </div>
                  <div className={styles.locationactivity}>
                    <div className={styles.activity}>
                      {language == "en"
                        ? item.attributes.activitieEn
                        : item.attributes.activitieEs}
                    </div>
                    <div className={styles.location}>
                      <div className={styles.loctaion_pin}>
                        <CiLocationOn size={25} />
                      </div>
                      <div>
                        {language == "en"
                          ? item.attributes.spotEn
                          : item.attributes.spotEs}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* 768px */}
        <Swiper
          className={styles.slideshow_sm}
          spaceBetween={3}
          slidesPerView={2}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {sortedHours.map((item, i) => (
            <SwiperSlide
              key={i}
              className={styles.slide}
              onClick={(id) => {
                openActivityMobile();
                handleImg(item.id);
              }}
            >
              <div className={styles.card}>
                <Image
                  src={item.attributes.activitieImage}
                  alt={
                    languageMobile == "en"
                      ? item.attributes.activitieEn
                      : item.attributes.activitieEs
                  }
                  width={1080}
                  height={1920}
                  priority
                />
                <div className={styles.infocard}>
                  <div className={styles.hours}>
                    {item.attributes.hourStart} - {item.attributes.hourEnd}
                  </div>
                  <div className={styles.locationactivity}>
                    <div className={styles.activity}>
                      {languageMobile == "en"
                        ? item.attributes.activitieEn
                        : item.attributes.activitieEs}
                    </div>
                    <div className={styles.location}>
                      <div className={styles.loctaion_pin}>
                        <CiLocationOn />
                      </div>
                      <div>
                        {language == "en"
                          ? item.attributes.spotEn
                          : item.attributes.spotEs}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Modal isOpen={isOpenActivityMobile} closeModal={closeActivityMobile}>
        <div className={styles.modal_img}>
          <Image
            src={infoDesc?.map((item) => item.img).toString()}
            alt="menu"
            width={600}
            height={800}
          />
          <div className={styles.modaldesc}>
            <div className={styles.modaldesc_item}>
              <div className={styles.modaldesc_desc}>
                {languageMobile == "en"
                  ? descriptions.descEn
                  : descriptions.descEs
                }
              </div>
              <div className={styles.modal_desc_text_sm}>
                {languageMobile == "en"
                  ? infoDesc?.map((item) => item.descEn).toString()
                  : infoDesc?.map((item) => item.descEs).toString()}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Activities;
