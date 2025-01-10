import React, { Component } from "react";
import "./project.css";

class Mainn extends Component {
  render() {
    return (
      <>
        <center>
          <div class="home-container">
            <div id="background1">
              <h1 style={{ padding: "50px", marginLeft: "80px" }}>
                Welcome to website
              </h1>
            </div>
          </div>
          <div id="background2" style={{display:"flex"}}>
               <img src="https://images.squarespace-cdn.com/content/630f6f1e9677196e0a55d0f9/c39f5ef6-c6db-4f7e-a5e8-50e5db077adb/Chair+.jpg?format=1500w&content-type=image%2Fjpeg" alt="" />
               <div>
               <h1>More About Our Brand</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id temporibus quos ipsam magni, corrupti fugit consequuntur. Repellat harum velit nulla accusantium, blanditiis delectus corrupti facere sunt et eius similique consequuntur!</p>
               </div>
          </div>
        </center>
      </>
    );
  }
}
export default Mainn;
