import React from 'react'
import moment from 'moment'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Button } from 'react-bootstrap';
import columns, { convertDate } from './SprintData';
import { formatDate } from '../utilitity';

export const ExportExcel = ({ csvData, fileName, propColumns }) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    if (propColumns)
        columns = propColumns

    csvData = formatJson(csvData)
    console.log(csvData);
    const exportToCSV = (csvData, fileName) => {
        
        console.log("csvData", csvData);
        const ws = XLSX.utils.json_to_sheet(csvData);
        console.log('ws', ws)
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    return (
        <Button variant="success" onClick={(e) => exportToCSV(csvData, fileName)}>
            <i className="feather icon-external-link  mx-0 " style={{ fontSize: "25px " }}></i> <span className="font-weight-bold">Excel</span></Button>
    )
}
///convert data/////


// Conversion of raw json data to excel kpi file like data format
const formatJson = (csvData) => (
    csvData.map((sprint) => {
        const data = {}
        if (sprint.projectName)
            data['Plateau'] = sprint.projectName 
        columns.forEach(({ title, dataIndex }) => {
            let item = sprint[dataIndex]
            if(title === "début" || title === "fin") item = convertDate(sprint[dataIndex])
            data[title] = item
        })
        return data
    })
)

// {
//     title: 'Plateau',
//     dataIndex: 'projectName',
// },