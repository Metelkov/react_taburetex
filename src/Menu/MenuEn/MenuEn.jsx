import React from "react";
import classes from "../MenuEn/MenuEn.module.css"

export const MenuEn = () => {
    return (
        <div className={classes.headMenuFrame}>
        <div className={classes.menu}>
          <div className={classes.menuAbout}>About company
            <ul className={classes.menuList}>
              <li>About company</li>
              <li>News</li>
              <li>History</li>
              <li>Management</li>
              <li>Clients</li>
            </ul>
          </div>
          
          <div className={classes.menuProduct}>Products and production
            <ul className={classes.menuList}>
              <li>Car seat components</li>
              <li>Car seats</li>
              <li>PU systems</li>
              <li>Quality Management System</li>
            </ul>
          </div>
          <div className={classes.menuDocum}>Documents
            <ul className={classes.menuList}>
              <li>Constituent documents</li>
              <li>Certificates</li>
              <li>List of recommended measures to improve working conditions in 2018</li>
              <li>Results of a special assessment of working conditions in 2015</li>
              <li>Summary sheet of the results of a special assessment of working conditions in 2015</li>
              <li>Summary sheet of the results of a special assessment of working conditions in 2018</li>
              <li>Summary sheet of the results of a special assessment of working conditions in 2020</li>
            </ul>
          </div>
          <div className={classes.menuCareer}>Career
            <ul className={classes.menuList}>
              <li>Job vacancies</li>
              {/*<li>Personnel</li>*/}
            </ul>
          </div>
          <div className={classes.menuContacts}>Contacts
            <ul className={classes.menuList}>
              <li>Contacts</li>
            </ul>
          </div>
    
        </div>
        </div>
    )
}