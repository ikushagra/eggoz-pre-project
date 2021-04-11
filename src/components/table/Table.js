import React from 'react'
import './table.css'
import Pagination from '../paginate/Pagination'

export default function Table(props){

    const fakeData = [{id: 1, date: "12-may-2012, 03:12 PM", product: "white-eggs", source: 'asd farm', qty: 9000, status: 'on the way', action: '...'}, {id: 2, date: "12-may-2012, 03:12 PM", product: "white-eggs", source: 'asd farm', qty: 9000, status: 'on the way', action: '...'},{id: 2, date: "12-may-2012, 03:12 PM", product: "white-eggs", source: 'asd farm', qty: 9000, status: 'on the way', action: '...'},{id: 2, date: "12-may-2012, 03:12 PM", product: "white-eggs", source: 'asd farm', qty: 9000, status: 'on the way', action: '...'},{id: 2, date: "12-may-2012, 03:12 PM", product: "white-eggs", source: 'asd farm', qty: 9000, status: 'on the way', action: '...'},{id: 2, date: "12-may-2012, 03:12 PM", product: "white-eggs", source: 'asd farm', qty: 9000, status: 'on the way', action: '...'},{id: 2, date: "12-may-2012, 03:12 PM", product: "white-eggs", source: 'asd farm', qty: 9000, status: 'on the way', action: '...'},{id: 2, date: "12-may-2012, 03:12 PM", product: "white-eggs", source: 'asd farm', qty: 9000, status: 'on the way', action: '...'}]
    const posts = props.posts
    // const loading = {loading}
    const totalPosts = props.totalPosts
    const currentPage = props.currentPage
    const paginate = props.paginate
    const postsPerPage = props.postsPerPage
    const Posts = props.Posts

    return(
        <div className='table-container'>
           <div className='stocks-and-pages'> 
           
           <div className='stocks-heading'><span className='stocks'>Stocks</span></div>
           <div className='page-and-items'>
    <div className ='page'>Page <span style={{color: 'black'}}>{currentPage}</span></div>
    <div className='items'> Items <span style={{color: 'black'}}>{totalPosts}</span></div>
           </div>

           </div>
           <div className='table-and-contents'>
               <table className='inside-table'>
                   <tr className='heading-table'>
                       <th>B.ID</th>
                       <th>Date & Time</th>
                       <th>Products</th>
                       <th>Source Farm</th>
                       <th>Qty</th>
                       <th>Status</th>
                       <th >Actions</th>
                   </tr>
                   {posts.map((value, index) => (
                       <tr className='contents-table'>
                           <td>{value.id}</td>
                           <td>12/1/2021</td>
                           <td>{value.title}</td>
                           <td>xyz</td>
                           <td>{value.userId}</td>
                           <td>on the way</td>
                           <td>...</td>
                       </tr>
                   ))}

               </table>
           </div>
           
           <div className='bottom-container'>
           <div className='bottom-options'>
               <div className='table-actions-section-1'>
               <select><option>...</option></select>
               <select><option>Search Product...</option></select>
               <select><option>None</option></select>
               <select><option>None</option></select>
               </div>
               <div className='table-actions-section-2'>
               <select><option>All</option></select>
               <select><option>All</option></select>
               <select><option>All</option></select>
               <select><option>Date</option></select>

               </div>
           </div>
           <div className='paging'>

            <Pagination     
                postsPerPage={postsPerPage}
                totalPosts={Posts.length}
                paginate={paginate}
            />

           </div>
           </div>
        </div>
    )
}