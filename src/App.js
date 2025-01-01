import { useState } from 'react';

export default function BirthdayCard() {
  const [isMessageVisible, setMessageVisible] = useState(false);

  const revealMessage = () => {
    setMessageVisible(true);
    addConfetti();
    launchFirecrackers();
    burstPapers();
  };

  const addConfetti = () => {
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
      confetti.style.animationDuration = 2 + Math.random() * 3 + 's';
      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }
  };

  const launchFirecrackers = () => {
    for (let i = 0; i < 20; i++) {
      const firecracker = document.createElement('div');
      firecracker.classList.add('firecracker');
      firecracker.style.left = Math.random() * window.innerWidth + 'px';
      firecracker.style.top = Math.random() * window.innerHeight + 'px';
      document.body.appendChild(firecracker);

      setTimeout(() => {
        firecracker.remove();
      }, 1000);
    }
  };

  const burstPapers = () => {
    for (let i = 0; i < 50; i++) {
      const paper = document.createElement('div');
      paper.classList.add('paper-burst');
      paper.style.setProperty('--dir-x', Math.random() * 2 - 1);
      paper.style.setProperty('--dir-y', Math.random() * 2 - 1);
      paper.style.left = `${Math.random() * window.innerWidth}px`;
      paper.style.top = `${Math.random() * window.innerHeight}px`;
      document.body.appendChild(paper);

      setTimeout(() => {
        paper.remove();
      }, 1500);
    }
  };

  return (
    <div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap');

        body {
          font-family: 'Quicksand', sans-serif;
          text-align: center;
          background: linear-gradient(to bottom, #fdfcfb, #e2d1c3);
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        h1 {
          color: #ff6f61;
          font-size: 3.5rem;
          margin-top: 20px;
        }
        .content {
          padding: 20px;
        }
        button {
          font-size: 1.2rem;
          padding: 12px 24px;
          background-color: #ff6f61;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        button:hover {
          background-color: #e55c50;
          transform: scale(1.05);
        }
        .message {
          font-size: 1.4rem;
          margin-top: 20px;
          color: #5d4037;
          display: ${isMessageVisible ? 'block' : 'none'};
        }
        .footer {
          margin-top: 50px;
          font-size: 0.9rem;
          color: #9e9e9e;
        }
        .firecracker {
          position: fixed;
          width: 6px;
          height: 6px;
          background-color: #ff6f61;
          animation: firecracker-burst 1s ease-out forwards;
          border-radius: 50%;
          box-shadow: 0 0 10px #ff6f61;
        }
        @keyframes firecracker-burst {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        .paper-burst {
          position: fixed;
          width: 10px;
          height: 10px;
          background-color: #ffcc80;
          border-radius: 50%;
          animation: paper-burst-fly 1.5s ease-out infinite;
        }
        @keyframes paper-burst-fly {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(calc(200px * var(--dir-x)), calc(200px * var(--dir-y))) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>

      <h1>🎉 Happy Birthday! 🎉</h1>
      <div className="content">
        <p>Click the button below to reveal your surprise message!</p>
        <button onClick={revealMessage}>Open Your Card</button>
        <div className="message">
          <p>Dear Aditi,</p>
          <p>
            I'm so grateful to have you in my life. All the little things you
            do make this world a better place!
          </p>
          <p>
            On this special day, I wish you nothing but happiness, love and all
            the affection in the world 🌟
          </p>
          <p>
            Be the nice, sweet, cute, and unfiltered person you are - the world
            needs more of that! Enjoy your day to the fullest!!
          </p>
          <button
            onClick={() =>
              window.open(
                'https://connections.swellgarfo.com/game/-OFX7YX0kX6BTE0HlGs5',
                '_blank'
              )
            }
          >
            🎁 Surprise 🎁
          </button>
        </div>
      </div>
      <div className="footer">
        <p>Made with a lot of ❤️ for you!</p>
      </div>
    </div>
  );
}
