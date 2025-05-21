
function ActiveCard({ title, image, url }: { title: string; image: string; url: string }) {
  return (
    <a href={url} target="_blank" className="flex h-full w-full flex-col justify-center items-center gap-6">
      <img src={image} className="aspect-square max-w-32" alt={title} />
      <p className="text-lg leading-7 font-semibold">{title}</p>
    </a>
  );
}

function InactiveCard() {
  return (
    <img
      src="img/playing-card.webp"
      alt="Playing Card"
      className="w-full h-full object-center"
    />
  );
}

function Card({
  isActive = false,
  title = "",
  image = "",
  url = "",
}: {
  isActive?: boolean;
  title?: string;
  image?: string;
  url?: string;
}) {
  const content = isActive ? (
    <ActiveCard title={title} image={image} url={url} />
  ) : (
    <InactiveCard />
  );

  return (
    <div className="shadow-gray-500 shadow-md white aspect-[24/36] rounded-xl max-w-64 max-h-full">
      {content}
    </div>
  );
}

export default Card;

