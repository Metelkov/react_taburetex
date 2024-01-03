import styles from  "./styles.module.css";
import { limitHistoryOfPage } from "../utils/pagescount";
import { getPagesArray } from "../utils/pagescount";
import { allHistoryCount } from "../utils/pagescount";


export const Buttonnews = ({onPageClick}) => {
    return <>
      {allHistoryCount > 10 ?  
         getPagesArray(allHistoryCount, limitHistoryOfPage).map((res)=>
           <button 
              className={styles.btnPageSelect}
              onClick={onPageClick}
              data-page={res}
          >
            {1+parseInt(res*10)-10}-{parseInt(parseInt(res*limitHistoryOfPage))+(limitHistoryOfPage)-10}</button>
         )
         
         :'' 
      }
        </>
}