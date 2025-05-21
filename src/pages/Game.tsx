import { useState } from "react";
import Card from "../components/Card";
import content from "../config/content.json";

function Game() {
  const [cards, setCards] = useState(content.topics[0].cards);
  const [inputValue, setInputValue] = useState("");

  const handleWonderClick = () => {
    const normalize = (str: string) => str.trim().toLowerCase();

    setCards((prevCards) =>
      prevCards.map((card) => {
        const [firstName, lastName] = card.title.split(" ").map(normalize);
        const fullName = `${firstName} ${lastName}`;
        const input = normalize(inputValue);

        const isMatch = !card.shown && (input === firstName || input === lastName || input === fullName);
        return isMatch ? { ...card, shown: true } : card; // if there is a match, return thard with shown set to true
      })
    );

    setInputValue(""); // Clear the input after checking
  };


  return (
    <div className="grid grid-cols-3 grid-rows-3 h-full w-full bg-base-200">
      <div className="topic col-start-2 justify-self-center self-center">
        <h3 className="text-3xl leading-9 font-bold">Topic: Physicists</h3>
      </div>

      <div className="cardContainer col-span-3 row-start-2 justify-self-center flex max-w-4/5 h-full gap-x-14 justify-between">
        {cards.map((card, index) => (
          <Card
            key={index}
            isActive={card.shown}
            title={card.title}
            image={card.image}
            url={card.url}
          />
        ))}
      </div>

      <div className="resultInputs flex flex-row gap-x-5 conte col-start-2 row-start-3 justify-self-center self-center">
        <input
          type="text"
          placeholder="What could that be?"
          className="input input-neutral h-12 w-100"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-flex btn-primary h-12" onClick={handleWonderClick}>
          Wonder!
        </button>
      </div>
    </div>
  );
}

export default Game;

