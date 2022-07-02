import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png"
          height={50}
          width={150}
          alt="Google Logo"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-auto flex-grow justify-between">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
            onClick={() => {
              searchInputRef.current.value = "";
            }}
          />

          <MicrophoneIcon className="mr-3 h-6 cursor-pointer hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />

          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>

        <Avatar
          className="ml-10"
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/800px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg"
        />
      </div>

      {/* Header Option Components */}
      <HeaderOptions/>
    </header>
  );
}

export default Header;
