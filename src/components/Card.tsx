
function ActiveCard() {
  return (
    <div className="flex h-full w-full flex-col justify-center items-center gap-6">
      <img src="img/sets/physicists/Einstein.png" className="aspect-square max-w-32" />
      <p className="text-lg leading-7 font-semibold">Albert Einstein</p>
    </div>
  );
}


function InactiveCard() {
  return (
    <img src="img/playing-card.webp" alt="Playing Card" className="w-full h-full object-center" />
  );
}

function Card({ isActive = false }) {
  let content = null;
  if (isActive) {
    content = <ActiveCard />
  } else {
    content = <InactiveCard />
  }

  return (
    <div className="shadow-gray-500 shadow-md white aspect-[24/36] rounded-xl max-w-64">
      {content}
    </div>
  );
}

export default Card;
