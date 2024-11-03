import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import Moon from "../assets/main.jpg";
import BalloonContainer from "./FloatingBalloons";
import { useState } from "react";
import { Fade } from "react-reveal";
import EnvelopeComponent from "./envelope/Envelope";
import { SnowfallEffect } from "./SnowFall";
import { useInView } from "react-intersection-observer";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import TimeCounter from "./time-counter/TimeCounter";
import CustomConfetti from "./confetti/Confetti";
import CustomFirework from "./confetti/CustomFirework";
import Timeline from "./timeline/Timeline";
import Balloons from "./balloons-tags/BalloonsTag";

const ImageWish = () => {
  const { width, height } = useWindowSize();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleImageClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const { ref: envelopeRef, inView: isEnvelopeInView } = useInView({
    triggerOnce: false,
    threshold: 1.0, // Trigger when 100% of the component is visible
  });
  const { ref: counterRef, inView: isCounterInView } = useInView({
    triggerOnce: false,
    threshold: 1.0, // Trigger when 100% of the component is visible
  });

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflowX: "hidden",
        overflowY: "scroll", // Allow scrolling
        scrollSnapType: "y mandatory", // Enable scroll snapping
      }}
    >
      {isDialogOpen || isEnvelopeInView || isCounterInView ? null : (
        <CustomConfetti numberOfPieces={200} />
      )}

      {/* Full-screen Section for Balloons and Confetti */}
      <Box
        className="section-1"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh", // Full viewport height for each section
          position: "relative",
          overflow: "hidden",
          scrollSnapAlign: "start", // Snap to start when scrolling
        }}
      >
        {isDialogOpen || isEnvelopeInView ? null : <BalloonContainer />}

        {/* Circular Moon Image and Text */}
        <div
          style={{
            position: "absolute",
            top: "3%",
            left: 0,
            width: "100%",
            pointerEvents: "none",
            zIndex: 1000,
          }}
        >
          <Balloons />
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: "1000",
          }}
          // ref={imgRef}
        >
          <Fade bottom>
            <Box
              onClick={handleImageClick}
              sx={{
                width: 400,
                height: 400,
                borderRadius: "50%",
                overflow: "hidden",
                border: "5px solid #FF597B",
                animation: "swing 3s ease-in-out infinite",
                cursor: "pointer",
              }}
            >
              <img
                src={Moon}
                alt="Moon"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Fade>
          <Box
            sx={{
              marginTop: -6,
              fontSize: "5rem",
              color: "#fff",
              animation: "swing 3s ease-in-out infinite",
              fontWeight: "700",
            }}
            className="great-vibes-regular"
          >
            Minh Nguyet
          </Box>
        </Box>
      </Box>

      {/* Full-screen Section for Dialog */}

      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: { border: "4px solid #DB6B97" },
        }}
      >
        <DialogContent
          sx={{
            width: 500,
            height: "fit-content",
            backgroundColor: "#fff",
            padding: 2,
            textAlign: "center",
            color: "#333",
            paddingX: "20px",
          }}
        >
          <Box
            sx={{
              fontSize: "4rem",
              color: "#DB6B97",
              animation: "swing 3s ease-in-out infinite",
              fontWeight: "700",
            }}
            className="great-vibes-regular"
          >
            Happy Birthday
          </Box>
          <Box sx={{ textAlign: "left" }} className="playwrite-it-trad-normal">
            Dear @imnoturmoon,
          </Box>
          <Box sx={{ textAlign: "left" }} className="playwrite-it-trad-normal">
            Hôm nay là ngày Moon vừa tròn 20 tuổi, anh mong là em sẽ luôn vui vẻ
            và hạnh phúc, vô tư không lo không nghĩ. Chuyện học vấn và sự nghiệp
            còn dài, cứ chậm rãi mà tiến tới. Hãy luôn bình tĩnh và tìm cho mình
            con đường tốt nhất nhé. Đây là một vài suy nghĩ của anh đã được đưa
            lên đây, từ những điều em nói em thích.
          </Box>
          <Box sx={{ textAlign: "left" }} className="playwrite-it-trad-normal">
            Chúc em tuổi mới ngày càng xinh hơn, cười nhiều hơn, thành công hơn.
            Quan trọng đấy
          </Box>
          <Box sx={{ textAlign: "left" }} className="playwrite-it-trad-normal">
            Thôi coi xong rồi giận 7 7 49 bữa cũng được, nhưng mà cảm ơn vì
            những kỉ niệm mình từng có và những điều mình đang giữ lấy bây giờ.
            Anh sẽ vẫn ở đây và hỗ trợ em trên con đường của mình. Đụng tới Moon
            là anh bị trớt á nên là của ít lòng nhiều nha
          </Box>
          <Box>
            P/s: Tới đây hết thấy đường rồi nhưng mà còn nữa, scroll mạnh xuống
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              border: "5px solid #557C55",
              backgroundColor: "#A6CF98",
              color: "#F2FFE9",
              textTransform: "unset",
              width: "140px",
              cursor: "pointer",
              display: "inline-block",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                animation: "swingOnHover 0.5s infinite",
                border: "5px solid #557C55",
              },
              paddingBottom: "10px",
            }}
            className="bungee-shade-regular"
            onClick={handleCloseDialog}
          >
            Đồng ý{" "}
            <LoyaltyIcon
              sx={{ color: "#FF597B", position: "relative", top: "8px" }}
              fontSize="medium"
            />
          </Button>
        </DialogActions>
      </Dialog>

      {isDialogOpen && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={100}
          gravity={0.01}
          wind={0}
          colors={["#E11D48", "#FF597B"]}
          drawShape={(ctx) => {
            ctx.beginPath();
            ctx.moveTo(0, -15);
            ctx.bezierCurveTo(-10, -25, -25, 0, 0, 15);
            ctx.bezierCurveTo(25, 0, 10, -25, 0, -15);
            ctx.closePath();
            ctx.fill();
          }}
          initialVelocityX={12}
          initialVelocityY={12}
        />
      )}

      {/* Full-screen Section for Envelope */}
      <Box
        className="section-2"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          position: "relative",
          scrollSnapAlign: "start", // Snap to start when scrolling
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "-800px",
            width: "100%",
            height: "100%",
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <SnowfallEffect width={width} height={height} />
        </Box>
        <Fade bottom distance="30px" duration={800}>
          <Box ref={envelopeRef}>
            <EnvelopeComponent />
          </Box>
        </Fade>
      </Box>

      <Box
        ref={counterRef}
        className="section-3"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",

          position: "relative",
          scrollSnapAlign: "start", // Snap to start when scrolling
          backgroundColor: "#133E87",
        }}
      >
        {isCounterInView && <CustomFirework />}
        <TimeCounter />
      </Box>

      <Box
        className="section-4"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",

          position: "relative",
          scrollSnapAlign: "start", // Snap to start when scrolling
        }}
      >
        <Timeline />
      </Box>

      <style>
        {`
          @keyframes swing {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(5deg); }
            100% { transform: rotate(0deg); }
          }

          @keyframes openEnvelope {
            0% { transform: rotateX(90deg); }
            100% { transform: rotateX(0deg); }
          }
        `}
      </style>
    </Box>
  );
};

export default ImageWish;
