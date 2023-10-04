import { useSpring, animated } from 'react-spring';
import './App.css';
// import pic from './images/download.png'
import circles from './images/rotatingCircles.png'
// import Fade from 'react-reveal/Fade'
import leaf from './images/leaf.png'
// const { useState, useEffect } = React;
import { useState, useEffect } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0)
  const fadeIn = useSpring({

    // opacity set 
    opacity: 1,
    from: { opacity: -10 },

    // config
    config: { duration: 1000 },

  });

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
      window.removeEventListener("scroll", listenToScroll);
  }, [])


  const listenToScroll = () => { // does 
    let heightToHideFrom = 600;
    const winScroll = document.body.scrollTop ||
      document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (

    <div className="App">
      <animated.div style={fadeIn}>
        <div className='navBar'>
          <b><a href="youtube.com" className='link'> Link 1 </a ></b>
          <div className='gapBox'>
          </div>
          <b><a href="youtube.com" className='link'> Link2 </a></b>
        </div>
      </animated.div>

      {/* Got to put something below the navBar.........
        ############################################################################## */}

      <div className='titleFadeDiv'>
        <h1 className="titleFade">
          Welcome to the Sustainability Website
        </h1>
      </div>
      <div className='belowTitle'>
        <h1 className="textFade">
          Ready to start living <i className='whiteToGreen'>green</i>?
        </h1>
      </div>
      <div className="greenLineSlot">
        <div className='greenLineTitle'>
          &nbsp;
        </div>
        <div className="boxBlack">
        </div>
        {/* <div className="boxBlack2">
        </div> */}
      </div>

      <animated.div style={fadeIn}>

        {/* <animated.div style={fadeIn}> */}
        <div className='container1'>
          <div className='textBox1'>
            <h1>
              This is the very big title.
            </h1>
          </div>
          <div className='textBottom1'>
            <p1>
              this is the text below it
              this is the text below it
              this is the text below it
              this is the text below it
              this is the text below it
              this is the text below it
              this is the text below it
              this is the text below it
              this is the text below it
              this is the text below it
              this is the text below it
              this is the text below it
            </p1>
          </div>
          <div className='containerCir'>
            <img src={circles} className='rotCircles' style={{ zIndex: -1 }} />
          </div>
          <div className='container2'>
            <div className='coverBox1'>
            </div>

          </div>
          <div className='greenLine'>
          </div>
          <div className='leaf'>
            <img src={leaf} className='leafP' />
          </div>
        </div>
        {/* THIS IS THE END OF THE CONTAINER ############################### */}
        {/* </animated.div> */}
      </animated.div>
      <div className='buffer'>
        {/* <br></br> */}
      </div>
      <div id="container2">
        <br></br>
        <br></br>
        <br></br>
        <div id="height">
          <b>height: {height} - {isVisible ? "show" : "hide"}</b>
        </div>
        {
          isVisible
          &&
          <div id="hide">
            <animated.div>
              <center>
                <h1>
                  This is the new text
                </h1>
              </center>
            </animated.div>
            <div className='textbox2'>
              <h1>
                This is the text box
              </h1>
            </div>
          </div>
        }

      </div>
    </div >
  );
}

export default App;
