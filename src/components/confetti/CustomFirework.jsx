import { useEffect, useState } from "react";
import { FireworkPiece } from "./FireWorkPiece";

const CustomFirework = ({ numberOfBursts = 5, piecesPerBurst = 20 }) => {
  const [bursts, setBursts] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate a random position for each burst root
      const rootX = Math.random() * window.innerWidth;
      const rootY = Math.random() * window.innerHeight;

      // Create new burst with pieces originating from rootX, rootY
      const newBurst = Array.from({ length: piecesPerBurst }, (_, i) => ({
        id: `${Date.now()}-${i}`, // Unique ID for each piece
        rootX, // Root X position
        rootY, // Root Y position
      }));

      setBursts((prevBursts) => [...prevBursts, newBurst]);

      // Clear interval after the specified number of bursts
      if (bursts.length >= numberOfBursts) {
        clearInterval(intervalId);
      }
    }, 1000); // Fire a new burst every second

    return () => clearInterval(intervalId);
  }, [bursts, numberOfBursts, piecesPerBurst]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      {bursts.flat().map(({ id, rootX, rootY }) => (
        <FireworkPiece key={id} rootX={rootX} rootY={rootY} />
      ))}
    </div>
  );
};

export default CustomFirework;
