import React from "react";
export default ApiCall=async()=>{
    const API_KEY="AIzaSyDHkXoVAssCrE2O5InS-nXr62oJRTXqs0E"
    const res=await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=world&type=video&key=${API_KEY}`
      )
    const result= await res.json();
    return result;
    }