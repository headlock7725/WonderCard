
function ActiveCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="flex h-full w-full flex-col justify-center items-center gap-6">
      <img src={image} className="aspect-square max-w-32" alt={title} />
      <p className="text-lg leading-7 font-semibold">{title}</p>
    </div>
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
}: {
  isActive?: boolean;
  title?: string;
  image?: string;
}) {
  const content = isActive ? (
    <ActiveCard title={title} image={image} />
  ) : (
    <InactiveCard />
  );

  return (
    <div className="shadow-gray-500 shadow-md white aspect-[24/36] rounded-xl max-w-64">
      {content}
    </div>
  );
}

export default Card;

