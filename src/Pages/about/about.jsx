import React from "react";
import styles from  "./styles.module.css";

import product from "../../constants/product";
import masters from "../../constants/masters";
import proizv from "../../constants/proizv";
import quality from "../../constants/quality";

export const About = () => {

    return (
        <div className={styles.root}>
            <div>
                <p>
                    Тут чтото нужно писать "О Компании", но это нужно согласовывать, что бы не написать лишнего.
                    Так же я сюда положил часть содержимого, которое должно быть в других пунктах меню, т.к. 
                    это все демонстрация и заполнять все пункты меню не имеет смысла.
                </p>
            </div>
            <h2>
                Наша продукция производится на собственном производстве под руководством опытных мастеров,
                проверяется отделом качества и проходит обязательное тестирование
            </h2>
        <div className={styles.blockWrap}>
            <div className={styles.productDescript}>
                <div className={styles.photo}>
                {product.map(product => {
                    return (
                        <div className={styles.picture} key={product}>
                            <img src={product} alt=""></img>
                         </div>   
                    );
                    })}
                </div>
                <div className={styles.descript}>
                    <p>Продукция из экологически чистых материалов, доступна под заказ.</p>
                </div>
            </div>
            <div className={styles.productDescript}>
                <div className={styles.photo}>
                {masters.map(masters => {
                    return (
                        <div className={styles.picture} key={masters}>
                            <img src={masters} alt=""></img>
                         </div>   
                    );
                    })}
                </div>
                <div className={styles.descript}>
                  <p>Наши мастера профессионалы своего дела, прошедшие обучение в профильных заведениях.</p>
                </div>
            </div>
            <div className={styles.productDescript}>
                <div className={styles.photo}>
                {proizv.map(proizv => {
                    return (
                        <div className={styles.picture} key={proizv}>
                            <img src={proizv} alt=""></img>
                         </div>   
                    );
                    })}
                </div>
                <div className={styles.descript}>
                  <p>Все производство состоит из отечественного оборудования и работа происходит, также, с отечественным сырьем.</p>
                </div>
            </div>
            <div className={styles.productDescript}>
                <div className={styles.photo}>
                {quality.map(quality => {
                    return (
                        <div className={styles.picture} key={quality}>
                            <img src={quality} alt=""></img>
                         </div>
                    );
                    })}
                </div>
                <div className={styles.descript}>
                  <p>Отдел качества и тестирования не пропускают брак</p>
                </div>
            </div>
        </div>
        </div>
    );
};