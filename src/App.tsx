import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompetitionsEvents from "./components/CompetitionsEvents";
import UserJourney from "./components/UserJourney";
import WhatIsBotLeague from "./components/WhatIsBotLeague";
import Categories from "./components/Categories";
import Disciplines from "./components/Disciplines";
import WhyRegister from "./components/WhyRegister";
import JoinEcosystem from "./components/JoinEcosystem";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-void">
      <Navbar />
      <main>
        <Hero />
        <CompetitionsEvents />
        <UserJourney />
        <WhatIsBotLeague />
        <Categories />
        <Disciplines />
        <WhyRegister />
        <JoinEcosystem />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
