import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/section/Hero";
import NewNews from "@/components/section/NewNews";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main className="bg-white text-black">
        <Hero></Hero>
        <NewNews></NewNews>
      </main>
      <Footer></Footer>
    </>
  );
}
