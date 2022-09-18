const PagerItem = ({itemNumber, currItem}) => { 
  const spanClass = currItem === itemNumber ? 'current-item' : '';
  const itemVal = itemNumber ? itemNumber : '...';

  return <span className={spanClass}>{itemVal}</span>;
};

export default PagerItem;