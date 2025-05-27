export const NS = "http://www.w3.org/2000/svg";
const straight = 0;
const curly = 1;

export function drawStem(svg, x, y, type) {
    let xtemp = 0;
    let ytemp = 0;
    // 0 is a straight stem
    // 1 is a curly stem

    if (type == straight) {
        const stem = document.createElementNS(NS, "path");
        stem.setAttribute("d", `m 27.760902,165.70589 c -15.525494,-28.04415 20.524897,-33.32796 12.524897,-34.32796`);
        stem.setAttribute("fill", "none");
        stem.setAttribute("stroke", "green");
        stem.setAttribute("stroke-width", "3");
        ytemp = y - 130;
        xtemp = x + 9;
        stem.setAttribute("transform", `translate(${xtemp}, ${ytemp}) scale(0.9, 1.09) skewX(-8)`);
        svg.appendChild(stem);

    } else if (type == curly) {
        const stem = document.createElementNS(NS, "path");
        stem.setAttribute("d", `m 20.823096,83.352409 
         c 1.26827,-24.60443 13.190018,-10.69731 13.190018,-10.69731 
         2,1 2.02922,15.47289 -8.624238,3.80481 
         -10.6534801,-14.66807 -1.9724,-30.39483 3.55115,-27.32153 
         6.947618,4.6078 1.863288,18.00941 -6.05847,3.0877  
         -3.13579,-2.88374 -3.29747,-18.77558 9.79546,-27.53005`);
        stem.setAttribute("fill", "none");
        stem.setAttribute("stroke", "green");
        stem.setAttribute("stroke-width", "3");
        ytemp = y - 1;
        xtemp = x + 7.5;
        stem.setAttribute("transform", `translate(${xtemp}, ${ytemp}) scale(0.9, 0.6) skewX(-8)`);
        svg.appendChild(stem);
    }
    
}

export function drawBerry(svg, x, y, num, type) {
    let xtemp = 0;
    let ytemp = 0;
    // TODO: change it so that the placement changes based on the type
    if (num > 0) {
        const berry = document.createElementNS(NS, "circle");
        if (type == straight) {
            xtemp = x + 11.5;
            ytemp = y + 23; 
        } else if (type == curly) {
            xtemp = x + 16.5;
            ytemp = y + 23; 
        }
        
        berry.setAttribute("r", "3");
        berry.setAttribute("cx", `${xtemp}`);
        berry.setAttribute("cy", `${ytemp}`);
        berry.setAttribute("stroke", "green");
        berry.setAttribute("stroke-width", "3");
        berry.setAttribute("fill", "green");    
        svg.appendChild(berry);
    }

    if (num > 1) {
        // berry two
        const berry2 = document.createElementNS(NS, "circle");
        if (type == straight) {
            xtemp = x + 16;
            ytemp = y + 34.5;
        } else if (type == curly) {
            xtemp = x + 34;
            ytemp = y + 43;
        }
        berry2.setAttribute("r", "3");
        berry2.setAttribute("cx", `${xtemp}`);
        berry2.setAttribute("cy", `${ytemp}`);
        berry2.setAttribute("stroke", "green");
        berry2.setAttribute("stroke-width", "3");
        berry2.setAttribute("fill", "green");    
        svg.appendChild(berry2);
    }

    if (num > 2) {
        // berry three
        const berry3 = document.createElementNS(NS, "circle");
        if (type == straight) {
            xtemp = x + 5;
            ytemp = y + 40;
        } else if (type == curly) {
            xtemp = x + 14;
            ytemp = y + 35;
        }
        berry3.setAttribute("r", "3");
        berry3.setAttribute("cx", `${xtemp}`);
        berry3.setAttribute("cy", `${ytemp}`);
        berry3.setAttribute("stroke", "green");
        berry3.setAttribute("stroke-width", "3");
        berry3.setAttribute("fill", "green");    
        svg.appendChild(berry3);
    }
}

export function drawLeaf(svg, x, y, num, typeStem) {
    let xtemp = 0;
    let ytemp = 0;

    if (typeStem == curly) {
        x += 5;
    }
    

    if (num == 1) {
        // leaf path
        const leaf = document.createElementNS(NS, "path");
        leaf.setAttribute("d", `m 26.148449,35.554069 
            c 2.062971,2.24723 7.208484,8.93358 18.091355,3.93483 9.922094,
            -4.5574 6.046617,-23.17041 3.505136,-19.17298 -6.791414,
            10.68206 -16.46153,2.59568 -21.596486,15.23814 z`);
        leaf.setAttribute("fill", "green");
        leaf.setAttribute("stroke", "green");
        leaf.setAttribute("stroke-width", "3");
        ytemp = y - 21;
        leaf.setAttribute("transform", `translate(${x}, ${ytemp})`);
        svg.appendChild(leaf);
    } else if (num == 2) {
        // Two leaves 

        // leaf path 1
        const leaf2 = document.createElementNS(NS, "path");
        leaf2.setAttribute("d", `m 34.439166,130.65424 c -1.572763,
            2.61387 -5.27976,10.1929 -16.941553,7.46754 -10.6321881,
            -2.48469 -10.5508144,-21.49668 -7.262359,-18.08717 8.787383,
            9.11107 16.648355,-0.74312 24.20396,10.61959 z`);
        leaf2.setAttribute("fill", "green");
        leaf2.setAttribute("stroke", "green");
        leaf2.setAttribute("stroke-width", "3");
        ytemp = y - 80;
        xtemp = x + 45;
        leaf2.setAttribute("transform", `translate(${xtemp}, ${ytemp}) scale(0.8, 0.7) rotate(25)`);
        svg.appendChild(leaf2);

        const leaf3 = document.createElementNS(NS, "path");
        leaf3.setAttribute("d", `m 34.439166,130.65424 c -1.572763,
            2.61387 -5.27976,10.1929 -16.941553,7.46754 -10.6321881,
            -2.48469 -10.5508144,-21.49668 -7.262359,-18.08717 8.787383,
            9.11107 16.648355,-0.74312 24.20396,10.61959 z`);
        leaf3.setAttribute("fill", "green");
        leaf3.setAttribute("stroke", "green");
        leaf3.setAttribute("stroke-width", "3");
        ytemp = y + 95;
        xtemp = x - 29;
        leaf3.setAttribute("transform", `translate(${xtemp}, ${ytemp}) scale(0.8, 0.7) rotate(225)`);
        svg.appendChild(leaf3);
    } else if (num == 3) {
        // leaf path 1
        const leaf2 = document.createElementNS(NS, "path");
        leaf2.setAttribute("d", `m 34.439166,130.65424 c -1.572763,
            2.61387 -5.27976,10.1929 -16.941553,7.46754 -10.6321881,
            -2.48469 -10.5508144,-21.49668 -7.262359,-18.08717 8.787383,
            9.11107 16.648355,-0.74312 24.20396,10.61959 z`);
        leaf2.setAttribute("fill", "green");
        leaf2.setAttribute("stroke", "green");
        leaf2.setAttribute("stroke-width", "3");
        ytemp = y - 80;
        xtemp = x + 45;
        leaf2.setAttribute("transform", `translate(${xtemp}, ${ytemp}) scale(0.8, 0.7) rotate(25)`);
        svg.appendChild(leaf2);


        // leaf path 2
        const leaf = document.createElementNS(NS, "path");
        leaf.setAttribute("d", `m 34.439166,130.65424 c -1.572763,2.61387 -5.27976,
            10.1929 -16.941553,7.46754 -10.6321881,-2.48469 -10.5508144,
            -21.49668 -7.262359,-18.08717 8.787383,9.11107 16.648355,-0.74312 24.20396,10.61959 z`);
        leaf.setAttribute("fill", "green");
        leaf.setAttribute("stroke", "green");
        leaf.setAttribute("stroke-width", "3");
        ytemp = y + 68;
        xtemp = x + 116;
        leaf.setAttribute("transform", `translate(${xtemp}, ${ytemp}) scale(0.8, 0.7) rotate(140)`);
        svg.appendChild(leaf);


        // leaf path 3
        const leaf3 = document.createElementNS(NS, "path");
        leaf3.setAttribute("d", `m 34.439166,130.65424 c -1.572763,
            2.61387 -5.27976,10.1929 -16.941553,7.46754 -10.6321881,
            -2.48469 -10.5508144,-21.49668 -7.262359,-18.08717 8.787383,
            9.11107 16.648355,-0.74312 24.20396,10.61959 z`);
        leaf3.setAttribute("fill", "green");
        leaf3.setAttribute("stroke", "green");
        leaf3.setAttribute("stroke-width", "3");
        ytemp = y + 75;
        xtemp = x - 56;
        leaf3.setAttribute("transform", `translate(${xtemp}, ${ytemp}) scale(0.8, 0.7) rotate(245)`);
        svg.appendChild(leaf3);
    } else if (num == 4) {
                            
        // leaf path 1
        let leaf2 = document.createElementNS(NS, "path");
        leaf2.setAttribute("d", `m 91.976683,-90.469186 c -1.03364,1.278047 
            -3.2414,5.202377 -14.47194,0.46015 -10.239041,-4.32359 -13.230291,
            -16.530744 -9.637561,-13.494854 9.600781,8.112597 15.285261,
            3.789707 24.109511,13.034694 z`);
        leaf2.setAttribute("fill", "green");
        leaf2.setAttribute("stroke", "green");
        leaf2.setAttribute("stroke-width", "3");
        ytemp = y + 45;
        xtemp = x - 72;
        leaf2.setAttribute("transform", `translate(${xtemp}, ${ytemp}) scale(0.8, 0.7) rotate(25)`);
        svg.appendChild(leaf2);

        leaf2 = document.createElementNS(NS, "path");
        leaf2.setAttribute("d", `m 91.976683,-90.469186 c -1.03364,1.278047 
            -3.2414,5.202377 -14.47194,0.46015 -10.239041,-4.32359 -13.230291,
            -16.530744 -9.637561,-13.494854 9.600781,8.112597 15.285261,
            3.789707 24.109511,13.034694 z`);
        leaf2.setAttribute("fill", "green");
        leaf2.setAttribute("stroke", "green");
        leaf2.setAttribute("stroke-width", "3");
        ytemp = y - 32;
        xtemp = x - 62;
        leaf2.setAttribute("transform", `translate(${xtemp}, ${ytemp}) scale(0.8, 0.7) rotate(75)`);
        svg.appendChild(leaf2);
        
        leaf2 = document.createElementNS(NS, "path");
        leaf2.setAttribute("d", `m 91.976683,-90.469186 c -1.03364,1.278047 
            -3.2414,5.202377 -14.47194,0.46015 -10.239041,-4.32359 -13.230291,
            -16.530744 -9.637561,-13.494854 9.600781,8.112597 15.285261,
            3.789707 24.109511,13.034694 z`);
        leaf2.setAttribute("fill", "green");
        leaf2.setAttribute("stroke", "green");
        leaf2.setAttribute("stroke-width", "3");
        ytemp = y + 98;
        xtemp = x + 62;
        leaf2.setAttribute("transform", `translate(${xtemp}, ${ytemp}) scale(-0.8, 0.7) rotate(-25)`);
        svg.appendChild(leaf2);

        leaf2 = document.createElementNS(NS, "path");
        leaf2.setAttribute("d", `m 91.976683,-90.469186 c -1.03364,1.278047 
            -3.2414,5.202377 -14.47194,0.46015 -10.239041,-4.32359 -13.230291,
            -16.530744 -9.637561,-13.494854 9.600781,8.112597 15.285261,
            3.789707 24.109511,13.034694 z`);
        leaf2.setAttribute("fill", "green");
        leaf2.setAttribute("stroke", "green");
        leaf2.setAttribute("stroke-width", "3");
        ytemp = y + 95;
        xtemp = x - 24;
        leaf2.setAttribute("transform", `translate(${xtemp}, ${ytemp}) scale(-0.8, 0.7) rotate(-75)`);
        svg.appendChild(leaf2);

    } else if (num == 5) {
        let leaf2 = document.createElementNS(NS, "path");
        leaf2.setAttribute("d", `m 91.976683,-90.469186 c -1.03364,1.278047 
            -3.2414,5.202377 -14.47194,0.46015 -10.239041,-4.32359 -13.230291,
            -16.530744 -9.637561,-13.494854 9.600781,8.112597 15.285261,
            3.789707 24.109511,13.034694 z`);
        leaf2.setAttribute("fill", "green");
        leaf2.setAttribute("stroke", "green");
        leaf2.setAttribute("stroke-width", "3");
        ytemp = y + 45;
        xtemp = x - 72;
        leaf2.setAttribute("transform", `translate(${xtemp}, ${ytemp}) scale(0.8, 0.7) rotate(25)`);
        svg.appendChild(leaf2);

        leaf2 = document.createElementNS(NS, "path");
        leaf2.setAttribute("d", `m 91.976683,-90.469186 c -1.03364,1.278047 
            -3.2414,5.202377 -14.47194,0.46015 -10.239041,-4.32359 -13.230291,
            -16.530744 -9.637561,-13.494854 9.600781,8.112597 15.285261,
            3.789707 24.109511,13.034694 z`);
        leaf2.setAttribute("fill", "green");
        leaf2.setAttribute("stroke", "green");
        leaf2.setAttribute("stroke-width", "3");
        ytemp = y - 32;
        xtemp = x - 62;
        leaf2.setAttribute("transform", `translate(${xtemp}, ${ytemp}) scale(0.8, 0.7) rotate(75)`);
        svg.appendChild(leaf2);
        
        leaf2 = document.createElementNS(NS, "path");
        leaf2.setAttribute("d", `m 91.976683,-90.469186 c -1.03364,1.278047 
            -3.2414,5.202377 -14.47194,0.46015 -10.239041,-4.32359 -13.230291,
            -16.530744 -9.637561,-13.494854 9.600781,8.112597 15.285261,
            3.789707 24.109511,13.034694 z`);
        leaf2.setAttribute("fill", "green");
        leaf2.setAttribute("stroke", "green");
        leaf2.setAttribute("stroke-width", "3");
        ytemp = y + 98;
        xtemp = x + 62;
        leaf2.setAttribute("transform", `translate(${xtemp}, ${ytemp}) scale(-0.8, 0.7) rotate(-25)`);
        svg.appendChild(leaf2);

        leaf2 = document.createElementNS(NS, "path");
        leaf2.setAttribute("d", `m 91.976683,-90.469186 c -1.03364,1.278047 
            -3.2414,5.202377 -14.47194,0.46015 -10.239041,-4.32359 -13.230291,
            -16.530744 -9.637561,-13.494854 9.600781,8.112597 15.285261,
            3.789707 24.109511,13.034694 z`);
        leaf2.setAttribute("fill", "green");
        leaf2.setAttribute("stroke", "green");
        leaf2.setAttribute("stroke-width", "3");
        ytemp = y + 95;
        xtemp = x - 24;
        leaf2.setAttribute("transform", `translate(${xtemp}, ${ytemp}) scale(-0.8, 0.7) rotate(-75)`);
        svg.appendChild(leaf2);

        leaf2 = document.createElementNS(NS, "path");
        leaf2.setAttribute("d", `m 91.976683,-90.469186 c -1.03364,1.278047 
            -3.2414,5.202377 -14.47194,0.46015 -10.239041,-4.32359 -13.230291,
            -16.530744 -9.637561,-13.494854 9.600781,8.112597 15.285261,
            3.789707 24.109511,13.034694 z`);
        leaf2.setAttribute("fill", "green");
        leaf2.setAttribute("stroke", "green");
        leaf2.setAttribute("stroke-width", "3");
        ytemp = y - 54;
        xtemp = x - 33;
        leaf2.setAttribute("transform", `translate(${xtemp}, ${ytemp}) scale(0.8, 0.7) rotate(95)`);
        svg.appendChild(leaf2);
    }
}

export function drawLetter(svg, x, y, typeStem, numBerries, numLeaves, rotat) {
    let svg_internal = document.createElementNS(NS, "g");
    if (rotat % 360 != 0) {
        rotat -= 40;
    }
    svg_internal.setAttribute("transform", `rotate(${rotat}, ${x + 14}, ${y + 49.5})`);
    drawStem(svg_internal, x, y, typeStem);
    drawLeaf(svg_internal, x, y, numLeaves, typeStem);
    drawBerry(svg_internal, x, y, numBerries, typeStem);
    svg.appendChild(svg_internal);
    console.log(svg_internal);
}