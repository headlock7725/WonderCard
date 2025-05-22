function SuccessPopup() {
  return (
    <div className="fixed inset-0 bg-green-600/50 flex justify-center flex-col items-center z-50 mask mask-hexagon-2 max-h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative bg-white rounded-full p-8 text-center text-xl">
        You successfully guessed!
      </div>
      <button
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-9"
      >
        Next Topic!
      </button>
    </div>
  );
}

export default SuccessPopup;
