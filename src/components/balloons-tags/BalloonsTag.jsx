import "./BalloonsTag.css"; // Make sure to include this stylesheet with your existing styles

const Balloons = () => {
  return (
    <div className="balloon-container-1">
      {/* "Happy" Balloons */}
      <div className="happy">
        <div className="balloon balloon1 balloon-anim1"></div>
        <div className="balloon balloon2 balloon-anim6"></div>
        <div className="balloon balloon3 balloon-anim3"></div>
        <div className="balloon balloon4 balloon-anim4"></div>
        <div className="balloon balloon5 balloon-anim5"></div>
      </div>

      {/* "Birthday" Balloons */}
      <div className="birthday">
        <div className="balloon balloon3 balloon-anim6"></div>
        <div className="balloon balloon1 balloon-anim2"></div>
        <div className="balloon balloon4 balloon-anim1"></div>
        <div className="balloon balloon2 balloon-anim6"></div>
        <div className="balloon balloon1 balloon-anim4"></div>
        <div className="balloon balloon3 balloon-anim5"></div>
        <div className="balloon balloon2 balloon-anim1"></div>
        <div className="balloon balloon4 balloon-anim6"></div>
      </div>
    </div>
  );
};

export default Balloons;
