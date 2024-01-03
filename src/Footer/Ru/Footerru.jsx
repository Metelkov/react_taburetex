import React from "react";
import classes from "../Ru/Footerru.module.css"

export const FooterRu = ({className, children }) => {
    return (
        <div className={classes.mainFooterRu}>
          <div className={classes.tableFooterRu}>
            <div className={classes.tableFooterRuCell}>
              <h4>2011. АО «НПП «СОТЕКС».</h4>
            </div>
            <div className={classes.tableFooterRuCell}>
              <h4><p>Тел.: +7 (831) 297 30 29</p>
                  <p>E-mail: info@sotex-nn.ru</p>
              </h4>
            </div>
            <div className={classes.tableFooterRuCell}>
              <h4><p>Коммерческий офис -</p>
                  <p>603095, г. Нижний Новгород,</p>
                  <p>Шуваловский проезд, д. 5.</p>
              </h4> 
            </div>
          </div>
        </div>
    )
};