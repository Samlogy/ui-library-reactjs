import { useState , useEffect } from 'react';

import './style.css';

const Pagination = props => {
  const { defaultNode, totalNodes } = props;
  
  // Array of All Items in Pages (DATA)
  const AllItems = [...Array(250).keys()].map(i => (
    { id: (i+1), name: 'Item ' + (i+1), anotherProperty: 'Just another value for testing display' } ));
  
  // Columns
  const columns = ['ID', 'Name', 'Description'];

  // compute total pages
  const pageSize = 10;
  const totalPages = Math.ceil(AllItems.length / pageSize);
  const [pager, setPager] = useState({ currentPage: defaultNode, totalPages: totalNodes || totalPages, pageItems: [], allItems: AllItems, items: '' });

  useEffect(() => { goToPage(defaultNode) }, []);
  
  /* Generate Page Indicators */
  let items = [];
  let leftSide = pager.currentPage - 2;
  if(leftSide <= 0 ) leftSide = 1;
  let rightSide = pager.currentPage + 2;
  if(rightSide > pager.totalPages) rightSide = pager.totalPages;

  for (let number = leftSide ; number <= rightSide; number++) {
    items.push(
      <div key={number} className={(number === pager.currentPage ? 'page-btns active' : 'page-btns')} 
          onClick={()=> goToPage(number)}>
            {number}
      </div>,
    );
  };
 

  const computePageItems = (currentPage) => {
    let startItem, endItem;
    /* First page */
    if(currentPage == 1 ) {
      startItem = 0; endItem = startItem + (pageSize - 1); 
      return pager.allItems.slice(startItem, endItem + 1);

    }else if( currentPage > 1 ){
      /* last page */
      if( currentPage == pager.totalPages ){
        startItem = (currentPage * pageSize - 1);
        return pager.allItems.slice(startItem);

      }else{
        startItem = (currentPage * pageSize - 1);
        endItem = (currentPage * pageSize - 1) + (pageSize - 1);
        return pager.allItems.slice(startItem, endItem + 1);
      }

    }else{
      console.log('Wrong Page please try again !');
    }
     
  };
  const nextPage = () => {
    if(pager.currentPage < pager.totalPages) setPager({...pager, currentPage: pager.currentPage + 1, pageItems: computePageItems(pager.currentPage + 1)});
  };
  const prevPage = () => { 
    if(pager.currentPage > 1) setPager({...pager, currentPage: pager.currentPage - 1, pageItems: computePageItems(pager.currentPage - 1)});
  };
  const goToPage = (val) => { 
    setPager({...pager, currentPage: val, pageItems: computePageItems(val)}); 
  };
  
  

		return (
      <div className="pagination-container">
        
          <h3> currentPage : { pager.currentPage } </h3>

          <table className='table'>
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

            <div className={ pager.currentPage === 1 ? 'page-btns disabled' : 'page-btns'} onClick={prevPage}> &lsaquo; </div>
               { items }
            <div className={pager.currentPage === pager.totalPages ? 'page-btns disabled' : 'page-btns'} onClick={nextPage}> &rsaquo; </div>

            <div className={pager.currentPage === pager.totalPages ? 'page-btns disabled' : 'page-btns'}> 
                <a onClick={() => goToPage(pager.totalPages)}> Last </a>
            </div>
        </div>
      </div>
		);
};


export default Pagination;



// let items = [];
//   let leftSide = pager.currentPage - 2;
//   if(leftSide <= 0 ) leftSide = 1;
//   let rightSide = pager.currentPage + 2;
//   if(rightSide > pager.totalPages) rightSide = pager.totalPages;

//   for (let number = leftSide ; number <= rightSide; number++) {
//     items.push(
//       <div key={number} className={(number === pager.currentPage ? 'page-btns active' : 'page-btns')} 
//           onClick={()=>{ setPager({...pager, currentPage: number})}}>
//             {number}
//       </div>,
//     );
//   };


