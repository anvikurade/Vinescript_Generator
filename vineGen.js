
function random(min, max, negativeToo = false) {
    min = Number(min);
    max = Number(max);

    if (negativeToo) {
        const useNegative = Math.random() < 0.7
        if (useNegative) {
            const retval = (Math.random() * (max - min) + min) * -1;
            // console.log(retval);
            return retval;
        }
    }

    return Math.random() * (max - min) + min;
}

function distance(p1, p2) {
    const squareY = (p2.y - p1.y) * (p2.y - p1.y);
    const squareX = (p2.x - p1.x) * (p2.x - p1.x);
    return Math.sqrt((squareX + squareY));
}

export function genRandomPoints(numPoints, yrandMin, yrandMax) {
    // must be num points + 2 

    console.log(yrandMax, yrandMin);

    let xval = 49;
    const yval = 90;
    let ytemp = yval + 10;
    let xtemp = 0;

    let points = [{ x: 10 , y: ytemp },
                { x: 49 , y: yval }];
    ytemp = yval + (random(yrandMax, yrandMin, true) );
    // xtemp = xval + random(15, 55);
    // points.push({ x:xtemp, y:ytemp });

    xval = 120;

    for (let i = 0; i < numPoints + 2; i++) {
        xtemp = xval + random(-10, 10);
        ytemp = yval + (random(yrandMax, yrandMin, true) );
        console.log(ytemp);
        points.push({ x: xtemp, y: ytemp });

        // ytemp = yval + (random(yrandMax, yrandMin, true) );
        // xtemp = xval + random(10, 60);
        // points.push({ x:xtemp, y:ytemp });

        xval += 80;
    }

    // console.log(points);
    return points;
}

export function generateVinePath(points, tension = -1) {

    let pathData = `M ${points[0].x}, ${points[0].y} `;

    for (let i = 1; i < points.length - 2; i++) {

        const t0 = 0;
        const t1 = Math.pow(distance(points[i - 1], points[i]), tension) + t0; 
        const t2 = Math.pow(distance(points[i], points[i + 1]), tension) + t1;
        const t3 = Math.pow(distance(points[i + 1], points[i + 2]), tension) + t2;

        const P0 = points[i - 1];
        const P1 = points[i];
        const P2 = points[i + 1];
        const P3 = points[i + 2];


        const c1 = (t2-t1)/(t2-t0);
        const c2 = (t1-t0)/(t2-t0);
        const d1 = (t3-t2)/(t3-t1);
        const d2 = (t2-t1)/(t3-t1);

        const M1x = (t2-t1)*(c1*(P1.x-P0.x)/(t1-t0) + c2*(P2.x-P1.x)/(t2-t1));
        const M2x = (t2-t1)*(d1*(P2.x-P1.x)/(t2-t1) + d2*(P3.x-P2.x)/(t3-t2));

        const M1y = (t2-t1)*(c1*(P1.y-P0.y)/(t1-t0) + c2*(P2.y-P1.y)/(t2-t1));
        const M2y = (t2-t1)*(d1*(P2.y-P1.y)/(t2-t1) + d2*(P3.y-P2.y)/(t3-t2));

        pathData += `
            C ${P0.x + M1x/3}, ${P0.y + M1y/3}  ${P1.x - M2x/3}, ${P1.y - M2y/3}   ${P1.x}, ${P1.y} `;
        
    }
    
    return pathData;
}