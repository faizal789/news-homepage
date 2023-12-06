import Header from "./component/Header";
import Hero from "./component/Hero";
import Sidebar from "./component/Sidebar";
import Topnews from "./component/Topnews";

function App() {
  return (
    <main className="bg-off-white-neutral h-full py-16 px-28 max-sm:py-5 max-sm:px-5 flex flex-col gap-16">
      <Header></Header>
      <div className="flex gap-10 max-lg:flex-col">
        <Hero></Hero>
        <Sidebar></Sidebar>
      </div>
      <Topnews></Topnews>
    </main>
  );
}

export default App;
