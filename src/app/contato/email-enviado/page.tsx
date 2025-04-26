import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="layout_spacing">
      <Header />
      <div className="text-center flex flex-col items-center my-4">
        <h1 className="text-2xl">O e-mail foi enviado.</h1>
        <p>Logo receberá um contato de retorno.</p>
        <p>Obrigado pelo interesse em nossos serviços.</p>
        <Link
          href={"/"}
          className="bg-[#5d3ea8] border w-60 rounded-md text-white p-1 my-6"
        >
          Voltar para a tela inicial
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default page;
