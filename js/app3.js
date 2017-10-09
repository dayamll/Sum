var arreglo = [1, 2, 3, 4, 5]
  var sum = function(array){
    var resultado = 0;
    for (var index = 0; index < array.length; index++) {
      resultado = resultado + array[index]; // acumular
    }
    return resultado;
  }

  // console.log(sum(arreglo) == 15) // true
  // console.log(sum([5, 10, 15]) == 30)

  var range = function(start, end, step){
    var array = [];

    if(start < end){
      if(step == undefined){
        step = 1;
      }
      for(var i = start; i<= end; i+=step){
        array.push(i)
      }
    } else {
      if(step == undefined){
        step = -1;
      }
      for(var i = start; i>= end; i+=step){
        array.push(i)
      }
    }
      
    return array;
  }

  console.log(sum(range(1, 5)) == 15) // true
  console.log(sum(range(5, 15, 5)) == 30)