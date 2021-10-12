import { useContext } from "react";
import Gallery from "./components/Gallery";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import { AppContext } from "./context/AppContext";
function App() {
  const {
    isLoading,
    startSlideShow,
    isSlideShowOn,
    currentSlide,
    data,
    stopSlideShow,
  } = useContext(AppContext);

  return (
    <>
      <Navbar
        isSlideShowOn={isSlideShowOn}
        startSlideShow={startSlideShow}
        stopSlideShow={stopSlideShow}
      />
      {isLoading ? <Loader /> : null}
      {data.length === 0 ? null : (
        <Gallery
          data={data}
          startSlideShow={startSlideShow}
          isSlideShowOn={isSlideShowOn}
          currentSlide={currentSlide}
        />
      )}
    </>
  );
}

export default App;
