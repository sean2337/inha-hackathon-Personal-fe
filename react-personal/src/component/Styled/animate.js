export const animate = {
  initial: {
    opacity: 0,
    transition: `transform 1s ease`,
    transform: `translate(-50px. 350px)`,
  },
  animate: {
    opacity: 1,
    transition: `transform 1s ease`,
    transform: `translate(0px,350px)`,
  },
  exit: {
    opacity: 0,
    transition: `transform 1s ease`,
    transform: `translate(50px,350px)`,
  },
};
