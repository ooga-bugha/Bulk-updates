readFile = function (fileInput) {
  console.log(fileInput);
  var csvArray = [];
  var i = 0;
  var element = "";
  var reader = new FileReader();
  reader.onload = function () {
    var final = reader.result;
    while(i<final.length){
      if(final[i]=="\n"){
        csvArray.push(element.split(","));
        element = "";
      }
      else{
        element = element + final[i];
      }
      i++;
    }
  };
  // start reading the file. When it is done, calls the onload event defined above.
};