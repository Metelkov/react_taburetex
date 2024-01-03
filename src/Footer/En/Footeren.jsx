import React from "react";
import classes from "../En/Footeren.module.css"

export const FooterEn = () => {
    return (
        <div className={classes.mainFooterEn}>
          <div className={classes.tableFooterEn}>
            <div className={classes.tableFooterEnCell}>
              <h4>2011. JSC "Scientific Industrial Enterprise "SOTEX"</h4>
            </div>
            <div className={classes.tableFooterEnCell}>
              <h4><p>Tel.: +7 (831) 297 30 29</p>
                  <p>E-mail: info@sotex-nn.ru</p>
              </h4>
            </div>
            <div className={classes.tableFooterEnCell}>
              <h4><p>Commercial office -</p>
                  <p>603095, г. Nizhny Novgorod,</p>
                  <p>Shuvalovsky passage, 5.</p>
              </h4> 
            </div>
          </div>
        </div>
    )
};