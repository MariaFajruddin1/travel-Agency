import Image from "next/image";
import Header from "./components/header";
import Services from "./components/services";
import Place from "./components/place";
import About from "./components/about";
import Package from "./components/packages";
import Client from "./components/client";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <Place/>
      <About/>
      <Package/>
      <Client/>
      <Footer/>
    </>
  );
}
