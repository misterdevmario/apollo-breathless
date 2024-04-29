import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useInfo } from "@/context/Context";
import Image from "next/image";
import { sectionTitles, descriptions } from "@/lib/language";
import styles from "./Flyers.module.css";
import { useState } from "react";
import { useModal } from "@/components/modal/useModal";
import Modal from "@/components/modal/Modal";

const Staff = ({ info }) => {
  const {languageMobile } = useInfo();
  const [isOpenFlyer, openFlyer, closeFlyer] = useModal(true);
  const [isOpenFlyerMobile, openFlyerMobile, closeFlyerMobile] = useModal(true);
  const [infoFlyer, setInfoFlyer] = useState();
  const handleImg = (id) => {
    const infoModal = info.flyers
      .filter((item) => item.id == id)
      .map((item) => ({
        descEn: item.attributes.descEn,
        descEs: item.attributes.descEs,
        img: item.attributes.flyerImg,
      }));

    setInfoFlyer(infoModal);
  };

  return (
    <>
      <Modal isOpen={isOpenFlyer} closeModal={closeFlyer}>
        <div className={styles.modal_img}>
          <Image
            src={infoFlyer?.map((item) => item.img).toString()}
            alt="menu"
            width={600}
            height={800}
          />
          <div className={styles.modaldesc}>
            <div className={styles.modaldesc_item}>
              <div className={styles.modaldesc_desc}>
                {languageMobile == "en" ? descriptions.flyerEn : descriptions.flyerEs}
              </div>
              <div className={styles.modaldesc_desc_info}>
                {languageMobile == "en"
                  ? infoFlyer?.map((item) => item.descEn).toString()
                  : infoFlyer?.map((item) => item.descEs).toString()}
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className={styles.staffcontainer}>
        <div className={styles.stafftitle}>
          {languageMobile == "en"
            ? info?.flyersTitle
                ?.map((item) => item.attributes.nameEn)
                .toString()
            : info?.flyersTitle
                ?.map((item) => item.attributes.nameEs)
                .toString()}
        </div>
        <Swiper
          className={styles.staffslideshow_lg}
          spaceBetween={2}
          slidesPerView={1}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 4800,
            disableOnInteraction: false,
          }}
        >
          {info?.flyers.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className={styles.staffcard}
                onClick={() => {
                  handleImg(item.id);
                  openFlyer();
                }}
              >
                <Image
                  src={item.attributes.flyerImg}
                  alt="staff"
                  width={400}
                  height={600}
                  priority
                />{" "}
                <div className={styles.staffinfo}>
                  <div className={styles.name}>
                    <div className={styles.hours}>
                      {item.attributes.hourStart} - {item.attributes.hourEnd}
                    </div>
                    {languageMobile == "en"
                      ? item.attributes.nameEn
                      : item.attributes.nameEs}
                  </div>
                  <div className={styles.position}>
                    {languageMobile == "en"
                      ? item.attributes.spotEn
                      : item.attributes.spotEs}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile*/}
        <div className={styles.stafftitle_sm}>
          {languageMobile == "en"
            ? info?.flyersTitle
                ?.map((item) => item.attributes.nameEn)
                .toString()
            : info?.flyersTitle
                ?.map((item) => item.attributes.nameEs)
                .toString()}
        </div>
        <Swiper
          className={styles.staffslideshow_sm}
          spaceBetween={3}
          slidesPerView={1}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {info?.flyers.map((item, i) => (
            <SwiperSlide
              key={i}
              onClick={() => {
                handleImg(item.id);
                openFlyerMobile();
              }}
            >
              <div className={styles.staffcard}>
                <Image
                  src={item.attributes.flyerImg}
                  alt="staff"
                  width={400}
                  height={600}
                  priority
                />
                <div className={styles.staffinfo}>
                  <div className={styles.name}>
                    <div className={styles.hours}>
                      {item.attributes.hourStart} - {item.attributes.hourEnd}
                    </div>
                    {languageMobile == "en"
                      ? item.attributes.nameEn
                      : item.attributes.nameEs}
                  </div>
                  <div className={styles.position}>
                    {languageMobile == "en"
                      ? item.attributes.spotEn
                      : item.attributes.spotEs}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Modal isOpen={isOpenFlyerMobile} closeModal={closeFlyerMobile}>
        <div className={styles.modal_img}>
          <Image
            src={infoFlyer?.map((item) => item.img).toString()}
            alt="menu"
            width={600}
            height={800}
          />
          <div className={styles.modaldesc}>
            <div className={styles.modaldesc_item}>
              <div className={styles.modaldesc_desc}>
                {languageMobile == "en"
                  ? descriptions.flyerEn
                  : descriptions.flyerEs}
              </div>
              <div className={styles.modaldesc_desc_text}>
                {languageMobile == "en"
                  ? infoFlyer?.map((item) => item.descEn).toString()
                  : infoFlyer?.map((item) => item.descEs).toString()}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Staff;
