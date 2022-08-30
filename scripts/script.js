let x = {"k1":36.9, "k2":37.7, "k3":null, "k4":37.3, "k5":38.1, "k6":36.3};
for (let key in x) {
    if(x[key] === null){
    console.log( "the " + key + " key " + "is " + x[key] );}
  }