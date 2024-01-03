import React from "react";
import classes from "../Buttonhead/buttonhead.module.css"

export const HeadButton = (props) => {
    return (<button className={classes.headerTitleBtn}>{props.children}</button>);

    /*return (<button {...props} className={classes.headerTitleBtn}>{children}</button>);
    */
};