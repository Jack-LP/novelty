const Hero = () => {
  return (
    <div className='flex flex-col col-span-9'>
      <div className='relative h-[350px] flex items-center justify-center rounded-md'>
        <img
          className='absolute h-full w-full object-cover rounded-md'
          src='/img/home-bg.jpg'
          alt=''
        />
        <div className='w-full h-full bg-gradient-to-b from-black/75 to-black/25 absolute rounded-md'></div>
        <div className='z-10 text-center'>
          <h1 className='font-bold text-7xl mb-2'>Welcome to Novelty</h1>
          <h2 className='font-semibold text-3xl text-white/60'>
            Your <span className='italic'>complete</span> online library
          </h2>
        </div>
      </div>
      <p className='text-center bg-charcoal-200 p-5 rounded-md'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
        accusamus aliquid adipisci recusandae quas facere officiis veritatis
        obcaecati consequatur, deleniti magni voluptatem aut, sit repellat sunt
        ipsum? Reiciendis unde quia fugiat quae culpa animi! Et, rerum odit.
        Quod, blanditiis nam. Voluptatibus, totam! Dolor nam alias mollitia
        harum corrupti cumque sit eum aut, similique minima maiores voluptatibus
        aliquid dolores ad sint et ducimus ab odio dolorem deserunt suscipit!
        Culpa a, voluptate alias eos suscipit cum illum excepturi! Sapiente
        autem doloribus voluptate ducimus iure, quo itaque nemo eius suscipit
        nesciunt nihil dicta a, sint voluptatem? Dolorum, blanditiis repudiandae
        suscipit qui quam commodi?
      </p>
    </div>
  );
};

export default Hero;
