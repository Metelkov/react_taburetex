import { newsBack } from "../constants/newsBack"

export let allHistoryCount = newsBack.length;
export let beginHistoryOfPage = 0;
export let limitHistoryOfPage = 10;


export const getButtonOnPage = () => {
    let buttonOnPage = Math.ceil(allHistoryCount / limitHistoryOfPage);
    return buttonOnPage;
};


export const getPagesArray = () => {
    let result =[];
    for( let i = beginHistoryOfPage; i < getButtonOnPage(); i++ ) {
       result.push(i+1);
    }
    return result;
};


export const firstBtnPageSelect = (onClick) => {
    onClick.preventDefault();
    let valueOfTextFirstButton = {
        startValueShowNews: limitHistoryOfPage,
        endValueShowNews: beginHistoryOfPage
    }; 
    return alert(JSON.stringify(valueOfTextFirstButton, null, 1));
};


















/* export const btnPageSelect = (onClick) => {
    onClick.preventDefault();
    let buttonFind = document.getElementsByTagName("button");
      for(let i = 0; i < buttonFind.length; i++){
                buttonFind[i].onclick = function (){
                 let takeTextOnButton = this.innerHTML;
                 let tempVar = '';
                 let tempChar = '';
                  let strReverse = takeTextOnButton.split("").reverse().join("");
                  for(tempChar of strReverse) {
                      if (tempChar == "-") {break;}
                      tempVar+=tempChar;
                };
                  let lastDigitOnButton=tempVar.split('').reverse().join('');
               console.log(lastDigitOnButton);
               return lastDigitOnButton;
               };
      }; 
        alert(lastDigitOnButton);
};
 */