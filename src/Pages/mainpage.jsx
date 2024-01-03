import React, {useRef, useEffect, useState} from "react";
import styles from  "./styles.module.css";
import { ChangeSlide } from "../sliders/slideMozaic/SliderMozaic";
import { motion } from "framer-motion";
import imagesForCarousel from "../constants/imagesForCarousel"

export const Mainpage = (children, props) => {

  const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(()=>{
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth+130);
    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.slideBlock}>
              <div className={styles.slideBlockLeft}
                /*style={{backgroundImage: "url(" + backgroundPicPath + ")" }} */
              >
                <motion.div 
                ref={carousel}
                whileTap={{cursor:"grabbing"}}
                className={styles.carousel}>
                  <motion.div 
                  animate={{x:-width}}
                  transition={{
                    duration:8,
                    repeat:Infinity,
                    ease:"linear"
                  }}
                  drag="x"
                  dragConstraints={{right:0, left: -width}}
                  className={styles.innerCarousel}>
                    {imagesForCarousel.map(image => {
                      return(
                        <motion.div className={styles.item} key={image}>
                          <img src={image} alt=""></img>
                        </motion.div>
                      );
                    })}

                  </motion.div>
                </motion.div>
              </div>
                <div className={styles.picBlock}></div>
                <motion.div
                animate={{rotate:360}}
                drag
                  dragConstraints={{
                    top: -30,
                    left: -30,
                    right: 30,
                    bottom: 30,
                  }}
                transition={{
                  duration:6,
                  repeat:Infinity,
                  repeatDelay:0,
                  repeatType:"loop",
                  type:"linear",
                  ease:"linear"
                }}
                
                className={styles.slideBlockRight}></motion.div>
            </div>
            <div className={styles.contentBlock}>
                <div className={styles.leftPart}>
                  {<h3><a href ="https://www.sotex.ru/"> тут Сотекс здорового человека</a></h3>}
                  {<h3><a href = "http://sotex-nn.ru/ru/">тут Сотекс курильщика</a></h3>}
                  <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1.2
                  }}>
                    Создано с использованием React.js
                  </motion.h2>
                  <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1.9
                  }}
                  >
                    Специально минимальный дизайн, все для простоты просмотра и минимальной загрузки, хотя SPA все же внесет коррективы.
                  </motion.p>
                  <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 2.4
                  }}
                  >
                    Специально светлые тона, но и зеленый присутствует.
                  </motion.p>
                  <p>Т.к. всё это демонстрация, то заполнять все пункты меню нет смысла.</p>
                  <h2>
                    Функционируют только сл. пункты меню: <u>О КОМПАНИИ, КАРЬЕРА,  КОНТАКТЫ.</u> Для отображении Гугл карты нужно подключение к интернету. Раздел НОВОСТИ и КАРЬЕРА берут данные из отдельного файла, можно выгружать данные с бэкэнда и они будут подцепляться - автоматизация. О Компании и Клиенты - картинки так же грузятся динамически, из файла. 
                  </h2>
                  <p></p>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className={styles.centerSeparator}></div>
                <div className={styles.rightPart}>
                    <motion.p
                  initial={{
                    x: 30,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,

                  }}
                  transition={{
                    delay: 0.9,
                  }}>
                      <u><i><b>На сайте находятся картиниы Васи Ложкина, исключительно в ознакомительных целях.</b></i></u> <h3>Taburexex - потому, что, когдато, во времена Жаринова и "молодых" конструкторов была реплика - "Вам только табуретки проектировать"</h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic ex dolor ipsam officiis totam iste repellendus unde soluta? Quis magnam suscipit nihil in veritatis atque non fuga commodi, porro accusamus incidunt sunt. Odio, dolor nemo. Sed qui omnis, voluptas libero eius beatae rem, et cum quia, quam veritatis at? Veritatis commodi repellendus doloremque non laboriosam? Architecto atque nihil enim obcaecati consequatur, molestiae omnis. Quisquam distinctio eum consequatur libero praesentium, molestias, in consectetur at quis voluptatem nemo odit expedita fugit, architecto nihil? Nemo fugit illum consectetur. Quo saepe, enim labore a assumenda laboriosam reprehenderit debitis, eos placeat culpa excepturi. Quibusdam, doloribus accusantium amet, voluptatibus quasi, incidunt quae blanditiis maxime fugit nulla quis! Quidem doloremque obcaecati, eum assumenda sequi molestias! Neque, laborum quibusdam distinctio, animi aliquid voluptate iste magnam saepe, odit at inventore quo optio alias. Deserunt dolor incidunt cum vel, sequi magnam porro laboriosam delectus perferendis sapiente dicta doloremque error fuga vero repudiandae sed explicabo quae velit assumenda cupiditate voluptate, quod rerum possimus veritatis! Porro deleniti temporibus nihil, ex autem voluptatem saepe sapiente incidunt, aut repellendus pariatur est voluptas corporis quod. Officiis placeat at, eaque impedit sint veritatis quaerat et iure aliquam ut illo natus nulla quod in facilis repudiandae.</motion.p>
                </div>
            </div>
        </div>
    );
};

//setInterval(Mainpage, 2000);
