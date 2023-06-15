import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsCards from "@/components/NewsCards";
import WelcomeContainer from "@/components/WelcomeContainer";

export default function Home() {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col pt-5 px-[100px] pb-0 box-border items-center justify-center gap-[200px] md:gap-[100px] md:pl-[50px] md:pr-[50px] md:box-border sm:pl-[30px] sm:pr-[30px] sm:box-border mq320:gap-[50px] mq320:pl-5 mq320:pr-5 mq320:box-border">
      <Navbar />
      <WelcomeContainer />
      <NewsCards />
      <Footer />
    </div>
  );
}
