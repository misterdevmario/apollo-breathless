import { useInfo } from "@/context/Context";
import { CiLocationOn } from "react-icons/ci";

import styles from "./Dining.module.css";
import Image from "next/image";
import { sectionTitles, descriptions } from "@/lib/language";
import { useModal } from "@/components/modal/useModal";
import Modal from "@/components/modal/Modal";
import { useState } from "react";

const Dining = ({ info }) => {
  const { language, languageMobile } = useInfo();
  const [isOpenDining, openDining, closeDining] = useModal(true);

  const [infoDesc, setInfoDesc] = useState();
  const handleImg = (id) => {
    const infoModal = info.dining
      .filter((item) => item.id == id)
      .map((item) => item.attributes.menus);

    setInfoDesc(infoModal);
  };
  const sortedRestaurants = info.dining?.sort((a, b) => a.id - b.id);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          {language == "en" ? sectionTitles.en.dining : sectionTitles.es.dining}
        </div>
        <div className={styles.card_container}>
          <Modal isOpen={isOpenDining} closeModal={closeDining}>
            <div className={styles.modal_img}>
              {infoDesc != undefined
                ? infoDesc[0]?.map((item, i) => (
                    <Image
                      key={i}
                      src={item}
                      alt="menu"
                      width={600}
                      height={800}
                    />
                  ))
                : null}
            </div>
          </Modal>
          {sortedRestaurants?.map((item) => (
            <div
              className={styles.card}
              key={item.id}
              onClick={() => {
                handleImg(item.id);
                openDining();
              }}
            >
              <div className={styles.name}>{item.attributes.name}</div>
              <div className={styles.restaurants_info_container}>
                <div className={styles.logo}>
                  <Image
                    src={item.attributes.diningImg}
                    width={75}
                    height={75}
                    alt="restaurant logo"
                  />
                </div>
                <div className={styles.iconsinfo}>
                  <div className={styles.icons_container}>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/clock.svg"
                        width={15}
                        height={15}
                        alt="restaurant logo"
                      />
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/menu.svg"
                        width={15}
                        height={15}
                        alt="restaurant logo"
                      />
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/buffet.svg"
                        width={15}
                        height={15}
                        alt="restaurant logo"
                      />
                    </div>
                    <div className={styles.icon}>
                    <CiLocationOn size={15}/>

                    </div>
                  </div>
                  <div className={styles.info_container}>
                    <div className={styles.info}>
                      {item.attributes.hourStart} - {item.attributes.hourEnd}
                    </div>
                    <div className={styles.info}>
                      {language == "en"
                        ? item.attributes.typeEn
                        : item.attributes.typeEs}
                    </div>
                    <div className={styles.info}>
                      {language == "en"
                        ? item.attributes.serviceEn
                        : item.attributes.serviceEs}
                    </div>
                    <div className={styles.info}>
                      {language == "en"
                        ? item.attributes.membersEn
                        : item.attributes.membersEs}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 768px */}
      <div className={styles.container_sm}>
        <div className={styles.title}>
          {languageMobile == "en"
            ? sectionTitles.en.dining
            : sectionTitles.es.dining}
        </div>
        <div className={styles.card_container}>
          <Modal isOpen={isOpenDining} closeModal={closeDining}>
            <div className={styles.modal_img}>
              {infoDesc != undefined
                ? infoDesc[0]?.map((item, i) => (
                    <Image
                      key={i}
                      src={item}
                      alt="menu"
                      width={600}
                      height={800}
                    />
                  ))
                : null}
            </div>
          </Modal>
          {info.dining.map((item) => (
            <div
              className={styles.card}
              key={item.id}
              onClick={() => {
                handleImg(item.id);
                openDining();
              }}
            >
              <div className={styles.name}>{item.attributes.name}</div>
              <div className={styles.restaurants_info_container}>
                <div className={styles.logo}>
                  <Image
                    src={item.attributes.diningImg}
                    width={100}
                    height={100}
                    alt="restaurant logo"
                  />
                </div>
                <div className={styles.iconsinfo}>
                  <div className={styles.icons_container}>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/clock.svg"
                        width={15}
                        height={15}
                        alt="restaurant logo"
                      />
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/menu.svg"
                        width={15}
                        height={15}
                        alt="restaurant logo"
                      />
                    </div>
                    <div className={styles.icon}>
                      <Image
                        src="/Icons/buffet.svg"
                        width={15}
                        height={15}
                        alt="restaurant logo"
                      />
                    </div>
                    <div className={styles.icon}>
                    <CiLocationOn size={15}/>

                    </div>
                  </div>
                  <div className={styles.info_container}>
                    <div className={styles.info}>
                      {item.attributes.hourStart} - {item.attributes.hourEnd}
                    </div>
                    <div className={styles.info}>
                      {languageMobile == "en"
                        ? item.attributes.typeEn
                        : item.attributes.typeEs}
                    </div>
                    <div className={styles.info}>
                      {languageMobile == "en"
                        ? item.attributes.serviceEn
                        : item.attributes.serviceEs}
                    </div>
                    <div className={styles.info}>
                      {languageMobile == "en"
                        ? item.attributes.membersEn
                        : item.attributes.membersEs}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dining;
