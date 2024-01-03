import React from "react";
import styles from  "./styles.module.css";
import { vacancies } from "../../constants/vacansiesBack";

export const Vacansies = () => {

    return (
        <div className={styles.root}>
            <div>
            <h3>Вакансии</h3>
                  <div className={styles.headerFrameVacansie}>
                    <div className={styles.headerNameArea}>
                      <h2>Название вакансии</h2>
                    </div>
                    <div className={styles.headerjobPriceArea}>
                    <h2>Предпологаемая заработная плата</h2>
                    </div>
                    <div className={styles.headerjobAboutArea}>
                    <h2>Краткое описание</h2>
                    </div>
                  </div>
               <div>
                 {vacancies?.map((jobName) => (
                  <div className={styles.oneFrameCurrentVacansie}>
                    <div className={styles.jobNameArea}>
                    {jobName.job}
                    </div>
                    <div className={styles.jobPriceArea}>
                    {jobName.price + " руб"}
                    </div>
                    <div className={styles.jobAboutArea}>
                    {jobName.about}
                    </div>
                  </div>
                  ))}
                </div>
            </div>
        </div>
    );
};