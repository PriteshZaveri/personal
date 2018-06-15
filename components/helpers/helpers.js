import $ from "jquery";

let helper = {};

helper.handleAnimation = (animation, animationName) => {
  setTimeout(
    () => {
      $("." + animation).addClass("animated " + animationName);
    },
    100,
    animation,
    animationName
  );
};

export default helper;
