//*********************************          
// Llamado de función codificado         
document.getElementById("buttonEncode").addEventListener("click", function (){
     let resultados   = document.getElementById("resultados");
         resultados.value= cipher.encode(document.getElementById('offset').value,document.getElementById('message').value);   
  }); 

//*********************************      
// Llamado de función de decodificado  
  document.getElementById("buttonDecode").addEventListener("click", function(){
      let resultados = document.getElementById("resultados");
          resultados.value= cipher.decode(document.getElementById('offset').value,document.getElementById('message').value);
}); 

//*********************************      
// Llamado función de limpieza de áreas de texto
document.getElementById('buttonClear').addEventListener('click',function clear(){
  document.getElementById('message').value='';
  document.getElementById('offset').value='';
  document.getElementById('resultados').value=''
  document.getElementById('downLoadLink').style="none";
}); 

  
//*********************************
//Función para guardar mensaje en archivo de texto
      (function () {
          let textFile = null,
            makeTextFile = function (text) {
              let data = new Blob([text], {type: 'text/plain'});
          

              if (textFile !== null) {
                window.URL.revokeObjectURL(textFile);
              }
          
              textFile = window.URL.createObjectURL(data);
          
              return textFile;
            };
          
          
            let create = document.getElementById('buttonSave'),
              textbox = document.getElementById('resultados'),
              offsetcode= document.getElementById('offset');
              

              create.addEventListener('click', function () {
              let link = document.getElementById('downLoadLink');
              link.href = makeTextFile(textbox.value+' '+ offsetcode.value);
              link.style.display = 'block';
            }, false);
          })();

