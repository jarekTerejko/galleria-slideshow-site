import { createContext, useEffect, useState } from "react";
import useFetch from "../useFetch";
import Macy from "macy";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const { data, isLoading } = useFetch("../data.json");
  const [isSlideShowOn, setIsSlideShowOn] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModal, setIsModal] = useState(false);

  const startSlideShow = (index) => {
    setIsSlideShowOn(true);
    setCurrentSlide(index);
  };

  const stopSlideShow = () => {
    setIsSlideShowOn(false);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };
  const showModal = () => {
    setIsModal(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setIsModal(false);
    document.body.style.overflow = "initial";
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
        nextSlide,
        prevSlide,
        setCurrentSlide,
        data,
        currentSlide,
        isModal,
        showModal,
        closeModal,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
