// print out a 2D array in clockwise direction
// ----------
var arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
var arr3 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
var arr4 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14,15,16]];
var arr5 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14,15,16], [17, 18, 19, 20]];
var arr6 = [[1], [2], [3]];
var arr7 = [[1], [2]];

function sortArray (arr) {
  var rr = [];
  function clockAll (arr) {
    var newArr = [];
    var m1 = [];
    var m2 = [];
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
          m1.push(arr[i][m-1]);
          if (m > 1) {
            m2.push(arr[i][0]);
          }
        }
      }
      
      rr.push(arr[0]);
      if (m1.length > 0) {
        rr.push(m1);
      }
      if (n > 1) {
        rr.push(arr[n - 1].reverse());
      }
      if (m2.length > 0) {
        rr.push(m2.reverse());
      }
      
      arr = arr.slice(1, n - 1);
      for (var key in arr) {
        var arrayli = arr[key];
        newArr.push(arrayli.slice(1, arrayli.length - 1));
      }
      clockAll(newArr);
    }
    
  }
  clockAll(arr);
  console.log(rr.toString());
}
sortArray(arr1);
sortArray(arr2);
sortArray(arr3);
sortArray(arr4);
sortArray(arr5);
sortArray(arr6);
sortArray(arr7);
