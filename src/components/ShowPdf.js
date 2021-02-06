import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const ShowPdf = props => {
    const { fileName, nbrPages, defaultPage } = props;
    const [numPages, setNumPages] = useState(nbrPages || null);
    const [pageNumber, setPageNumber] = useState(defaultPage || 1);

    const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

    return (
        <div className="pdf-file-container">
          <Document file={fileName} onLoadSuccess={onDocumentLoadSuccess}> 
            <Page pageNumber={pageNumber} />
          </Document>

          <p> Page {pageNumber} of {numPages} </p>
        </div>
    );
}

export default ShowPdf;






