import { Box } from "@mui/material";

const BalloonLine = () => {
  const balloonColors = [
    "#FF6B6B",
    "#FFD93D",
    "#6BCB77",
    "#4D96FF",
    "#FF4D4D",
    "#A76BCB",
    "#FF8C42",
    "#4DCBFF",
    "#FFB6C1",
    "#6BFFCB",
    "#FF9B6B",
    "#FFD13D",
    "#6BFB77",
    "#4D86FF",
    "#FF6D6D",
    "#A76BCB",
    "#FF8A42",
    "#4DC3FF",
    "#FFA6C1",
    "#6BFFBB",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        width: "100%",
        height: "200px",
        position: "relative",
        marginX: "auto",
      }}
    >
      {balloonColors.map((color, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            width: "60px",
            height: "80px",
            borderRadius: "50% 50% 45% 45%",
            backgroundColor: color,
            animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
            top: `${40 + Math.random() * 30}px`, // Randomize for stacking effect
            left: `${5 + index * 30}px`, // Closer spacing for crowding
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            "&::after": {
              content: '""',
              position: "absolute",
              top: "70px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "2px",
              height: "50px",
              backgroundColor: "#333",
            },
          }}
        />
      ))}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(-2deg);
            }
            50% {
              transform: translateY(-20px) rotate(2deg);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default BalloonLine;
