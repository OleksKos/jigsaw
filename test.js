array = [
  {
    id: 1,
    edges: {
      top: null,
      right: { edgeTypeId: 7, type: "outside" },
      bottom: { edgeTypeId: 5, type: "inside" },
      left: null,
    },
  },
  {
    id: 9,
    edges: {
      top: { edgeTypeId: 8, type: "inside" },
      right: { edgeTypeId: 15, type: "inside" },
      bottom: null,
      left: { edgeTypeId: 5, type: "outside" },
    },
  },
  {
    id: 5,
    edges: {
      top: null,
      right: { edgeTypeId: 2, type: "inside" },
      bottom: { edgeTypeId: 1, type: "inside" },
      left: null,
    },
  },
  {
    id: 4,
    edges: {
      top: { edgeTypeId: 34, type: "inside" },
      right: { edgeTypeId: 11, type: "outside" },
      bottom: { edgeTypeId: 7, type: "inside" },
      left: null,
    },
  },
  {
    id: 3,
    edges: {
      top: { edgeTypeId: 2, type: "outside" },
      right: null,
      bottom: { edgeTypeId: 4, type: "outside" },
      left: { edgeTypeId: 6, type: "inside" },
    },
  },
  {
    id: 2,
    edges: {
      top: { edgeTypeId: 3, type: "outside" },
      right: { edgeTypeId: 34, type: "outside" },
      bottom: null,
      left: null,
    },
  },
  {
    id: 8,
    edges: {
      top: null,
      right: { edgeTypeId: 15, type: "outside" },
      bottom: { edgeTypeId: 4, type: "inside" },
      left: null,
    },
  },
  {
    id: 7,
    edges: {
      top: { edgeTypeId: 3, type: "inside" },
      right: null,
      bottom: { edgeTypeId: 1, type: "outside" },
      left: { edgeTypeId: 10, type: "inside" },
    },
  },
  {
    id: 6,
    edges: {
      top: { edgeTypeId: 11, type: "inside" },
      right: { edgeTypeId: 10, type: "outside" },
      bottom: { edgeTypeId: 6, type: "outside" },
      left: { edgeTypeId: 8, type: "outside" },
    },
  },
];

// array[0].edges.top = { edgeTypeId: 7, type: "outside" };
// console.log(array)
let newArray = [];
let firstRight = array[0].edges.right.edgeTypeId;
function rightArray(array) {
  // console.log(array.length);
  // console.log(firstRight);
  for (let i = 0; i < array.length; i++) {
    if (array[i].edges.left === null) {
      array[i].edges.left = { edgeTypeId: 0, type: "0" }
    }
    if (array[i].edges.top === null) {
      array[i].edges.top = { edgeTypeId: 0, type: "0" }
    }
    if (array[i].edges.right === null) {
      array[i].edges.right = { edgeTypeId: 0, type: "0" }
    }
    if (array[i].edges.bottom === null) {
      array[i].edges.bottom = { edgeTypeId: 0, type: "0" }
    }
  }
  return array
}
newArray = rightArray(array);
// console.log(newArray);

let newArray2 = newArray.filter(item => {
  if (item.edges.bottom.edgeTypeId === 7) {
    return true;
  }
})
console.log(newArray2[0].id)
rightArray(array);
// console.log(newArray);