import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

export const SnowfallEffect = () => {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={2 * width}
      height={height}
      numberOfPieces={200} // Higher number of pieces for snowflake density
      gravity={0.01} // Slow falling effect for snow
      wind={0.01} // Slight breeze for a more natural snowfall
      colors={["#ffffff", "#e0e0e0", "#d3d3d3"]} // Snow-like colors
      drawShape={(ctx) => {
        ctx.beginPath();
        ctx.arc(0, 0, 3, 0, Math.PI * 2); // Small circular shape for snowflake
        ctx.fill();
      }}
      initialVelocityX={0}
      initialVelocityY={1}
      style={{ overflow: "hidden" }}
    />
  );
};
