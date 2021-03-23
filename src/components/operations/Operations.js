import React from 'react'
import './operations.css'
import DashboardNav from '../dashboard-nav/DashboardNav'
import Card from '../card/Card'
import Table from '../table/Table'

export default function Operations(props){
    const stockData = props.stockDataFromApp
    const eggData = props.eggDataFromApp
    const whiteEggs = eggData.filter(value => value.name === 'white eggs')
    const brownEggs = eggData.filter(value => value.name === 'brown eggs')
    const nutriEggs = eggData.filter(value => value.name === 'nutri eggs')
console.log(stockData)

    return(
        <>
            <DashboardNav/>
            <div className='card-wrapper'>
            <Card name={whiteEggs[0].name} fulltray={845}singleEggs={27}chatkiEggs={9}/>
            <Card name={brownEggs[0].name} singleEggs={27}/>
            <Card name={nutriEggs[0].name} chatkiEggs={9}/>
            <Card name={nutriEggs[0].name} chatkiEggs={9}/>

            </div>

            {/* <Table/> */}

        </>
    )
}