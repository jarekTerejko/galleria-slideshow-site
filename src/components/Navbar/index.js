import { ContainerEl } from "../Container/ContainerEl";
import {
  NabarSlideShowBtn,
  NavbarInnerWrapper,
  NavbarLink,
  NavbarLogo,
  NavbarWrapper,
} from "./NavbarElements";
import Logo from "../../images/logo.svg";

const Navbar = ({ isSlideShowOn, startSlideShow, stopSlideShow }) => {

  const renderBtn = () => {
    if (isSlideShowOn) {
      return (
        <NabarSlideShowBtn onClick={() => stopSlideShow()}>
          stop slideshow
        </NabarSlideShowBtn>
      );
    } else {
      return (
        <NabarSlideShowBtn onClick={() => startSlideShow(0)}>
          start slideshow
        </NabarSlideShowBtn>
      );
    }
  };

  return (
    <NavbarWrapper>
      <ContainerEl style={{ height: "100%" }}>
        <NavbarInnerWrapper>
          <NavbarLink href="/">
            <NavbarLogo src={Logo} alt="galleria logo" />
          </NavbarLink>
          {renderBtn()}
        </NavbarInnerWrapper>
      </ContainerEl>
    </NavbarWrapper>
  );
};

export default Navbar;
