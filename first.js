/**
 * Created by nattanlucena on 30/06/16.
 */


(function (_) {

    var cars = [
        {model: "jetta", brand: "vw", year: 2015},
        {model: "focus", brand: "ford", year: 2014},
        {model: "cruze", brand: "chevy", year: 2016},
        {model: "q3", brand: "audi", year: 2015}
    ];


    var cloneObj = {
        clone : function (obj) {
            if (typeof obj === "object") {
                var clone = {};
                for (var prop in obj) {
                    if (obj.hasOwnProperty(prop)) {
                        clone[prop] = obj[prop];
                    }
                }
                return clone;
            }
        },
        map: function (list, callback) {
            var resultList = [];
            for(var i=0; i<list.length; i++){
                resultList.push(callback(list[i]));
            }
            return resultList;
        },
        toClone: function() {
            if(arguments[0] === 'object') {
                return function (obj) {
                    var clone = {};
                    for (var prop in obj) {
                        if (obj.hasOwnProperty(prop)) {
                            clone[prop] = obj[prop];
                        }
                    }
                    return clone;
                }
            }
            if(arguments[0] === 'array') {
                return function (obj) {
                    var arrClone = [];
                    for (var i=0; i < obj.length; i++) {
                        arrClone.push(obj);
                    }
                    return arrClone;
                }
            }
        }
    }


   var result = cloneObj.map(cars, function (car) {
      if( typeof car.brand !== 'undefined' &&
            typeof car.year !== 'undefined' &&
              typeof car.model !== 'undefined'
        ) {
            var clone = cloneObj.toClone("object");
            var car = clone(car);
            car.cloned = "yes";
      }
       return car;
   });

    console.log(result);

})();