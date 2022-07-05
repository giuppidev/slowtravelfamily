import Blog from "../components/home/blog";
import Hero from "../components/home/hero";
import Map from "../components/home/map";
import Newsletter from "../components/home/newletter";
import Steps from "../components/home/steps";

function Home() {
  return (
    <div>
      <Hero />
      <Map />
      <Steps />
      <Blog />
      <Newsletter />
    </div>
  );
}

export default Home;
