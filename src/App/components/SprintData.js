import moment from 'moment'
import React from 'react'

//

const states = {
    active: {
        text: 'En-cours',
        color: 'primary'
    },
    future: {
        text: 'A démarrer',
        color: 'secondary'
    },
    closed: {
        text: 'Clôturé',
        color: 'success'
    }

}


 export const convertDate = (mydata) => {
    return moment(mydata).format("DD/MM/YYYY")
} 

const columns = [
   
    {
        title: 'Sprint',
        dataIndex: 'name',
        
    },
    {
        title: 'début',
        dataIndex: 'startDate',
        sorter: true,
       render: state => (<span> {convertDate(state)}</span>)
    },
    {
        title: 'fin',
        dataIndex: 'endDate',
        sorter: true,
        render: state => (<span> {convertDate(state)}</span>)
    },
    
    {
        title: 'Statut',
        dataIndex: 'state',
        filters: [
            { text: 'En-cours', value: 'active' },
            { text: 'A démarrer', value: 'future' },
            { text: 'Clôturé', value: 'closed' },
        ],
        filterMultiple: false,
        //render: state => (<span className={"text-uppercase mr-1 badge badge-"}>{state}</span>)
        render: state => (<span className={"text-uppercase mr-1 badge badge-" + states[state].color}>{states[state].text}</span>)
    },
    {
        title: 'Issues',
        dataIndex: 'nbIssues',
    },
    {
        title: 'BUG',
        dataIndex: 'bugs',
    },
    {
        title: 'US Engagé',
        dataIndex: 'usEngage',
    },
    {
        title: 'US Réalisé',
        dataIndex: 'usRealise',
    },
    {
        title: 'STP Engagé',
        dataIndex: 'stpEngage',
    },
    {
        title: 'STP Réalisé',
        dataIndex: 'stpRealise',
    },
    {
        title: 'Complétude du sprint',
        dataIndex: 'completude',
    },
    {
        title: 'Acceptance des US',
        dataIndex: 'acceptanceUs',
    },
    {
        title: 'Accélération',
        dataIndex: 'acceleration',
    },
    {
        title: 'dureeSprint',
        dataIndex: 'dureeSprint'
    },
    {
        title: 'dureeEntreDeuxSprint',
        dataIndex: 'dureeEntreDeuxSprint'
    },

];

export default columns;