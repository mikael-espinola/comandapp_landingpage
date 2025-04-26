"use client";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState<string>("");

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear().toString();
    setYear(year);
  }, []);

  return (
    <>
      {year && (
        <div className="flex flex-col justify-center items-center my-6 text-xs">
          <p>
            {year} |{" "}
            <a
              className="underline"
              target="_blank"
              href="https://mikaelespinola.vercel.app"
            >
              Mikael Espínola
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
