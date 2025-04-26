"use client";
import React, { FormEvent, useState } from "react";
import Input from "../input/Input";
import Link from "next/link";

const FormContact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sendingSuccessful, setSendingSuccessful] = useState(false);

  const clearSpace = () => {
    setCompanyName("");
    setEmail("");
    setName("");
    setPhone("");
    setMessage("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const data = { name: name, email: email, companyName: companyName,phone: phone,message: message,}; // TODO: Usar 'data' na função de envio de email

    clearSpace();

    setSendingSuccessful(true);
    setTimeout(() => {
      setSendingSuccessful(false);
    }, 3500);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-md p-2 w-full md:w-80 lg:w-100"
    >
      <Input
        id="name"
        placeholder="Seu nome"
        hasLabel
        label="Nome"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <Input
        id="empresa"
        placeholder="Nome da empresa"
        hasLabel
        label="Empresa"
        type="text"
        value={companyName}
        onChange={(event) => setCompanyName(event.target.value)}
        required
      />
      <Input
        id="email"
        placeholder="E-mail para contato"
        hasLabel
        label="E-mail"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <Input
        id="phone"
        placeholder="(XX) XXXXX-XXXX"
        hasLabel
        label="Whatsapp"
        type="tel"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        required
      />
      <p className="my-1">Como podemos te ajudar?</p>
      <textarea
        name="resume"
        id="textResume"
        className="w-full border min-h-35 p-2 text-sm my-1 rounded-md outline-offset-5"
        onChange={(event) => setMessage(event.target.value)}
        required
        value={message}
      ></textarea>

      <div className="flex justify-center gap-2 ">
        <button
          type="submit"
          className={`bg-[#2b1461] text-white border rounded-md py-1 px-4 cursor-pointer ${
            sendingSuccessful && `bg-green-700`
          } `}
        >
          {sendingSuccessful ? "Enviado" : "Enviar"}
        </button>
        <Link href={"/"}>
          <p className="bg-[#5d3ea8] text-white border rounded-md py-1 px-4 cursor-pointer">
            Voltar
          </p>
        </Link>
      </div>
    </form>
  );
};

export default FormContact;
