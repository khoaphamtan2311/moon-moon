/* eslint-disable no-irregular-whitespace */
import { useState } from "react";
import "./Envelope.css";
import { Box, Dialog, DialogContent } from "@mui/material";
import Thoughts from "../../assets/thoughts.png";

function EnvelopeComponent() {
  const [isFlapped, setIsFlapped] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLetterVisible, setIsLetterVisible] = useState(true);

  const handleClick = () => {
    setIsFlapped(!isFlapped);
  };

  const handleDrag = () => {
    // Simple dragging effect - you could add more complex calculations here
    setIsDialogOpen(true);
    setIsLetterVisible(false);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setIsFlapped(false);
    setIsLetterVisible(true);
  };

  return (
    <div className="envelope-container">
      <div
        className={`envelope-wrapper ${isFlapped ? "flap" : ""}`}
        onClick={handleClick}
      >
        <div className="envelope">
          {isFlapped && (
            <Box className="arrow-text" onClick={handleDrag}>
              Kéo lên <span className="arrow">↑</span>
            </Box>
          )}
          {isLetterVisible && (
            <div className="letter">
              <div className="text">
                <strong>Dear Moon,</strong>
                <p>
                  Anh mong là em đang vui khi xem cái này LOL ¯\_( ͡❛ ͜ʖ ͡❛)_/¯
                </p>
                <p className="sincerely">Sincerely, Khoa Khùng &lt;3</p>
              </div>
            </div>
          )}
        </div>
        <div className="heart" />
      </div>

      {/* Dialog Overlay */}

      <Dialog
        open={isDialogOpen}
        onClose={closeDialog}
        PaperProps={{
          sx: { borderRadius: "unset", height: 750 },
        }}
      >
        <DialogContent className="text" sx={{ fontSize: "20px" }}>
          <strong>Dear Moon,</strong>
          <p>Anh mong là em đang vui khi xem cái này LOL ¯\_( ͡❛ ͜ʖ ͡❛)_/¯</p>
          <p className="sincerely">Sincerely, Khoa Khùng &lt;3</p>
          <p>In my eyes:</p>
          <img src={Thoughts} alt="thoughts" width="100%" />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EnvelopeComponent;
