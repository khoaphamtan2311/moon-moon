import { Box } from "@mui/material";
import "./App.css";
import CountDown from "./components/CountDown";
import { useEffect, useState } from "react";
import ImageWish from "./components/ImageWish";

function App() {
  const [seconds, setSeconds] = useState(5);
  const [wishVisible, setWishVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setWishVisible(true);
    }, 5000);
  });

  return !wishVisible ? (
    <Box sx={{ backgroundColor: "#133E87", width: "100vw", height: "100vh" }}>
      <CountDown seconds={seconds} setSeconds={setSeconds} />
    </Box>
  ) : (
    <Box
      sx={{
        backgroundColor: "#021526",
        width: "100vw",
        height: "200vh",
        overflow: "hidden",
      }}
    >
      <ImageWish />
    </Box>
  );
}

export default App;
