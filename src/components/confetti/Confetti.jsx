import { useEffect, useState } from "react";
import "./Confetti.css";

// Helper function to generate random colors
const getRandomColor = () => {
  const colors = ["#FF597B", "#FFD700", "#4CAF50", "#00BCD4", "#9C27B0"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ConfettiPiece = ({ id }) => {
  const styles = {
    position: "absolute",
    width: "10px",
    height: "10px",
    backgroundColor: getRandomColor(),
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
    animation: `fall ${Math.random() * 2 + 3}s linear infinite`,
    transform: `rotate(${Math.random() * 360}deg)`,
  };

  return <div style={styles} className="confetti-piece" />;
};

const CustomConfetti = ({ numberOfPieces = 100 }) => {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const confettiArray = Array.from({ length: numberOfPieces }, (_, i) => i);
    setPieces(confettiArray);
  }, [numberOfPieces]);

  return (
    <div
      style={{
        position: "fixed",
        top: "-140px",
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      {pieces.map((id) => (
        <ConfettiPiece key={id} id={id} />
      ))}
    </div>
  );
};

export default CustomConfetti;
