const Sidebar = () => {
  return (
    <section className="bg-very-dark-blue-neutral py-8 px-6 h-fit">
      <h1 className="text-soft-orange-primary">New</h1>
      <div className="border-b py-7">
        <h2 className="text-white hover:text-soft-orange-primary cursor-pointer">
          Hydrogen VS Electric Cars
        </h2>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div className="border-b py-7">
        <h2 className="text-white hover:text-soft-orange-primary cursor-pointer">
          The Downsides of AI Artistry
        </h2>
        <p>
          What are the possible adverse effects of on-demand AI image
          generations?
        </p>
      </div>
      <div className="py-7">
        <h2 className="text-white hover:text-soft-orange-primary cursor-pointer">
          Is VC Funding Drying Up?
        </h2>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </section>
  );
};

export default Sidebar;
