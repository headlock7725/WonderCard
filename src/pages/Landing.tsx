function Landing() {
  return (
    <div className="hero bg-base-200 h-full">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="img/hero-cards.webp"
          className="max-w-3xl rounded-lg"
        />
        <div>
          <h1 className="text-5xl font-bold">Play WonderCard</h1>
          <p className="py-6">
            Unleash your inner detective and dive into a world of mystery and wordplay! In WonderCard, your mission is to crack the hidden category and uncover the secret words!
          </p>
          <button className="btn btn-primary">Start Playing</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
