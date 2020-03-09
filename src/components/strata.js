import React from 'react'
import '../../static/assets/css/stratastyle.css'
import Photo from "../../static/images/about-running.jpg"

const Strata = () => (
<>
  <section id="one">
    <header className="major">
        
        

        
      <h2>Header Title Intro to Blog</h2>
      <h5>Header Subtitle/Tagline</h5>
        <div style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: "1rem 2rem",
                padding: "1rem",
                maxWidth: "80%",
                display: "flex",
                flexDirection: 'column',


            }}>

                <img src={Photo}
                className="photo" 
                width="300px" 
                style={{
                    borderWidth: "10px",
                }}/>
            </div>
    </header>
    <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </section>
  {/* Two */}
 
</>


        )

export default Strata