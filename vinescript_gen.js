import { leafMap } from "./leafdata.js";
import { generateVinePath, genRandomPoints } from "./vineGen.js"

let points = [{ x: 10 , y: 0 },
              { x: 49 , y: 0 }];
let draggedGroup = null;
let offset = { x: 0, y: 0 };
let tension = 0.5;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function generateSVG() {
  const input = document.getElementById('word-input').value.trim().toLowerCase();
  tension = document.getElementById('tension-slider').value.trim().toLowerCase();
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  const altOrientation = document.getElementById('alternating-orientation').checked;
  
  // Set SVG dimensions
  svg.setAttribute("width", 800);
  svg.setAttribute("height", 200);
  
  // Clear previous output
  const output = document.getElementById('svg-output');
  output.innerHTML = '';
  output.appendChild(svg);
  
  // Make the svg element for the vine
  const yrandMax = document.getElementById("max-yrand").value.trim();
  const yrandMin = document.getElementById("min-yrand").value.trim();
  points = genRandomPoints(input.length, yrandMin, yrandMax)

  const vinePathData = generateVinePath(points, tension);
  
  const vinePath = document.createElementNS(svgNS, "path");
  vinePath.setAttribute("id", "vine_path");
  vinePath.setAttribute("d", `${vinePathData}`);
  vinePath.setAttribute("fill", "none");
  vinePath.setAttribute("stroke", "green");
  vinePath.setAttribute("stroke-width", "4");
  svg.appendChild(vinePath);
  
  let x = 40;
  let y = - 40;
  let rotat = 0;
  let index = 1;


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

  // console.log('SVG injected:', document.getElementById('svg-output').innerHTML);

  document.getElementById('svg-output').querySelectorAll('g').forEach(group => {

    group.addEventListener('mousedown', (e) => {

      const group = e.target.closest('g');
      if (!group) return;

      draggedGroup = group;

      const match = /translate\(([^,]+),([^)]+)\)/.exec(group.getAttribute('transform'));
      const startX = parseFloat(match?.[1] || 0);
      const startY = parseFloat(match?.[2] || 0);

      offset.x = e.clientX - startX;
      offset.y = e.clientY - startY;

      e.preventDefault();

      console.log('Group clicked:', group);
    });

    document.addEventListener('mousemove', (e) => {
      if (!draggedGroup) return;

      const x = e.clientX - offset.x;
      const y = e.clientY - offset.y;

      draggedGroup.setAttribute('transform', `translate(${x}, ${y})`);

      let curr_index = Number(draggedGroup.getAttribute("id"))
      points[curr_index].x += x;
      points[curr_index].y += y;

      // const tension = document.getElementById('tension-slider').value.trim().toLowerCase();
      
    });


    document.addEventListener('mouseup', () => {
      if (draggedGroup) {
        // Optionally do something after drag ends
        console.log('Dropped:', draggedGroup);
        draggedGroup = null;
        generateVinePath(points, tension);
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

// document.getElementById('tension-slider').addEventListener('change', generateSVG);

function updateSliderValue(val) {
  document.getElementById('sliderValue').textContent = parseFloat(val).toFixed(1);
}

// Wait for the DOM to load
window.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('tension-slider');
  
  // Set initial display
  updateSliderValue(slider.value);
  
  // Update display on input
  slider.addEventListener('input', () => {
    updateSliderValue(slider.value);
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