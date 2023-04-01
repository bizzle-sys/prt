import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import "./Style.css";
import { Hero } from "./components/Hero";
import { Socials } from "./components/Socials";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Socials />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
