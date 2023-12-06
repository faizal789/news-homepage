const Topnews = () => {
  return (
    <section className="flex max-md:flex-col justify-between gap-8">
      <div className="flex max-lg:flex-col max-md:flex-row max-md:items-center items-start gap-6">
        <img
          src="images/image-retro-pcs.jpg"
          width={120}
          alt="image retro pcs"
          className="max-lg:w-full max-md:w-fit max-md:h-fit max-lg:h-60 max-sm:w-36"
        />
        <div>
          <h1 className="text-grayish-blue-neutral">01</h1>
          <h2 className="hover:text-soft-red-primary cursor-pointer">
            Reviving Retro PCs
          </h2>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="flex max-lg:flex-col max-md:flex-row max-md:items-center items-start gap-6">
        <img
          src="images/image-top-laptops.jpg"
          width={120}
          alt="image retro pcs"
          className="max-lg:w-full max-md:w-fit max-md:h-fit max-lg:h-60 max-sm:w-36"
        />
        <div>
          <h1 className="text-grayish-blue-neutral">02</h1>
          <h2 className="hover:text-soft-red-primary cursor-pointer">
            Top 10 Laptops of 2022
          </h2>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="flex max-lg:flex-col max-md:flex-row max-md:items-center items-start gap-6">
        <img
          src="images/image-gaming-growth.jpg"
          width={120}
          alt="image retro pcs"
          className="max-lg:w-full max-md:w-fit max-md:h-fit max-lg:h-60 max-sm:w-36"
        />
        <div>
          <h1 className="text-grayish-blue-neutral">03</h1>
          <h2 className="hover:text-soft-red-primary cursor-pointer">
            The Growth of Gaming
          </h2>
          <p>How the pandemic has sparked fresh opportunities</p>
        </div>
      </div>
    </section>
  );
};

export default Topnews;
