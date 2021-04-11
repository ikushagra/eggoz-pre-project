import React from 'react'
import './operations.css'
import DashboardNav from '../dashboard-nav/DashboardNav'
import Card from '../card/Card'
import Table from '../table/Table'
import MapCard from '../mapcard/MapCard'

export default function Operations(props){
    const stockData = props.stockDataFromApp
    const eggData = props.eggDataFromApp
    const whiteEggs = eggData.filter(value => value.name === 'white eggs')
    const brownEggs = eggData.filter(value => value.name === 'brown eggs')
    const nutriEggs = eggData.filter(value => value.name === 'nutri eggs')
    const posts = props.posts
    const loading = props.loading
    const totalPosts = props.totalPosts
    const currentPage = props.currentPage
    const paginate = props.paginate
    const postsPerPage = props.postsPerPage
    const Posts = props.Posts

    return(
        <>
            <DashboardNav toggleMenu = {props.toggleMenu}/>
            <div className='card-wrapper'>
            <Card name={whiteEggs[0].name} fulltray={845}singleEggs={27}chatkiEggs={9}/>
            <Card name={brownEggs[0].name} fulltray={335} chatkiEggs={19} singleEggs={27}/>
            <Card name={nutriEggs[0].name} fulltray={435} singleEggs={21} chatkiEggs={9}/>
            <MapCard/>

            </div>

            <Table Posts={Posts} posts={posts} loading={loading} totalPosts={totalPosts} currentPage={currentPage} postsPerPage={postsPerPage} paginate={paginate}/>
            

        </>
    )
}