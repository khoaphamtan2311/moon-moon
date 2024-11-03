import { useEffect, useState } from "react";

const BalloonContainer = () => {
  const [balloons, setBalloons] = useState([]);

  function random(num) {
    return Math.floor(Math.random() * num);
  }

  function getRandomStyles() {
    const r = random(255);
    const g = random(255);
    const b = random(255);
    const mt = random(200);
    const ml = random(50);
    const dur = random(5) + 5;
    return {
      backgroundColor: `rgba(${r},${g},${b},0.7)`,
      color: `rgba(${r},${g},${b},0.7)`,
      boxShadow: `inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7)`,
      margin: `${mt}px 0 0 ${ml}px`,
      animation: `float ${dur}s ease-in infinite`,
    };
  }

  function createBalloons(num) {
    const newBalloons = Array.from({ length: num }, (_, i) => ({
      id: i,
      style: getRandomStyles(),
    }));
    setBalloons(newBalloons);
  }

  function removeBalloons() {
    setBalloons([]);
  }

  useEffect(() => {
    createBalloons(30);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id="balloon-container"
      onClick={removeBalloons}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexWrap: "wrap",
        overflow: "hidden",
        zIndex: 1000, // Ensures balloons are behind other content
        pointerEvents: "none", // Allows clicks to pass through to underlying elements
      }}
    >
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="balloon"
          style={{
            ...balloon.style,
            height: "125px",
            width: "105px",
            borderRadius: "75% 75% 70% 70%",
            position: "relative",
          }}
        >
          <div
            style={{
              content: '""',
              height: "75px",
              width: "1px",
              backgroundColor: "#FDFD96",
              position: "absolute",
              top: "125px",
              left: 0,
              right: 0,
              margin: "auto",
            }}
          />
          <div
            style={{
              content: '"▲"',
              textAlign: "center",
              display: "block",
              position: "absolute",
              color: balloon.style.color,
              top: "120px",
              left: 0,
              right: 0,
              margin: "auto",
            }}
          >
            ▲
          </div>
        </div>
      ))}
      <style>
        {`
          @keyframes float {
            from {
              transform: translateY(100vh);
              opacity: 1;
            }
            to {
              transform: translateY(-300vh);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BalloonContainer;
