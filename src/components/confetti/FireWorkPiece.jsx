import "./Confetti.css";

const getRandomColor = () => {
  const colors = ["#FF597B", "#FFD700", "#4CAF50", "#00BCD4", "#9C27B0"];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Firework piece with random direction
export const FireworkPiece = ({ id, rootX, rootY }) => {
  const xVelocity = Math.random() * 200 - 100; // Random X direction
  const yVelocity = Math.random() * 200 - 100; // Random Y direction

  const styles = {
    position: "absolute",
    width: "8px",
    height: "8px",
    backgroundColor: getRandomColor(),
    left: rootX,
    top: rootY,
    transformOrigin: "center",
    animation: `firework-explode ${
      Math.random() * 1.5 + 1.5
    }s ease-out forwards`,
    opacity: 1,
    "--x-velocity": `${xVelocity}px`,
    "--y-velocity": `${yVelocity}px`,
  };

  return <div style={styles} className="firework-piece" />;
};
