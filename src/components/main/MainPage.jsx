import React, { useState,useEffect } from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import blogImage from '../../images/blog4.png';
import Card from './Card';

import { Grid } from '@mui/material';

import './mainPage.css'
import axios from '../../Api/Axios';

const MainPage = () => {

  const [blogList,setBlogList] = useState([]);
  async function fetchBlogs() {
    try {
      const response = await axios.get('blog/all-blogs');
      console.log(response.data);
      setBlogList(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {fetchBlogs();},[]);

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <img src={blogImage} alt="blog"/>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
      </div>
      <Grid container spacing={2} justifyContent="center" id='card-container'>
        {blogList.map(blog => (
          <Grid key={blog.id} id="card-item">
            <Card title={blog.title} description={blog.article} imageUrl={blog.imageName} publishDate={blog.createdAt}/>
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4}>

        </Grid>
      </Grid>
    </div>
  )
}

export default MainPage
