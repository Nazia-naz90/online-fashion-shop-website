import  Navbar  from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import NewArival from "./components/new-arival";
import Paydaynow from "./components/paydaynow";
import YoungsFavorite from "./components/youngsFavorite";
import Downloadapp from "./components/downloadapp";
import JoinShopping from "./components/joinShopping";
export default function Home() {
  return (

<div>
  <Navbar/>
  <Hero/>
  <NewArival/>
  <Paydaynow/>
  <YoungsFavorite/>
  <Downloadapp/>
  <JoinShopping/>
  {/*File base routing system*/}
</div>

  );
}
