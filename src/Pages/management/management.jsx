import React from "react";
import styles from "./styles.module.css";

export const Management = () => {
    return (
        <>
        <div className={styles.root}>
        <div className={styles.wrap}>
            <div className={styles.parentRec}>
                <div className={styles.fotoGendir}>
                </div>
                <div className={styles.desc}>
                    <p>Генеральный директор</p>
                </div>
            </div>
            <div className={styles.parentRec}>
                <div className={styles.fotoComm}>
                </div>
                <div className={styles.desc}>
                    <p>Коммерчесий директор</p>
                </div>
            </div>
            <div className={styles.parentRec}>
                <div className={styles.fotoFin}>
                </div>
                <div className={styles.desc}>
                    <p>Финансовый директор</p>
                </div>
            </div>
            <div className={styles.parentRec}>
                <div className={styles.fotoKadr}>
                </div>
                <div className={styles.desc}>
                    <p>Директор по кадрам</p>
                </div>
            </div>
        </div>
        <div className={styles.wrap}>
            <div className={styles.parentRec}>
                <div className={styles.fotoBez}>
                </div>
                <div className={styles.desc}>
                    <p>Директор по безопасности</p>
                </div>
            </div>
            <div className={styles.parentRec}>
                <div className={styles.fotoTech}>
                </div>
                <div className={styles.desc}>
                    <p>Главный технолог</p>
                </div>
            </div>
            <div className={styles.parentRec}>
                <div className={styles.fotoSklad}>
                </div>
                <div className={styles.desc}>
                    <p>Складской директор</p>
                </div>
            </div>
            <div className={styles.parentRecTemp}>
                <div className={styles.fotoTemp}>
                </div>
                <div className={styles.desc}>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
        </>
    );
};
