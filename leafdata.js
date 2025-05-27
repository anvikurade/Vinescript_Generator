import { drawLeaf, drawStem, drawBerry, drawLetter } from './leafParts.js';
const straight = 0;
const curly = 1;

export const leafMap = {
    a: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, straight, 1, 3, rotat);
        }
    },

    b: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, curly, 0, 1, rotat);
        }
    },

    c: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, straight, 3, 5, rotat);
        }
    },
   
    d: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, curly, 0, 3, rotat);
        }
    },

    e: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, straight, 1, 2, rotat);
        }
    },

    f: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, straight, 2, 1, rotat);
        }
    },

    g: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, curly, 0, 5, rotat);
        }
    },

    h: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, straight, 2, 5, rotat);
        }
    },

    i: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, straight, 1, 1, rotat);
        }
    },

    
    j: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, curly, 2, 2, rotat);
        }
    },

    k: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, straight, 0, 5, rotat);
        }
    },

    l: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, straight, 0, 4, rotat);
        }
    },

    
    m: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, straight, 3, 1, rotat);
        }
    },

    n: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, straight, 3, 4, rotat);
        }
    },

    o: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, straight, 1, 4, rotat);
        }
    },

    
    p: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, straight, 0, 1, rotat);
        }
    },

    q: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, curly, 3, 2, rotat);
        }
    },

    r: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, straight, 2, 4, rotat);
        }
    },

    s: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, straight, 0, 2, rotat);
        }
    },

    t: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, straight, 0, 3, rotat);
        }
    },

    u: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, straight, 1, 5, rotat);
        }
    },
    
    v: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, curly, 2, 1, rotat);
        }
    },

    w: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, curly, 1, 5, rotat);
        }
    },

    x: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, curly, 3, 5, rotat);
        }
    },

    
    y: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, curly, 1, 1, rotat);
        }
    },

    z: {
        draw: (svg, x, y, rotat) => {
            drawLetter(svg, x, y, curly, 0, 2, rotat);
        }
    }
}