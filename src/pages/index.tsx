import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import LetsGo from "../components/LetsGo";
import Slider from "../components/Slider/Slider";
import TravelTypes from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Head>
        <title> Home | WorldTrip</title>
      </Head>
      <Header/>
      <Banner/>
      <TravelTypes/>
      <LetsGo/>
      <Slider/>
    </>
  )
}
