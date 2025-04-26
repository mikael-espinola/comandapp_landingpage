import Footer from "@/components/footer/Footer";
import FormContact from "@/components/formContact/FormContact";
import Header from "@/components/header/Header";
import React from "react";

const page = () => {
  return (
    <>
      <div className="layout_spacing flex flex-col items-center w-full">
        <Header />
        <h3 className="text-center text-lg mt-4 font-bold">
          Contate-nos para mais informações
        </h3>
        <FormContact />
      </div>
      <Footer />
    </>
  );
};

export default page;
