const Item = ({ isOpen, setIsOpen, item }) => {
  return (
    <div className="border border-1 p-2 border-black rounded-md w-full">
      <div
        className="font-bold cursor-pointer hover:text-indigo-600 hover:italic flex justify-between"
        onClick={() =>  { 
          isOpen === item ? setIsOpen(0) : setIsOpen(item)
        }

        }
      >
        <button>How do I?</button>
        <div className="button__close__open">
          {isOpen === item ? <p>x</p> : <p>o</p>}
        </div>
      </div>
      {isOpen === item && (
        <p>
          You do it with like this blah Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Soluta laborum a placeat debitis aspernatur, ipsa ut
          corporis tempore quibusdam recusandae.
        </p>
      )}
    </div>
  );
};

export default Item;
