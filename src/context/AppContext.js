import { createContext, useEffect, useState } from "react";
import useFetch from "../useFetch";
import Macy from "macy";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const { data, isLoading } = useFetch("../data.json");

  const [isSlideShowOn, setIsSlideShowOn] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(null);

  const startSlideShow = (index) => {
    setIsSlideShowOn(true);
    setCurrentSlide(index);
  };

  const stopSlideShow = () => {
    setIsSlideShowOn(false);
    setCurrentSlide(null);
  };

  useEffect(() => {
    if (data.length) {
      Macy({
        container: ".macy-container",
        trueOrder: true,
        mobileFirst: true,
        waitForImages: true,
        margin: 40,
        // columns: 1,
        breakAt: {
          1200: 4,
          940: 3,
          720: 2,
          375: 1,
        },
      });
    }

    // return () => {
    //   cleanup
    // }
  }, [data]);

  return (
    <AppContext.Provider
      value={{
        isSlideShowOn,
        isLoading,
        startSlideShow,
        stopSlideShow,
        data,
        currentSlide,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
