var arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
var arr3 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
var arr4 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14,15,16]];
var arr5 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14,15,16], [17, 18, 19, 20]];
var arr6 = [[1], [2], [3]];
var arr7 = [[1], [2]];

function sortArray (arr, dir) {
  var result = [];
  dir = dir || 'clockwise'; // default to clockwise
  function clockAll (arr) {
    var middleArray = [];
    var leftWall = [];
    var rightWall = [];
    var n;
    var m;
    
    if (Array.isArray(arr)) {
      n = arr.length;
      
      if (Array.isArray(arr[0])) {
        m = arr[0].length;
      }
    }
    
    if (n > 0) {
      
      if (m > 0) {
        for (var i = 1; i < n - 1; i++) {
          leftWall.push(arr[i][m-1]);
          if (m > 1) {
            rightWall.push(arr[i][0]);
          }
          middleArray.push(arr[i].slice(1, arr[i].length - 1));
        }
      }
      if (dir === 'clockwise') {
        result.push(arr[0]);
        if (leftWall.length > 0) {
          result.push(leftWall);
        }
        if (n > 1) {
          result.push(arr[n - 1].reverse());
        }
        if (rightWall.length > 0) {
          result.push(rightWall.reverse());
        }
      } else if (dir === 'counterClockwise') {
        result.push(arr[0][0]);
        if (rightWall.length > 0) {
          result.push(rightWall);
        }
        if (n > 1) {
          result.push(arr[n - 1]);
        }
        if (leftWall.length > 0) {
          result.push(leftWall.reverse());
        }
        if (m > 1) {
          result.push(arr[0].slice(1).reverse());
        }
      }
      clockAll(middleArray);
    }
    
  }
  clockAll(arr);
  console.log(result.toString());
}
sortArray(arr1, 'counterClockwise');
sortArray(arr2);
sortArray(arr3);
// sortArray(arr4);
// sortArray(arr5);
// sortArray(arr6);
// sortArray(arr7);
