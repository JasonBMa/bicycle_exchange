import React from 'react'
import Post from './Post';
import { useState } from 'react';
import { useEffect } from 'react';

export const Listings = () => {

  const [listings, setListings] = useState([]);

  const fetchListings = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setListings(data);
      });
  }

  useEffect(()=>{
    fetchListings()
  }, []);

  const addListings = (title, body, img) => {

  }

  const deleteListing = (id) => {

  }

  return (
    <div>
      <h1>Available bikes</h1>
      <div>
        {listings.map((post)=>
          <Post
            title={post.title}
            img = "https://images.unsplash.com/photo-1696384314432-1fe5cd33baab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80"
          />
        )}
      </div>
    </div>
  )
}
