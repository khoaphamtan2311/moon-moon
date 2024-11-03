import { useState, useEffect } from "react";
import "./TimeCounter.css"; // Import CSS

const TimeCounter = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date("2004-11-03T00:00:00");

    const calculateTimeElapsed = () => {
      const now = new Date();
      const diff = now - startDate;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      );
      const days = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeElapsed({ years, months, days, hours, minutes, seconds });
    };

    calculateTimeElapsed();
    const intervalId = setInterval(calculateTimeElapsed, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Time Since: 03/11/2004:</h2>
      <p>
        <span className="time-number">{timeElapsed.years}</span> năm,{" "}
        <span className="time-number">{timeElapsed.months}</span> tháng,{" "}
        <span className="time-number">{timeElapsed.days}</span> ngày,{" "}
        <span className="time-number">{timeElapsed.hours}</span> giờ,{" "}
        <span className="time-number">{timeElapsed.minutes}</span> phút,{" "}
        <span className="time-number">{timeElapsed.seconds}</span> giây
      </p>
      <p>Cảm ơn em vì đã luôn luôn là em!</p>
      <h3 style={{ marginTop: "20px" }}>A person of god</h3>
    </div>
  );
};

export default TimeCounter;
