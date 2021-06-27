
var nodes = null;
var edges = null;
var network = null;
var mateImagePath = 'https://whatemoji.org/wp-content/uploads/2020/07/Red-Heart-Emoji.png';
function getImagePath(id) {
  if (id === undefined) {
    return `https://storage.googleapis.com/axie-cdn/avatars/egg/beast-beast-egg-full-transparent.png`;
  } else {
    return `https://storage.googleapis.com/assets.axieinfinity.com/axies/${id}/axie/axie-full-transparent.png`;
  }
}

function draw() {
  // create list of axies
  nodes = [
    // Origin
    { id: 1, shape: "circularImage", image: mateImagePath, label: "WooHoo!" },
    { id: 2, shape: "circularImage", image: getImagePath(931798), label: "931798s" },
    { id: 3, shape: "circularImage", image: getImagePath(864419), label: "864419" },
    
    // First Generation
    { id: 4, shape: "circularImage", image: getImagePath(), label: "1103854" },
    { id: 5, shape: "circularImage", image: getImagePath(), label: "1103879" },
    { id: 6, shape: "circularImage", image: getImagePath(), label: "1103981" },
    { id: 7, shape: "circularImage", image: getImagePath(), label: "1104000" }

  ];

  // create connections between people
  // value corresponds with the amount of contact between two people
  edges = [
    { from: 2, to: 1 },
    { from: 3, to: 1 },
    { from: 1, to: 4 },
    { from: 4, to: 5 },
    { from: 5, to: 6 },
    { from: 6, to: 7 },
  ];

  // create a network
  var container = document.getElementById("breedingHistory");
  var data = {
    nodes: nodes,
    edges: edges,
  };

  var options = {
    nodes: {
      borderWidth: 4,
      size: 30,
      color: {
        border: "#222222",
        background: "#666666",
      },
      font: { color: "#eeeeee" },
    },
    edges: {
      color: "lightgray",
    },
  };
  network = new vis.Network(container, data, options);
}

window.addEventListener("load", () => {
  draw();
});