import { Link, Outlet } from "react-router-dom";
import styles from  "./styles.module.css"
import { FooterRu } from "../Footer/Ru/Footerru";
import { Header } from "../Header/Header";
import { MenuRu } from "../Menu/MenuRu/MenuRu";


export const Layout  = ({children}) => {
    return (
        <>
        <div className={styles.root}>
            <Header />
            <MenuRu />
            <div className={styles.content}>{children}
              <Outlet />
            </div>
            {/*<div className={styles.content}><Clients /></div>*/}
            <FooterRu className={styles.foo}>{children}</FooterRu>
        </div>
        </>
    );
};