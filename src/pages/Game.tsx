import React from "react";
import Card from "../components/Card";
import content from "../config/content.json";

function Game() {
  const cards = content.topics[0].cards;

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
          />
        ))}
      </div>

      <div className="resultInputs flex flex-row gap-x-5 conte col-start-2 row-start-3 justify-self-center self-center">
        <input
          type="text"
          placeholder="What could that be?"
          className="input input-neutral h-12 w-100"
        />
        <a className="btn btn-flex btn-primary h-12">Wonder!</a>
      </div>
    </div>
  );
}

export default Game;

