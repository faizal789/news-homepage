import React from "react";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  function handleClick() {
    setIsOpen((prevValue) => !prevValue);
    setIsVisible(!isVisible);
  }

  return (
    <>
      <div
        className={`${
          isOpen
            ? "fixed top-0 left-0 opacity-70 bg-black w-screen h-full"
            : "hidden"
        }`}
      ></div>
      <header>
        <nav className="flex justify-between items-center">
          <img src="images/logo.svg" alt="logo" />
          <img
            src="images/icon-menu.svg"
            className="hidden max-md:block cursor-pointer"
            alt="menu"
            onClick={handleClick}
          />
          <ul
            className={`flex gap-7 max-md:${isOpen ? "flex" : "hidden"} ${
              isOpen
                ? "block max-md:fixed max-md:top-0 max-md:right-0 max-md:z-50 flex-col bg-off-white-neutral w-2/3 h-screen px-10 font-bold border py-10"
                : ""
            } `}
          >
            <img
              src="images/icon-menu-close.svg"
              width={50}
              onClick={handleClick}
              className={`hidden cursor-pointer max-md:${
                isOpen ? "block ml-auto mb-20" : ""
              }`}
              alt=""
            />
            <li className="hover:text-soft-red-primary cursor-pointer">Home</li>
            <li className="hover:text-soft-red-primary cursor-pointer">New</li>
            <li className="hover:text-soft-red-primary cursor-pointer">
              Popular
            </li>
            <li className="hover:text-soft-red-primary cursor-pointer">
              Trending
            </li>
            <li className="hover:text-soft-red-primary cursor-pointer">
              Categories
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
