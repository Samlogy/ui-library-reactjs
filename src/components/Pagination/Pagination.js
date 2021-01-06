import { useState , useEffect } from 'react';

import './style.css';

const Pagination = props => {
  const { defaultNode, totalNodes } = props;

  const [showTable, setShowTable] = useState(true);
  
  // Array of All Items in Pages
  const AllItems = [...Array(250).keys()].map(i => (
    { id: (i+1), name: 'Item ' + (i+1), anotherProperty: 'Just another value for testing display' } ));

  // calculate total pages
  const pageSize = 10;
  const totalPages = Math.ceil(AllItems.length / pageSize);
  const [pager, setPager] = useState({ currentPage: defaultNode, totalPages: totalNodes || totalPages, pageItems: [] });

  useEffect(() => {
    pager.pageItems && pager.pageItems ? setShowTable(true) : setShowTable(false);
  }, []);


  // let maxPages = 10;
  let items = [];
  let leftSide = pager.currentPage - 2;
  if(leftSide <= 0 ) leftSide = 1;
  let rightSide = pager.currentPage + 2;
  if(rightSide > pager.totalPages) rightSide = pager.totalPages;

  for (let number = leftSide ; number <= rightSide; number++) {
    items.push(
      <div key={number} className={(number === pager.currentPage ? 'page-btns active' : 'page-btns')} 
          onClick={()=>{ setPager({...pager, currentPage: number})}}>
            {number}
      </div>,
    );
  };

  const computePageItems = (pageSize) => {
    let startItem, endItem;
    /* First page */
    if( pager.currentPage == 1 ) {
      startItem = 0; endItem = startItem + (pageSize - 1); 
      console.log(items.slice(startItem, endItem + 1))
      return items.slice(startItem, endItem + 1);

    }else if( pager.currentPage > 1 ){
      /* last page */
      if( pager.currentPage < pager.totalPages ){
        startItem = (pager.currentPage * pageSize - 1);
        console.log(items.slice(startItem))
        return items.slice(startItem);

      }else{
        startItem = (pager.currentPage * pageSize - 1);
        endItem = (pager.currentPage * pageSize - 1) + (pageSize - 1);
        console.log(items.slice(startItem, endItem + 1))
        return items.slice(startItem, endItem + 1);
      }

    }
     
  };
  const nextPage = () => {
    if(pager.currentPage < pager.totalPages){
      const pageOfItems = computePageItems(10);
      setPager({...pager, currentPage: pager.currentPage + 1, pageItems: pageOfItems})
    }
  };
  const prevPage = () => {
    if(pager.currentPage > 1){
      const pageOfItems = computePageItems(10);
      setPager({...pager, currentPage: pager.currentPage - 1, pageItems: pageOfItems})
    }
  };
  const goToPage = (val) => { 
    const pageOfItems = computePageItems(10);
    setPager({...pager, currentPage: val, pageItems: pageOfItems}); 
  };
  
  const columns = ['ID', 'Name', 'Description'];

  



		return (
      <div className="pagination-container">
        
          <h3> currentPage : { pager.currentPage } </h3>

          <table className={showTable ? 'table': 'table-hide'}>
            <tr> { columns.map((el, index) => <th key={index}> {el} </th>) } </tr>

          { pager.pageItems.map((item, index) =>
              <tr key={index}>
                <td> {item.id} </td> 
                <td> {item.name} </td> 
                <td> {item.anotherProperty} </td>
              </tr> )}
          </table>
     
        <div className="paginate-ctn">
            <div className={ pager.currentPage === 1 ? 'page-btns disabled' : 'page-btns'}> 
                <a onClick={() => goToPage(1)}> First </a>
            </div>

            <div className="page-btns" onClick={prevPage}> &lsaquo; </div>
                {items}
            <div className="page-btns" onClick={nextPage}> &rsaquo; </div>

            <div className={pager.currentPage === pager.totalPages ? 'page-btns disabled' : 'page-btns'}> 
                <a onClick={() => goToPage(pager.totalPages)}> Last </a>
            </div>
        </div>
      </div>
		);
};


export default Pagination;