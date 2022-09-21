const PagerItem = ({itemNumber, currItem}) => { 
  const spanClass = currItem === itemNumber ? 'current-item' : '',
    itemVal = itemNumber ? itemNumber : '...';

  return <span className={spanClass}>{itemVal}</span>;
};

export default PagerItem;