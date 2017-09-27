$(document).ready(function () {
   var test = [1,2,3];
   var result = _.map(test,function (num) {
       return num * 3 ;
   });
    console.log(result);
});