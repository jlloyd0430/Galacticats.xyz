import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";

import Navigation from "./components/Navigation";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Roadmap from "./components/sections/Roadmap";
import Scratch from "./components/sections/Scratch";
import Team from "./components/sections/Team";
import Faq from "./components/sections/Faq";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Scratch
          title="Yarn.Solutions"
          description="Yarn.solutions is a decentralized freelance marketplace aimed to connect and empower the people, projects, and brands of Web3."
          buttonOnClick={() => alert("Button clicked!")}
          buttonLink="https://usdscratch-gitbook.gitbook.io/scratch-coin-usdscratch/"
        />
        <Team />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
