export const animateResult = {
  initial: {
    opacity: 0,
    transition: `transform 1s ease`,
    transform: `translate(-50px. 0px)`,
  },
  animate: {
    opacity: 1,
    transition: `transform 1s ease`,
    transform: `translate(0px,0px)`,
  },
  exit: {
    opacity: 0,
    transition: `transform 1s ease`,
    transform: `translate(50px,0px)`,
  },
};
