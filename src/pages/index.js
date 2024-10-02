import React from "react";
import Head from "next/head"; // Import the Head component for the browser tab title
import Lottie from "react-lottie";
import Logo from "../assets/Logo200x80.jpg";
import Image from "next/image";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: null,
    path: "/web-address-registration.json",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Head>
        <title>Urban Spaces Realty</title>
        <meta
          name="description"
          content="Discover your perfect home with Urban Spaces Realty. Offering a wide range of properties for sale and rent. Visit us soon as our website undergoes enhancements to better serve you!"
        />
      </Head>
      <div className="grid min-h-screen grid-cols-1 grid-rows-[auto,1fr,auto] bg-white">
        <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
          <a>
            <span className="sr-only">Urban Spaces Realty</span>
            <Image
              alt="Urban Spaces Realty Logo"
              src={Logo}
              width={250}
              height={80}
              className="h-20 w-auto sm:h-20"
            />
          </a>
        </header>
        <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
          <div className="max-w-lg">
            <h1 className="mt-4 mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Welcome to <br /> Urban Spaces Realty
            </h1>
            <p className="text-2xl font-semibold leading-10 text-[#a50735]">
              Website Under Construction
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We will be back online in no time!
            </p>
            <div className="mt-10">
              <a
                href="https://www.property24.com/estate-agents/rawson-properties-dainfern/peta-ann-dumbleton/460346"
                className="cursor-pointer font-semibold leading-7 text-[#a50735] px-2 py-1 rounded transition-all duration-200 ease-out shadow-md hover:shadow-xl hover:scale-105 text-xs md:text-sm lg:text-base"
                style={{
                  backgroundColor: "#ffffff",
                  transition:
                    "box-shadow 0.2s ease-out, transform 0.2s ease-out",
                }}
              >
                Click here to view our current listings on Property 24
              </a>
            </div>
          </div>
        </main>
        <div className="relative lg:col-start-2 lg:row-start-1 lg:row-end-3 mb-6">
          <Lottie
            options={defaultOptions}
            height="40vw" // 50% of the viewport width
            width="50vw" // 50% of the viewport width
          />
        </div>
        <footer className="w-full lg:col-span-2 lg:col-start-1 lg:row-start-3">
          <div className="border-t border-gray-100 bg-gray-50 py-10">
            <nav className="mx-auto flex w-full max-w-7xl flex-col items-start gap-x-4 gap-y-2 px-6 text-sm leading-7 text-gray-600 sm:flex-row sm:items-center lg:px-8">
              <a>Contact Peta-Ann:</a>
              <a href="tel:+788021022">+78 802 1022</a>
              <a href="mailto:peta-ann@urbanspacesrealty.com">
                peta-ann@urbanspacesrealty.com
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
