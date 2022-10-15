import React from 'react'
import styles from "./../../../Styles/Banner/Banner.module.css";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import BannerCTA from "./BannerCTA";


const BannerLayout = ({banner, incrementFunction, decrementFunction}) => {
    return (  
        <section className={styles.banner}>
        <div className={styles.leftAngle}>
          <FaAngleLeft onClick={decrementFunction}/>
        </div>
        <div className={styles.rightAngle}>
          <FaAngleRight onClick={incrementFunction} />
        </div>
       {banner}
        <BannerCTA />
      </section>
    );
}
 
export default BannerLayout