function CustomRightArrow({ onClick }) {
  function handleClick() {
    // do whatever you want on the right button click
    console.log('Right button clicked, go to next slide');
    // ... and don't forget to call onClick to slide
    onClick();
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Go to next slide"
      className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
    />
  );
}