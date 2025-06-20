import { drawLeaf, drawStem, drawBerry, drawLetter } from './leafParts.js';
const straight = 0;
const curly = 1;

export const leafMap = {
    a: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, straight, 1, 3, rotat, index);
        }
    },

    b: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, curly, 0, 1, rotat, index);
        }
    },

    c: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, straight, 3, 5, rotat, index);
        }
    },
   
    d: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, curly, 0, 3, rotat, index);
        }
    },

    e: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, straight, 1, 2, rotat, index);
        }
    },

    f: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, straight, 2, 1, rotat, index);
        }
    },

    g: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, curly, 0, 5, rotat, index);
        }
    },

    h: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, straight, 2, 5, rotat, index);
        }
    },

    i: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, straight, 1, 1, rotat, index);
        }
    },

    
    j: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, curly, 2, 2, rotat, index);
        }
    },

    k: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, straight, 0, 5, rotat, index);
        }
    },

    l: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, straight, 0, 4, rotat, index);
        }
    },

    
    m: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, straight, 3, 1, rotat, index);
        }
    },

    n: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, straight, 3, 4, rotat, index);
        }
    },

    o: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, straight, 1, 4, rotat, index);
        }
    },

    
    p: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, straight, 0, 1, rotat, index);
        }
    },

    q: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, curly, 3, 2, rotat, index);
        }
    },

    r: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, straight, 2, 4, rotat, index);
        }
    },

    s: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, straight, 0, 2, rotat, index);
        }
    },

    t: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, straight, 0, 3, rotat, index);
        }
    },

    u: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, straight, 1, 5, rotat, index);
        }
    },
    
    v: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, curly, 2, 1, rotat, index);
        }
    },

    w: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, curly, 1, 5, rotat, index);
        }
    },

    x: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, curly, 3, 5, rotat, index);
        }
    },

    
    y: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, curly, 1, 1, rotat, index);
        }
    },

    z: {
        draw: (svg, x, y, rotat, index) => {
            drawLetter(svg, x, y, curly, 0, 2, rotat, index);
        }
    }
}