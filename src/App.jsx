import { useState } from "react";
import { useEffect } from "react"

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  useEffect(() => {
  const createFloatingElements = () => {
    const container = document.querySelector('.floating-elements');
    if (!container) return;

    // Cuori
    const hearts = ['❤️', '💖', '💝', '💗', '💓'];
    hearts.forEach(heart => {
      const div = document.createElement('div');
      div.className = 'heart';
      div.innerHTML = heart;
      div.style.left = Math.random() * 100 + 'vw';
      div.style.animationDelay = Math.random() * 5 + 's';
      div.style.animationDuration = 10 + Math.random() * 20 + 's';
      container.appendChild(div);
    });

    // Orsetti
    const bears = ['🧸', '🐻'];
    bears.forEach(bear => {
      const div = document.createElement('div');
      div.className = 'bear';
      div.innerHTML = bear;
      div.style.left = Math.random() * 100 + 'vw';
      div.style.animationDelay = Math.random() * 5 + 's';
      div.style.animationDuration = 10 + Math.random() * 20 + 's';
      container.appendChild(div);
    });
  };

  createFloatingElements();
  // Crea nuovi ogni 5s per effetto continuo
  const interval = setInterval(createFloatingElements, 5000);
  return () => clearInterval(interval);
}, []);
  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Oh didn't expect this, u really sure?",
      "Think again!",
      "Last chance!",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Silly this is not the yes button",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };
/* il coso per l'hover */
  useEffect(() => {
  const handleMouseMove = (e) => {
    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';
    heart.style.fontSize = '20px';
    heart.style.pointerEvents = 'none';
    heart.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.style.transition = 'all 1s';
      heart.style.opacity = '0';
      heart.style.transform = 'translate(-50%, -150%) scale(1.5)';
    }, 10);

    setTimeout(() => heart.remove(), 1500);
  };

  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);
/* il coso per l'hover */
  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Hehehehe NOICE!!!!
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Hey Sweetie....Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {

};
