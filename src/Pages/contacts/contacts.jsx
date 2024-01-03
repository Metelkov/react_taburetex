import React from "react";
import styles from "./style.module.css"

export const Contacts = () => {
    return (
        <div className={styles.root}>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1107.7262473783487!2d43.849967591575634!3d56.270236019462075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414e2bcd4bdae76f%3A0x29f65ea743260dd9!2z0J3Qn9CfIMKr0KHQntCi0JXQmtChwrs!5e0!3m2!1sru!2sru!4v1685689007670!5m2!1sru!2sru" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <p>АО «НПП «СОТЕКС».</p>
            <p>Тел.: +7 (831) 297 30 29</p>
            <p>E-mail: info@sotex-nn.ru</p>
            <p>603095, г. Нижний Новгород, Шуваловский проезд, д. 5.</p>
        </div>
    );

};