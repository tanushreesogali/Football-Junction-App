// DonationsCardDesktop.js
import React from 'react';
import donateImg from "../images/donate-bg.png";
import donate2 from "../images/donate-shirts.png";
import donate1 from "../images/donate-ball.png";
import donate3 from "../images/donate-shoes.png";
import styles from './DonationDesktop.module.css';

const DonationDesktop = () => {
    return (
        <div className={styles["donations-card-desktop"]}>
            <p className={styles["donations-title"]}>Donations</p>
            <div className={styles["donations-section"]}>
                <img className={styles["donate-bg"]} src={donateImg} alt="donate-img" />
                <div className={styles["donate-content"]}>
                    <div className={styles["donate-writeup"]}>
                        <p className={styles["donate-title"]}>The Beautiful game will help support a beautiful SMILE</p>
                        <p className={styles["donate-subtitle"]}>
                            Our generous donation will help us empower young football talent, providing them with the resources and opportunities to pursue their passion and build a brighter future through the beautiful game.
                        </p>
                    </div>

                    <div className={styles["donate-contri-section"]}>
                        <div className={styles["donate-imgs-section"]}>
                            <div className={styles["donate-imgs"]}>
                                <div className={styles["donate-image"]}>
                                    <p className={styles["donate-rate"]}>₹300</p>
                                    <img className={styles["donate-things"]} src={donate2} alt="donate-img" />
                                    <p className={styles["donate-name"]}>Kits</p>
                                </div>
                            </div>

                            <div className={styles["donate-imgs"]}>
                                <div className={styles["donate-image"]}>
                                    <p className={styles["donate-rate"]}>₹500</p>
                                    <img className={styles["donate-things"]} src={donate1} alt="donate-img" />
                                    <p className={styles["donate-name"]}>Football</p>
                                </div>
                            </div>

                            <div className={styles["donate-imgs"]}>
                                <div className={styles["donate-image"]}>
                                    <p className={styles["donate-rate"]}>₹700</p>
                                    <img className={styles["donate-things"]} src={donate3} alt="donate-img" />
                                    <p className={styles["donate-name"]}>Studs</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button className={styles["donate-contri-button"]}>Contribute</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationDesktop;
