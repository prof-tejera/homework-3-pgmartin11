import Panel from "components/Panel/Panel";
import PagerItem from "components/PagerItem/PagerItem";
import "./Pager.css";

const Pager = () => {
  const currVal = 2;
  const pagerMap = [
    [],
    [1,2,3,null,12], //1
    [1,2,3,null,12], //2
    [1,2,3,null,12], //3
    [4,5,6,null,12], //4
    [4,5,6,null,12], //5
    [4,5,6,null,12], //6
    [7,8,9,null,12], //7
    [7,8,9,null,12], //8
    [8,9,10,11,12], //9
    [8,9,10,11,12], //10
    [8,9,10,11,12], //11
    [8,9,10,11,12]  //12
  ];

  return (
    <>
      <span>&lt;</span>
      { pagerMap[currVal].map((itemEl, i) => <PagerItem key={i} itemNumber={itemEl} currItem={currVal} />) } 
      <span>&gt;</span>
    </>
  );
};   

export default Pager;