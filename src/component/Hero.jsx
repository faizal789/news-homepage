const Hero = () => {
  return (
    <section className="flex flex-col gap-7">
      <img src="images/image-web-3-desktop.jpg" alt="image web 3" />
      <div className="flex max-md:flex-col max-md:gap-6 justify-between gap-14">
        <h1 className="text-6xl max-sm:text-5xl max-sm:w-11/12">The Bright Future of Web 3.0</h1>
        <div className="flex flex-col gap-10">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="text-white bg-soft-red-primary text-lg py-2 px-8 w-60 hover:bg-very-dark-blue-neutral">READ MORE</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
