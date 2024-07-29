// animationVariants.ts
export const pageVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
};

export const swipeVariants = {
    initial: { x: 0 },
    enter: { x: '100%' },
    exit: { x: '-100%' },
};
