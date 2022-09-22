import './App.css';

// import img1 from "./assets/images/1.jpg"
// import img2 from "./assets/images/2.jpg"
// import img3 from "./assets/images/3.jpg"
// import img4 from "./assets/images/4.jpg"
// import img5 from "./assets/images/5.jpg"
// import img6 from "./assets/images/6.jpg"
// import img7 from "./assets/images/7.jpg"
// import img8 from "./assets/images/8.jpg"
// import img9 from "./assets/images/9.jpg"

import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import {Widget} from "./components/AccountCard";

function App() {
  return (
    <div className="App">

      <h1>Widget slider</h1>

      <div className="splideBox">

        <Splide aria-label="My Favorite Images"
                hasTrack={false}
                options={{
                  rewind: true,
                  pagination: false,
                  gap: '1rem',
                  autoWidth: true,
                  focus: 'center',
                }}>
          <SplideTrack>
            <SplideSlide>
                <Widget/>
            </SplideSlide>
            <SplideSlide>
                <Widget/>
            </SplideSlide>
            <SplideSlide>
              <Widget/>
            </SplideSlide>
            <SplideSlide>
              <Widget/>
            </SplideSlide>
            <SplideSlide>
              <Widget/>
            </SplideSlide>
          </SplideTrack>
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              <span className="chevron left"></span>
            </button>
            <button className="splide__arrow splide__arrow--next">
              <span className="chevron right"></span>
            </button>
          </div>
        </Splide>
      </div>
    </div>
  );
}

export default App;
