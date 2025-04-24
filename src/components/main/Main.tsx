import React from "react";
import Principal from "../principal/Principal";
import Articles from "../articles/Articles";
import Carousel from "../carousel/Carousel";

const Main = () => {
  const title1 = "Chega de papel, planilhas ou anotações soltas";
  const subtitle1 = "Principais problemas";
  const list1 = [
    "Perda de comandas",
    "Falta de controle financeiro",
    "Dificuldade para consultar histórico",
  ];
  const title2 = "Tudo o que você precisa num só lugar";
  const subtitle2 = "Principais soluções";
  const list2 = [
    "Registro rápido de serviços",
    "Relatórios automáticos",
    "Acesso seguro com login",
    "Funciona em qualquer dispositivo",
    "Dados salvos na nuvem",
    "Exportação de comandas",
  ];
  return (
    <div>
      <Principal />
      <Carousel />
      <Articles type="error" title={title1} subtitle={subtitle1} list={list1} />
      <Articles
        type="vantage"
        title={title2}
        subtitle={subtitle2}
        list={list2}
      />
    </div>
  );
};

export default Main;
