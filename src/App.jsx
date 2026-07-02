import React, { lazy, Suspense } from "react";
import "./assets/css/index.css";
import Header from "./pages/Header/Header";
import { Route, Routes } from "react-router-dom";

// Lazy load all pages
const Hero = lazy(() => import("./pages/Hero/Hero"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Education = lazy(() => import("./pages/Education/Education"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Experience = lazy(() => import("./pages/Experience/Experience"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-dark-bg flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
  </div>
);

export default function App() {
  return (
    <>
      {/* Accessibility: Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded"
      >
        Skip to main content
      </a>
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Suspense>
    </>
  );
}
