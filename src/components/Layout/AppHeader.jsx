import { Typography } from "antd";
import Navigation from "../Header/Navigation";
import "../css/Header.css";
import HeroSection from "../Header/HeroSection";

export default function AppHeader() {
  return (
    <>
      <Navigation />
      <HeroSection />
    </>
  );
}
