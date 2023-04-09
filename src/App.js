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
          title="$SCRATCH Token"
          description="$SCRATCH is the utility token for the Galacticats ecosystem"
          buttonText="View ScratchPaper "
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
