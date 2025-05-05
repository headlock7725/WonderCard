import Card from "../components/Card";


function Game() {
  return (
    //TODO: add a countdown
    < div className="grid grid-cols-3 grid-rows-3 h-full w-full bg-base-200" >
      <div className="topic col-start-2 justify-self-center self-center">
        <h3 className="text-3xl leading-9 font-bold">
          Thema: Wissenschaftler
        </h3>
      </div>

      <div className="cardContainer col-span-3 row-start-2 justify-self-center flex max-w-4/5 h-full gap-x-14 justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className="resultInputs flex flex-row gap-x-5 conte col-start-2 row-start-3 justify-self-center self-center">
        <input type="text" placeholder="Was kann das sein?" className="input input-neutral h-12 w-100" />
        <a className="btn btn-flex btn-primary h-12">Wonder!</a>
      </div>
    </div >
  );
}


export default Game;
