import { leafMap } from "./leafdata.js";
import { generateVinePath, genRandomPoints } from "./vineGen.js"

const NS = "http://www.w3.org/2000/svg";

let points = [{ x: 10 , y: 0 },
              { x: 49 , y: 0 }];
let points_unchanged = JSON.parse(JSON.stringify(points));
let draggedGroup = null;
let offset = { x: 0, y: 0 };
let tension = 0.5;
let svg_height = 200;
let svg_width = 800;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function generateSVG() {
  const input = document.getElementById('word-input').value.trim().toLowerCase();
  tension = document.getElementById('tension-slider').value.trim().toLowerCase();
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  const altOrientation = document.getElementById('alternating-orientation').checked;

  svg_width = Number(document.getElementById('svg-width').value.trim());
  svg_height = Number(document.getElementById('svg-height').value.trim());
  
  // Set SVG dimensions
  svg.setAttribute("width", svg_width);
  svg.setAttribute("id", "svg");
  
  // Clear previous output
  const output = document.getElementById('svg-output');
  output.innerHTML = '';
  output.appendChild(svg);
  
  // Make the svg element for the vine
  const yrandMax = document.getElementById("max-yrand").value.trim();
  const yrandMin = document.getElementById("min-yrand").value.trim();
  console.log("random points gen");
  let points_out = genRandomPoints(input.length, yrandMin, yrandMax);
  points = points_out[0];
  let rows = points_out[1];
  points_unchanged = JSON.parse(JSON.stringify(points));

  svg_height += rows*120;
  svg.setAttribute("height", svg_height);
  document.getElementById('svg-height').setAttribute('text', svg_height);

  const vinePathData = generateVinePath(points, tension);
  
  const vinePath = document.createElementNS(svgNS, "path");
  vinePath.setAttribute("id", "vine_path");
  vinePath.setAttribute("d", `${vinePathData}`);
  vinePath.setAttribute("fill", "none");
  vinePath.setAttribute("stroke", "green");
  vinePath.setAttribute("stroke-width", "4");
  svg.appendChild(vinePath);
  
  let x;
  let y;
  let rotat = 0;
  let index = 1;

  x = points[0].x ;
  y = points[0].y;

  const start_point_g = document.createElementNS(NS, "g");
  start_point_g.setAttribute("transform", ` translate(0, 0) rotate(0, 0, 0)`);
  start_point_g.setAttribute("id", `0`);
  start_point_g.setAttribute("class", "drag_circle");
  const start_point = document.createElementNS(NS, "circle");
  start_point.setAttribute("fill", "transparent");
  start_point.setAttribute("stroke", "transparent");
  start_point.setAttribute("r", "13");
  start_point.setAttribute("cx", `${x + 2}`);
  start_point.setAttribute("cy", `${y + 0}`);
  start_point.setAttribute("id", "circle");
  start_point_g.appendChild(start_point);
  svg.appendChild(start_point_g);

  for (const char of input) {
    const leaf = leafMap[char];
    if (leaf && typeof leaf.draw === "function") {

      x = points[index].x - 15;
      y = points[index].y - 49.5;

      leaf.draw(svg, x, y, rotat, index);

      index += 1;

      if (altOrientation == true) {
        rotat += 180;
      } 
    }
  }

  const end_point_g = document.createElementNS(NS, "g");
  end_point_g.setAttribute("transform", ` translate(0, 0) rotate(0, 0, 0)`);
  end_point_g.setAttribute("id", `${index}`);
  end_point_g.setAttribute("class", "drag_circle");
  const end_point = document.createElementNS(NS, "circle");
  end_point.setAttribute("fill", "transparent");
  end_point.setAttribute("stroke", "transparent");
  end_point.setAttribute("r", "10");
  end_point.setAttribute("cx", `${points[index].x - 2}`);
  end_point.setAttribute("cy", `${points[index].y - 1}`);
  end_point.setAttribute("id", "circle");
  end_point_g.appendChild(end_point);
  svg.appendChild(end_point_g);

  // console.log('SVG injected:', document.getElementById('svg-output').innerHTML);

  document.getElementById('svg-output').querySelectorAll('g').forEach(group => {

    group.addEventListener('mousedown', (e) => {

      const group = e.target.closest('g');
      if (!group) return;

      draggedGroup = group;

      const match = /translate\(([^,]+),([^)]+)\)/.exec(group.getAttribute('transform'));
      const startX = parseFloat(match?.[1] || 0);
      const startY = parseFloat(match?.[2] || 0);

      
      if (draggedGroup.getAttribute("class") == "drag_circle") {
        draggedGroup.querySelector('#circle').setAttribute("stroke", "green");
      }

      offset.x = e.clientX - startX;
      offset.y = e.clientY - startY;

      e.preventDefault();

      console.log('Group clicked:', group);
    });

    document.addEventListener('mousemove', (e) => {
      if (!draggedGroup) return;

      const x = e.clientX - offset.x;
      const y = e.clientY - offset.y;

      const regex = /([a-zA-Z]+)\(([^,]+)\s*,\s*([^,]+)\s*\)/;
      let new_transform = String(draggedGroup.getAttribute('transform'));
      new_transform = new_transform.replace(regex, `translate(${x}, ${y})`);

      draggedGroup.setAttribute('transform', new_transform);


      // let curr_index = Number(draggedGroup.getAttribute("id"))
      // points[curr_index].x += x;
      // points[curr_index].y += y;

      // const tension = document.getElementById('tension-slider').value.trim().toLowerCase();
      
    });


    document.addEventListener('mouseup', () => {
      if (draggedGroup) {
        // Optionally do something after drag ends
        // console.log('Dropped:', draggedGroup);

        if (draggedGroup.getAttribute("class") == "drag_circle") {
          draggedGroup.querySelector('#circle').setAttribute("stroke", "transparent");
        }
      
        let transformString = draggedGroup.getAttribute("transform");
        const regex  = /([a-zA-Z]+)\(([^,]+)\s*,\s*([^,]+)\s*\)/;

        let matches = regex.exec(transformString);    
        let curr_index = Number(draggedGroup.getAttribute("id"));

        points[curr_index].x = points_unchanged[curr_index].x + Number(matches[2]) - 2.5;
        points[curr_index].y = points_unchanged[curr_index].y + Number(matches[3]) + 2;

        const vinePathData = generateVinePath(points, tension);
        const svg_path = document.getElementById('vine_path');
        svg_path.setAttribute("d", `${vinePathData}`);

        draggedGroup = null;
      }
    });    

  });

}


document.getElementById('generate-btn').addEventListener('click', generateSVG);

document.getElementById('word-input').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    generateSVG();
  }
});

  
document.getElementById('svg-width').addEventListener('input', () => {

  
  const svg_div = document.getElementById('svg-output');
  const svg = document.getElementById('svg');
  const val_width = Number(document.getElementById('svg-width').value.trim());
  if (!svg) {
    svg_width = val_width;
    return; 
  }
  console.log(`height connected: ${val_width}`);
  svg.setAttribute("width", `${val_width}`);
  svg_div.setAttribute("width", `${val_width}`);
  

  const newSVG = svg.cloneNode(true); // Clone the SVG
  newSVG.setAttribute("height", `${val_width}`);
  svg.parentNode.replaceChild(newSVG, svg);
});

document.getElementById('svg-height').addEventListener('input', () => {
  const svg_div = document.getElementById('svg-output');
  const svg = document.getElementById('svg');
  const val_height = Number(document.getElementById('svg-height').value.trim());
  if (!svg) {
    svg_height = val_height;
    return; 
  }
  console.log(`height connected: ${val_height}`);
  svg.setAttribute("height", `${val_height}`);
  svg_div.setAttribute("height", `${val_height}`);
  

  const newSVG = svg.cloneNode(true); // Clone the SVG
  newSVG.setAttribute("height", `${val_height}`);
  svg.parentNode.replaceChild(newSVG, svg);
});

// document.getElementById('tension-slider').addEventListener('change', generateSVG);

function updateSliderValue(val) {
  document.getElementById('sliderValue').textContent = parseFloat(val).toFixed(1);
  tension = parseFloat(val).toFixed(1);
}

// Wait for the DOM to load
window.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('tension-slider');
  
  // Set initial display
  updateSliderValue(slider.value);
  
  // Update display on input
  slider.addEventListener('input', () => {
    updateSliderValue(slider.value);
    const vinePathData = generateVinePath(points, tension);
    const svg_path = document.getElementById('vine_path');
    svg_path.setAttribute("d", `${vinePathData}`);
  });
});

document.getElementById('downloadBtn').addEventListener('click', () => {
  const svg = document.getElementById('svg-output');
  
  // Serialize SVG to string
  const serializer = new XMLSerializer();
  const source = serializer.serializeToString(svg);
  
  // Add XML declaration for valid SVG file
  const svgBlob = new Blob(
    ['<?xml version="1.0" standalone="no"?>\n', source],
    { type: 'image/svg+xml;charset=utf-8' }
  );
  
  // Create download link
  const url = URL.createObjectURL(svgBlob);
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = 'vinescript.svg';
  
  // Trigger the download
  downloadLink.click();
  
  // Cleanup
  URL.revokeObjectURL(url);
});


// document.getElementById('svg-output').querySelectorAll('g').forEach(group => {
//   group.addEventListener('click', () => {
//     console.log('Group clicked:', group);
//   });
// });


// window.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('svg-output').querySelectorAll('g').forEach(group => {
//       group.addEventListener('click', () => {
//         console.log('Group clicked:', group.id || group);
//       });
//     });
// });