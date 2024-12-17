import { useEffect, useRef, useState } from 'react';

const Card = ({ srcFront, srcBack, name, abilities }) => {
  const imgTag = useRef();
  const [count, setCount] = useState(0); // Use state for controlling the count
  const imgs = [srcFront, srcBack];

  const imageChange = () => {
    if (imgTag.current) {
      imgTag.current.src = imgs[count];
    }
    setCount((prevCount) => (prevCount < imgs.length - 1 ? prevCount + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      imageChange();
    }, 800);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [count]); // Trigger on count change

  return (
    <div className="w-max h-max p-5 rounded-xl">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            ref={imgTag}
            src={imgs[0]} // Initial image source
            alt="Pokemons"
            className="w-72 h-38 bg-center rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <ol>
            Abilities:{' '}
            {abilities?.map((ele, i) => (
              <li key={i} className="pl-8">
                {i + 1}. {ele.ability.name}
              </li>
            ))}
          </ol>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary mt-5 text-white"
              onClick={() => window.location.reload()}
            >
              Refresh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
