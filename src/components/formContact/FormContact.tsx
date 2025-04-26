"use client";
import React, { FormEvent, useState } from "react";
import Input from "../input/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FormContact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sendingSuccessful, setSendingSuccessful] = useState(false);
  const router = useRouter();

  const clearSpace = () => {
    setCompanyName("");
    setEmail("");
    setName("");
    setPhone("");
    setMessage("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append(
      "service_id",
      `${process.env.NEXT_PUBLIC_SERVICE_EMAIL_ID}`
    );
    formData.append(
      "template_id",
      `${process.env.NEXT_PUBLIC_TEMPLATE_EMAIL_ID}`
    );
    formData.append("user_id", `${process.env.NEXT_PUBLIC_PUBLIC_EMAIL_KEY}`);

    fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(`Erro na requisição: ${response.status} - ${text}`);
          });
        }
        return response.text();
      })
      .then((data) => {
        if (data === "OK") {
          router.push("/contato/email-enviado");
        }
      });

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
        name="name"
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
        name="companyName"
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
        name="email"
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
        name="phone"
      />
      <div className="flex flex-col">
        <label htmlFor="textResume" className="my-1">
          Como podemos te ajudar?
        </label>
        <textarea
          name="message"
          id="textResume"
          className="w-full border min-h-35 p-2 text-sm my-1 rounded-md outline-offset-5 "
          onChange={(event) => setMessage(event.target.value)}
          required
          value={message}
        ></textarea>
      </div>
      <div className="flex justify-center gap-2 my-2 ">
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
