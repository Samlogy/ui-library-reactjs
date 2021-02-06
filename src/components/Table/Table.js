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
  );
  const data = useMemo(() => makeData(100000), []);
  
 

  return (
    <div className="table-style">
      <TableLayout columns={columns} data={data} />
    </div>
  )
};


export default Table;




// const [data, setData] = useState([]);
  
// const loadData = () => {
//   const url = 'https://api.tvmaze.com/search/shows?q=snow';

//   fetch(url)
//   .then(res => res.json())
//   .then(res => {
//     setData(res.data);
//     console.log(res);
//   }).catch(error => console.log(error));
// };

// useEffect( () => { loadData() }, []);

//   const columns = useMemo(
//   () => [
//     {
//       Header: "TV Show",
//       columns: [
//         {
//           Header: "Name",
//           accessor: "show.name"
//         },
//         {
//           Header: "Type",
//           accessor: "show.type"
//         }
//       ]
//     },
//     {
//       Header: "Details",
//       columns: [
//         {
//           Header: "Language",
//           accessor: "show.language"
//         },
//         {
//           Header: "Genre(s)",
//           accessor: "show.genres",
//           Cell: ({ cell: { value } }) => <Genres values={value} />
//         },
//         {
//           Header: "Runtime",
//           accessor: "show.runtime",
//           Cell: ({ cell: { value } }) => {
//             const hour = Math.floor(value / 60);
//             const min = Math.floor(value % 60);
//             return (
//               <>
//                 {hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""} ` : ""}
//                 {min > 0 ? `${min} min${min > 1 ? "s" : ""}` : ""}
//               </>
//             );
//           }
//         },
//         {
//           Header: "Status",
//           accessor: "show.status"
//         }
//       ]
//     }
//   ],
//   []
// );










