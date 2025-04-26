import Link from "next/link";
import React from "react";

const Principal = () => {
  return (
    <main className="flex flex-col justify-center items-center mt-4">
      <p className="bg-[#5d3ea8] p-2 my-1 md:my-2 text-white text-lg md:text-2xl rounded-md text-center w-full">
        O jeito moderno de controlar comandas
      </p>
      <div className="flex flex-col bg-[#5d3ea8] p-2 text-white text-lg md:text-2xl rounded-md text-center w-full">
        <p className="">Esqueça o papel.</p>
        <p>Registre, controle e organize sua lavanderia com facilidade.</p>
      </div>
      <Link href={"/contato"}>
        <p className="rounded-md border p-2 m-2 text-white bg-green-500 hover:bg-green-600 cursor-pointer">
          Solicitar demonstração{" "}
        </p>
      </Link>
    </main>
  );
};

export default Principal;
