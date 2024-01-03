import React from "react";
import classes from "../MenuRu/MenuRu.module.css"

export const MenuRu = () => {
    return (
        <div className={classes.headMenuFrame}>
        <div className={classes.menu}>
          <div className={classes.menuAbout}>О Компании
            <ul className={classes.menuList}>
              <a href="about">О Компании</a>
              <a href="news">Новости</a>
              <a href="history">История</a>
              <a href="management">Руководство</a>
              <a href="clients">Клиенты </a>
            </ul>
          </div>
          
          <div className={classes.menuProduct}>Продукция и производство
            <ul className={classes.menuList}>
              <li>Компоненты автомобильных сидений</li>
              <li>Автомобильные сиденья</li>
              <li>Системы ППУ</li>
              <li>Система Менеджмента Качества</li>
            </ul>
          </div>
          <div className={classes.menuDocum}>Документы
            <ul className={classes.menuList}>
              <li>Учредительные документы</li>
              <li>Сертификаты</li>
              <li>Перечень рекомендуемых мероприятий по улучшению условий труда 2018г</li>
              <li>Результаты специальной оценки условий труда 2015г</li>
              <li>Сводная ведомость результатов проведения специальной оценки условий труда 2015г</li>
              <li>Сводная ведомость результатов проведения специальной оценки условий труда 2018г</li>
              <li>Сводная ведомость результатов проведения специальной оценки условий труда 2020г</li>
            </ul>
          </div>
          <div className={classes.menuCareer}>Карьера
            <ul className={classes.menuList}>
              <a href="Vacansies">Вакансии</a>
              {/*<li>Персонал</li>*/}
            </ul>
          </div>
          <div className={classes.menuContacts}>Контакты
            <ul className={classes.menuList}>
              <a href="contacts">Контакты</a>
            </ul>
          </div>
    
        </div>
        </div>
    );
}