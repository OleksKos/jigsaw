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


// let newArray = [];
// let firstRight = array[0].edges.right.edgeTypeId;
// let first = array[0].edges.right.type;
// console.log(firstRight, first)
// function arrayWithOutNull(array) {
//   // console.log(array.length);
//   // console.log(firstRight);
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].edges.left === null) {
//       array[i].edges.left = { edgeTypeId: 0, type: "0" }
//     }
//     if (array[i].edges.top === null) {
//       array[i].edges.top = { edgeTypeId: 0, type: "0" }
//     }
//     if (array[i].edges.right === null) {
//       array[i].edges.right = { edgeTypeId: 0, type: "0" }
//     }
//     if (array[i].edges.bottom === null) {
//       array[i].edges.bottom = { edgeTypeId: 0, type: "0" }
//     }
//   }
//   return array
// }
// newArray = arrayWithOutNull(array);
// arrayWithOutNull(array);

for (let i = 0; i < array.length; i++) {
  const element = array[i];

  function getFiniteValue(element) {
    getProp(element);

    function getProp(o) {
      for (var prop in o) {
        if (typeof (o[prop]) === 'object') {
          getProp(o[prop]);
        } else {
          if (o[prop] === 7 && o[prop] === 'inside') {
            console.log(i);
          }
          console.log(prop, ' ', o[prop]);
        }

      }

    }

  }
  getFiniteValue(element);
}


// console.log(newArray);

// let newArray2 = newArray.filter(item => {
//   if (item.edges.bottom.edgeTypeId === 7 && item.edges.bottom.type !== first) {
//     return true;
//   }
// })
// console.log(newArray2)


// var results = [];
// var searchField = "edgeTypeId";
// var searchVal = "7";

// for (let key in newArray[0].edges) {
//   console.log(newArray[0].edges[key])
//   // if (newArray[0].edges[key].edgeTypeId === 7) {
//   //   return newArray[0];
//   // }
//   // for (var i = 0; i < newArray[0].edges.length; i++) {
//   //   if (newArray[0].edges[i][searchField] === top) {
//   //     results.push(newArray[0].edges[i]);
//   //   }
//   // }
// }
// function search(newArray33) {
//   // console.log(newArray33.edges)
//   for (let i = 0; i < 4; i++) {
//     // console.log(newArray33.edges[i])
//     // if (newArray33.edges[i].edgeTypeId === 7) {
//     //   // results.push(newArray[0].edges[i]);
//     //   console.log(newArray.edges);
//     // }
//   }
// }
// search(newArray[0]);
// console.log(results);

// for (var i = 0; i < 4; i++) {
//   // console.log(newArray[0].edges);
//   for (key in newArray[0].edges) {
//     if (newArray[0].edges[key] === 'top') {
//       //   results.push(objects[i]);
//       console.log('coool');
//     }
//   }
// }

// getFiniteValue(array);