"use client";
import React, { useState } from "react";
import Link from "next/link";

const SignUp = () => {
  const buttons = [
    { img: "google-logo.webp", text: "Continue with Google" },
    { img: "github-logo.webp", text: "Continue with Github" },
    { img: "apple-logo.webp", text: "Continue with Apple" },
    { img: "mail.svg", text: "Continue with Email" },
  ];

  const [option, setOption] = useState(1);
  return (
    <div className="bg-[url(/Bg-photos/Sign-up-2.png)] bg-cover bg-center h-screen flex justify-center items-center">
      <div className="container bg-(--darker) rounded-2xl p-10 max-w-110">
        <div className="toggle  border-2 border-(--secondaryBlack) rounded-full flex justify-center items-center gap-10 text-[20px] max-w-50 px-2 py-1 mx-auto mb-10">
          <div
            style={{ marginLeft: option === 1 ? "-100px" : "100px" }}
            className="slider absolute bg-[#9B9B9B] w-25 h-10 rounded-full transition-all duration-400"
          ></div>
          <button
            onClick={() => setOption(1)}
            style={{ color: option === 1 ? "black" : "white" }}
            className="z-1 transition-all duration-400"
          >
            Sign Up
          </button>
          <button
            onClick={() => setOption(2)}
            style={{ color: option === 2 ? "black" : "white" }}
            className="z-1 transition-all duration-400"
          >
            Log In
          </button>
        </div>

        {buttons.map((button, index) => (
          <div key={index}>
            <Link href="/Explore">
              <button className="flex justify-center items-center gap-3 border-2 border-(--secondaryBlack) rounded-full p-2 px-8 m-4 mx-auto cursor-pointer hover:bg-(--primaryBlack)">
                <img src={`Icons/${button.img}`} alt={button.img} width={30} />
                Continue with Google
              </button>
            </Link>

            <p
              className="text-center"
              style={{ display: index === 2 ? "block" : "none" }}
            >
              Or
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignUp;
