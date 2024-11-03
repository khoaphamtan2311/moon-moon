import { Box } from "@mui/material";
import { useEffect } from "react";

const CountDown = ({ seconds, setSeconds }) => {
  useEffect(() => {
    if (seconds > 1) {
      const timer = setInterval(() => setSeconds(seconds - 1), 1000);
      return () => clearInterval(timer);
    }
  });

  return (
    <div style={{ textAlign: "center" }}>
      <Box
        className="vast-shadow-regular"
        sx={{ fontSize: "50vh", color: "#DB6B97" }}
      >
        {seconds}
      </Box>
    </div>
  );
};

export default CountDown;
