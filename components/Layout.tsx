import React from "react";
import Ask from "./Ask";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="select-none">
      <Header />
      {children}
      <Ask />
      <Footer />
    </div>
  )
}
