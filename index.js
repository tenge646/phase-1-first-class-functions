function receivesAFunction(callback) {
 
  if (typeof callback === "function") {
    callback();
  }
}

function returnsANamedFunction() {
    
    function namedFunction() {
      
    }
  
    return namedFunction;
  }

  function returnsAnAnonymousFunction() {
    
    return function () {
     
    };
  }

  