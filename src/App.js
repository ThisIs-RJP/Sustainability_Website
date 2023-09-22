import { useSpring, animated } from 'react-spring';
import './App.css';
// import pic from './images/download.png'
import circles from './images/rotatingCircles.png'

function App() {
  // const props = useSpring({ opacity: 1, from: { opacity: -10} });
  const fadeIn = useSpring({

    // opacity set 
    opacity: 1,
    from: { opacity: -10 },

    // config
    config: { duration: 1000 },

  });

  return (
    <div className="App">
      <div className='navBar'>
        <b><a href="youtube.com" className='link'> Link 1 </a ></b>
        <div className='gapBox'>
        </div>
        <b><a href="youtube.com" className='link'> Link2 </a></b>

      </div>
      <animated.div style={fadeIn}>
        <div className='container1'>
          <div className='textBox1'>
            <h1>
              This is the very big title
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

        </div>
      </animated.div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <div className='circle1'>
          <img src=
        </div> */}
    </div >
  );
}

export default App;
