import React from 'react';
import CsvDownloader from 'react-csv-downloader';
import { extractColumns, extractDataInJson } from '../../utils/exportDataUtils';

function ExportData({data,headData}) {

    const dataToExtract=extractDataInJson(data,headData);

    const columns = extractColumns(headData);
    return (
        <div>
            <CsvDownloader 
                filename={'Table3'+new Date().toLocaleString()}
                extension=".csv"
                separator=";"
                wrapColumnChar="'"
                columns={columns}
                datas={dataToExtract}
                text="Export CSV"
                className='refreshBtn'/>
        </div>
    );
}

export default ExportData;