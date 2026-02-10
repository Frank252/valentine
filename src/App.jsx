import { useState, useEffect, useRef } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";
import photo1 from "./assets/Photo (1).jpeg";
import photo2 from "./assets/Photo (2).jpeg";
import photo3 from "./assets/Photo (3).jpeg";
import photo4 from "./assets/Photo (4).jpeg";
import photo5 from "./assets/Photo (5).jpeg";
import photo6 from "./assets/Photo (6).jpeg";
import photo7 from "./assets/Photo (7).jpeg";
import photo8 from "./assets/Photo (8).jpeg";
import photo9 from "./assets/Photo (9).jpeg";
import photo10 from "./assets/Photo (10).jpeg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLastThing, setShowLastThing] = useState(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [typedText, setTypedText] = useState("");

  const fullLetter = ` Dear Divine,

even if the origins of Valentine's Day are a little… questionable, it’s as good a reason as any to celebrate us. I know our relationship has been a lil rocky, but I'm sure that one day we’ll look back and laugh at everything we’ve been through

I just want to say in a confusing way that I love you and I want to spend my time with you. Every messy, silly and wonderful moment.

I can’t wait to celebrate Valentine’s Day with you (and all the many more to come 😘). Even if I have no clue what we’ll end up doing, I know it’ll be perfect… because we’ll figure it out together.

Your love F❤️, 
(10/02/2026)

P.S. Scroll down for our memories… 📸✨`;

  const audioRef = useRef(null);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  /* Autoplay musica */
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => console.log("Autoplay bloccato dal browser"));
    }
  }, []);

  /* Floating emojis */
  useEffect(() => {
    const createFloatingElements = () => {
      const container = document.querySelector(".floating-elements");
      if (!container) return;

      const hearts = ["✨", "💖", "💝", "💗", "🌸"];
      hearts.forEach((heart) => {
        const div = document.createElement("div");
        div.className = "heart";
        div.innerHTML = heart;
        div.style.left = Math.random() * 100 + "vw";
        div.style.animationDelay = Math.random() * 5 + "s";
        div.style.animationDuration = 10 + Math.random() * 20 + "s";
        container.appendChild(div);
      });

      const bears = ["🧸", "🐻", "🌻"];
      bears.forEach((bear) => {
        const div = document.createElement("div");
        div.className = "bear";
        div.innerHTML = bear;
        div.style.left = Math.random() * 100 + "vw";
        div.style.animationDelay = Math.random() * 5 + "s";
        div.style.animationDuration = 10 + Math.random() * 20 + "s";
        container.appendChild(div);
      });
    };

    createFloatingElements();
    const interval = setInterval(createFloatingElements, 5000);
    return () => clearInterval(interval);
  }, []);

  /* Letter typing effect */
  useEffect(() => {
    if (isEnvelopeOpen && typedText.length === 0) {
      let i = 0;
      const interval = setInterval(() => {
        setTypedText((prev) => prev + fullLetter[i]);
        i++;
        if (i >= fullLetter.length) clearInterval(interval);
      }, 60);
      return () => clearInterval(interval);
    }
  }, [isEnvelopeOpen]);

  /* Heart trail mouse */
  useEffect(() => {
    const handleMouseMove = (e) => {
      const heart = document.createElement("div");
      heart.textContent = "❤️";
      heart.style.position = "fixed";
      heart.style.left = e.pageX + "px";
      heart.style.top = e.pageY + "px";
      heart.style.fontSize = "20px";
      heart.style.pointerEvents = "none";
      heart.style.zIndex = "9999";
      heart.style.transform = "translate(-50%, -50%)";
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.style.transition = "all 1s";
        heart.style.opacity = "0";
        heart.style.transform = "translate(-50%, -150%) scale(1.5)";
      }, 10);

      setTimeout(() => heart.remove(), 1500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
      "Plsss? :( You're breaking my heart",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <>
      <div className="floating-elements"></div>

      <audio ref={audioRef} loop>
        <source src="/Romantic.mp3" type="audio/mpeg" />
      </audio>

      <div className="overflow-hidden flex flex-col items-center justify-center pt-4 min-h-screen bg-transparent text-black selection:bg-rose-600 selection:text-white">
        {yesPressed ? (
          <>
            <img
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              className="h-[230px] rounded-lg shadow-lg mx-auto"
              alt="Bear kiss"
            />

            <div className="text-4xl md:text-6xl font-bold my-4 text-black text-center">
              Hehehehe NOICE!!!!
            </div>

            {!showLastThing && (
              <button
                onClick={() => setShowLastThing(true)}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full mt-8 shadow-xl transition-all duration-300 text-lg"
              >
                One last thing... 💌
              </button>
            )}

            {showLastThing && (
              <div className="w-full max-w-4xl mx-auto mt-10 text-center px-4">
                <div
                  onClick={() => setIsEnvelopeOpen(true)}
                  className={`cursor-pointer bg-rose-200 hover:bg-rose-300 text-rose-800 font-bold py-4 px-6 rounded-xl shadow-lg mb-6 transition-all ${
                    isEnvelopeOpen ? "scale-105" : ""
                  }`}
                >
                  {isEnvelopeOpen
                    ? "Open letter ❤️"
                    : "Click to open a small letter 💌"}
                </div>

                {isEnvelopeOpen && (
                  <>
                    <p className="whitespace-pre-line text-lg md:text-xl font-medium text-gray-800 mb-10">
                      {typedText}
                      {typedText.length < fullLetter.length && (
                        <span className="animate-pulse">|</span>
                      )}
                    </p>

                    <div className="overflow-x-hidden w-full">
                      <div className="flex gap-6 animate-scroll whitespace-nowrap">
                        {[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10].map(
                          (p, idx) => (
                            <img
                              key={idx}
                              src={p}
                              className="h-48 rounded-xl shadow-lg"
                              alt={`Ricordo ${idx + 1}`}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </>
        ) : (
          <>
            <img
              className="h-[230px] rounded-lg shadow-lg mx-auto mb-4"
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
              alt="Love bear roses"
            />

            <h1 className="text-4xl md:text-6xl my-4 text-center text-black font-bold drop-shadow-lg">
              Hey Sweetie....
              <br />
              Will you be my Valentine? ❤️
            </h1>

            <div className="flex flex-wrap justify-center gap-4 items-center">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-200"
                style={{ fontSize: `${yesButtonSize}px` }}
                onClick={() => setYesPressed(true)}
              >
                Yes 💕
              </button>

              <button
                onClick={handleNoClick}
                className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-200"
              >
                {noCount === 0 ? "No..." : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Bottone musica */}
      <button
        onClick={() => {
          if (!audioRef.current) return;
          if (isPlaying) {
            audioRef.current.pause();
          } else {
            audioRef.current.play();
          }
          setIsPlaying(!isPlaying);
        }}
        className="music-btn fixed bottom-6 right-6 z-50 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
      >
        {isPlaying ? "Pause Music 🔇" : "Play Music 🔊🎶"}
      </button>
    </>
  );
}
