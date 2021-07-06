import React from 'react'
import { db } from "./firebase";
import clg from '../Components/images/clg.png'
import { Link } from 'react-router';
import Search from './search';



export default function MainPage() {

    db.collection("collages").get()
    .then((snap) => {
       if(!snap.empty) {
          // work with documents
          console.log("collection");
       } else {
         // Create some documents
         console.log(" there is no collection");

       }
    })

    return (
        <div className='container'>
            <img className='icon' href={clg}/>
            <img className='img' src="https://images.unsplash.com/photo-1471958680802-1345a694ba6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80"/>
            <h1 className="main-head">A better way to choose a Collage</h1>
            
        </div>
    )
}
