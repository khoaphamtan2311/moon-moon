import { Box, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Timeline = () => {
  const events = [
    {
      time: "2022",
      description: "Vừa để quên vừa để nhớ!",
    },
    { time: "2023", description: "Một tuổi mới hạnh phúc!" },
    { time: "2024", description: "Hạnh phúc hơn nữa nhé!" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        backgroundColor: "#FFE3E3",
        color: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "10px 20px #789DBC",
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",

          animation: "swing 3s ease-in-out infinite",
        }}
        className="great-vibes-regular "
      >
        Minh Nguyet&apos;s Birthday Celebration
      </Typography>
      <Typography
        variant="h2"
        sx={{
          color: "#333",
          fontFamily: "cursive",
          marginBottom: "30px",
          marginTop: "-30px",
        }}
        className="puppies-play-regular"
      >
        Timeline 2024
      </Typography>

      {/* Timeline */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            width: "4px",
            backgroundColor: "#E85C0D",
            transform: "translateX(-50%)",
          }}
        />
        {events.map((event, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row-reverse" : "row",
              alignItems: "center",
              marginBottom: "40px",
              position: "relative",
            }}
          >
            {/* Circle */}
            <Box
              sx={{
                width: "20px",
                height: "20px",
                backgroundColor: "#E85C0D",
                borderRadius: "50%",
                border: "4px solid #fff",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
              }}
            />
            {/* Content Box */}
            <Box
              sx={{
                width: "45%",
                padding: "20px",
                backgroundColor: "#FFE3E3",
                borderRadius: "10px",
                border: "1px dotted #E85C0D",
                textAlign: index % 2 === 0 ? "right" : "left",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: "#E85C0D", fontWeight: "bold" }}
              >
                {event.time}
              </Typography>
              <Typography sx={{ color: "#333", fontSize: "16px" }}>
                {event.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box>
        Made with{" "}
        <FavoriteBorderIcon
          fontSize="small"
          sx={{ color: "#E85C0D", paddingTop: "2px" }}
        />{" "}
        from Khoa Pham
      </Box>
      <Box>Buồn ngủ quá ngủ đây</Box>
    </Box>
  );
};

export default Timeline;
