import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import "./Style.css";
import { Hero } from "./components/Hero";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { Socials } from "./components/Socials";
import { Skills } from "./components/Skills";
function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Socials />
        <Skills />
      </Layout>
    </>
  );
}

export default App;
