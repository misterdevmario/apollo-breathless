//import Staff from "./staff/Staff";
import Dining from "./dining/Dining";
import Breakfast from "./breakfast/Breakfast";
import Bars from "./bars/Bars";
import Flyers from "./flyers/Flyers";
import styles from "./FooterRender.module.css";
import Staff from "./staff/Staff";

const FooterRender = ({ info }) => {

  return (
    <div className={styles.container}>
      <div className={styles.staff}>
        <Staff info={info} />
      </div>
      <div className={styles.dining}>
        <Dining info={info} />
      </div>
      <div className={styles.breakfast}>
        <Breakfast info={info} />
      </div>
      
      <div className={styles.bars}>
        <Bars info={info} />
      </div>
      <div className={styles.flyers}>
        <Flyers info={info}/>
      </div>
    </div>
  );
};

export default FooterRender;
