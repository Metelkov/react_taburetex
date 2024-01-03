import { useState } from "react";
import { Buttonnews } from "../../Buttonnews/buttonnews"
import styles from  "./styles.module.css";
import { newsBack } from "../../constants/newsBack";


export const News = () => {
//текущ страница
const [page, setPage] = useState (1);
  const onPageClick = (e) => {
    if (e && e.preventDefault) { e.preventDefault(); }
setPage(e.target.dataset.page)
};
let limitHistoryOfPage = parseInt(page*10);
let beginHistoryOfPage = limitHistoryOfPage - 10;

//let limitHistoryOfPage = parseInt((JSON.stringify(`${page}`)))*10;
//let limitHistoryOfPage = (parseInt(JSON.stringify(`${page}`)));
//let limitHistoryOfPage = Number(JSON.stringify(`${page}`));
//let limitHistoryOfPage = Number(JSON.stringify(`${page}`));
//var foo = {bar: 1}; String(foo['bar'])
//return alert(JSON.stringify(valueOfTextFirstButton, null, 1));
//console.log("------ ");
//console.log("page = "+ JSON.stringify(`${page}`));   //[object Object]
//console.log("limitHistoryOfPage typeof = " + typeof(limitHistoryOfPage));
//console.log("limitHistoryOfPage  = " + limitHistoryOfPage);
//console.log("digit  = " + parseInt(limitHistoryOfPage));



//let firstNewsOnPage = btnPageSelect();
//console.log("otrabotka = "+btnPageSelect() );

//123wa,zr
    return (
        <div className={styles.root}>
            <div>
            <h3>Новости</h3>
               <div>
                 {newsBack?.slice(beginHistoryOfPage, limitHistoryOfPage).map((newsList) => (
                  <div className={styles.oneFrameCurrentNews}>
                    <sup><p className={styles.numberNews}>[ {newsList.id} ]</p></sup>
                    <div className={styles.newsNameArea}>
                    {newsList.date}
                    </div>
                    <div className={styles.newsAboutArea}>
                    {newsList.text}
                    </div>
                  </div>
                  ))}
<Buttonnews onPageClick={onPageClick} />
                </div>
            </div>
        </div>
    );
};