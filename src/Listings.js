import React from 'react'
import Post from './Post';
import { useState } from 'react';
import { useEffect } from 'react';

export const Listings = () => {

  const [listings, setListings] = useState([]);

  const fetchListings = () => {
    fetch('http://localhost:5000/')
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
    <div className="h-96 w-full">
      <h1 className="text-white font-bold text-3xl pl-5 ">Available bikes</h1>
      <div className="flex flex-wrap justify-around bg-green-500">
        {console.log(listings)}
        {listings.map((post)=>
          <Post
            id={post.id}
            title={post.title}
            body="random text"
            img = "https://images.unsplash.com/photo-1696384314432-1fe5cd33baab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80"
          />
        )}
      </div>
    </div>
  )
}
