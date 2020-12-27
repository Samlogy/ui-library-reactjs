import React, { useState, useMemo, useEffect } from 'react';

import makeData from './makeData'
import TableLayout from './TableLayout';

import './style.css';

// const Genres = ({ values }) => {
//   return (
//     <>
//       {values.map((genre, idx) => {
//         return (
//           <span key={idx} className="badge">
//             {genre}
//           </span>
//         );
//       })}
//     </>
//   );
// };

const Table = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  )
  const data = useMemo(() => makeData(100000), [])

  return (
    <div className="table-style">
      <TableLayout columns={columns} data={data} />
    </div>
  )
};


export default Table;














