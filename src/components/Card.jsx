import { useEffect, useRef, useState } from 'react';

const Card = ({ srcFront, srcBack, name, abilities }) => {
  const imgTag = useRef();

  const [put, setPut] = useState(
    'https://animatorsresourcekit.blog/wp-content/uploads/2020/04/rig-link.png'
  );

  let count = 0;
  const imgs = [];
  imgs[0] =
    'https://animatorsresourcekit.blog/wp-content/uploads/2020/04/rig-link.png'; //srcFront
  imgs[1] =
    'https://animatorsresourcekit.blog/wp-content/uploads/2020/02/agorarigs.jpg'; //srcBack

  function imageChange() {
    imgTag.current.src = imgs[count];
    if (count < imgs.length - 1) {
      count++;

      // return console.log(imgs[count]);
    } else {
      count = 0;
    }
  }
  // console.log(imgTag.current.src);

  useEffect(() => {
    setInterval(() => {
      imageChange();
    }, 1000);
  });

  return (
    <>
      <div className="w-max h-max bg-red-500 p-5 rounded-xl">
        <img ref={imgTag} src={put} alt="" />
        <h1>Name: {name}</h1>

        <div>Abilities: {abilities}</div>
      </div>
    </>
  );
};

export default Card;
