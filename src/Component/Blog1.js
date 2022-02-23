import React from 'react'
import '../App.css';

export default function Blog1() {
  return (
    <div className="blog">
        <div className="blog1">
            <div className="square">
                <div className="text">
                  <h1>Go Near</h1>
                </div>
                <div className="para">
                  <p>plan a different kind of getaway to uncover <br></br> hidden gems near you.</p>
                  <button>Explore Nearby stays</button>
                </div>  
            </div>
            <div className="slide">
                <img className="slide1" src={require('../images/slide.jpg')} alt="img"></img>
                {/* <p>Hello</p> */}
              </div>
        </div>
    </div>
  )
}
