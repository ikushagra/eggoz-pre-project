
import './App.css';
import React,{ useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar'
import Operations from './components/operations/Operations'
import axios from 'axios'




export default function App({toggleMenu}){

    const [navbarContents] = useState([{name: 'Dashboard', icon: './dash.png'},{name:'Favorites', icon:'./dash.png'}])
    const [appManagement] = useState([{name: 'Fields', icon:''},{name: 'Markets', icon:''},{name: 'Categories', icon:''},{name: 'Products', icon:''},{name: 'Orders', icon:''},{name: 'Coupons', icon:''},{name: 'Users', icon:''},{name: 'Shippers', icon:''},{name: 'Faqs', icon:''}])
    const [settings] = useState([{name: 'Media Library', icon:''},{name: 'Payments', icon:''},{name: 'Mobile App Settings', icon:''},{name: 'Settings', icon:''},])
    const [eggData] = useState([{id: 0, name:'white eggs', total:30, fullTray:true, chatki: 0, singleEggs: 0},{id: 1, name:'brown eggs', total:30, fullTray:true, chatki: 0, singleEggs: 0},{id: 2, name:'nutri eggs', total:30, fullTray:true, chatki: 0, singleEggs: 0},{id: 3, name:'white eggs', total:30, fullTray:true, chatki: 0, singleEggs: 0}])
    const [stockData] = useState([{id: 0, dateAndTime: "12-jan-2020 12:11PM", products: "brown-eggs", sourceFarm: 'xyz', qty: 9000, received: false}])
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [toggled, setToggled] = useState(true)
  
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
        setLoading(false);
      };
  
      fetchPosts();
    }, []);

    toggleMenu = () => {
      setToggled(!toggled)
    }
    console.log(toggled)

    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (

      <div className="app-container">

          <Navbar toggled = {toggled} navbarContentsFromApp = {navbarContents} appManagementFromApp = {appManagement} settingsFromApp={settings}/>
        <div className='wall-container'>
          <Operations toggleMenu={toggleMenu} eggDataFromApp = {eggData} stockDataFromApp = {stockData} posts={currentPosts} loading={loading} currentPage={currentPage} totalPosts={posts.length} paginate={paginate} postsPerPage={postsPerPage} Posts={posts}/>
        </div>
  
      </div>
    );



}

