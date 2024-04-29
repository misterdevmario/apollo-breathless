import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useInfo } from "@/context/Context";
import Image from "next/image";
import { sectionTitles } from "@/lib/language";
import styles from "./Staff.module.css";
import { useModal } from "@/components/modal/useModal";
import { useState } from "react";
import Modal from "@/components/modal/Modal";
import { descriptions } from "@/lib/language";

const Staff = ({ info }) => {
  const { language, languageMobile } = useInfo();
  const [isOpenStaff, openStaff, closeStaff] = useModal(true);
  const [isOpenStaffMobile, openStaffMobile, closeStaffMobile] = useModal(true);
  const [infoStaff, setInfoStaff] = useState();

  const handleImg = (id) => {
    const infoModal = info.staff
      .filter((item) => item.id == id)
      .map((item) => ({
        bioEn: item.attributes.bioEn,
        bioEs: item.attributes.bioEs,
        img: item.attributes.staffImg,
      }));

    setInfoStaff(infoModal);
  };

  return (
    <>
      <Modal isOpen={isOpenStaff} closeModal={closeStaff}>
        <div className={styles.modal_img}>
          <Image
            src={infoStaff?.map((item) => item.img).toString()}
            alt="menu"
            width={600}
            height={800}
          />
          <div className={styles.modaldesc}>
            <div className={styles.modaldesc_item}>
              <div className={styles.modaldesc_desc}>
                {language == "en" ? descriptions.bioEn : descriptions.bioEs}
              </div>
              <div className={styles.modaldesc_desc_info}>
                {language == "en"
                  ? infoStaff?.map((item) => item.bioEn).toString()
                  : infoStaff?.map((item) => item.bioEs).toString()}
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className={styles.staffcontainer}>
        <div className={styles.stafftitle}>
          {language == "en" ? sectionTitles.en.staff : sectionTitles.es.staff}
        </div>
        <Swiper
          className={styles.staffslideshow_lg}
          spaceBetween={2}
          slidesPerView={1}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 4300,
            disableOnInteraction: false,
          }}
        >
          {info?.staff.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className={styles.staffcard}
                onClick={(id) => {
                  openStaff();
                  handleImg(item.id);
                }}
              >
                <Image
                  src={item.attributes.staffImg}
                  alt="staff"
                  width={400}
                  height={600}
                  priority
                />{" "}
                <div className={styles.staffinfo}>
                  <div className={styles.name}>{item.attributes.name}</div>
                  <div className={styles.position}>
                    {language == "en"
                      ? item.attributes.positionEn
                      : item.attributes.positionEs}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile*/}
        <div className={styles.stafftitle_sm}>
          {languageMobile == "en"
            ? sectionTitles.en.staff
            : sectionTitles.es.staff}
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
          {info?.staff.map((item, i) => (
            <SwiperSlide
              key={i}
              onClick={(id) => {
                openStaffMobile();
                handleImg(item.id);
              }}
            >
              <div className={styles.staffcard}>
                <Image
                  src={item.attributes.staffImg}
                  alt="staff"
                  width={400}
                  height={600}
                  priority
                />
                <div className={styles.staffinfo}>
                  <div className={styles.name}>{item.attributes.name}</div>
                  <div className={styles.position}>
                    {languageMobile == "en"
                      ? item.attributes.positionEn
                      : item.attributes.positionEs}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Modal isOpen={isOpenStaffMobile} closeModal={closeStaffMobile}>
        <div className={styles.modal_img}>
          <Image
            src={infoStaff?.map((item) => item.img).toString()}
            alt="menu"
            width={600}
            height={800}
          />
          <div className={styles.modaldesc}>
            <div className={styles.modaldesc_item}>
              <div className={styles.modaldesc_desc}>
                {languageMobile == "en" ? descriptions.bioEn : descriptions.bioEs}
              </div>
              <div>
                {languageMobile == "en"
                  ? infoStaff?.map((item) => item.bioEn).toString()
                  : infoStaff?.map((item) => item.bioEs).toString()}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Staff;
