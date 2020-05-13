window.cipher = {
  encode: (offset,string) => {
    let newText='';
    let newOffset=parseInt(offset);
//VALIDACIÓN DE TIPO DE OFFSET Y QUE STRING SEA DISTINTO DE VACÍO
      if((string==='')||(offset==='')||(offset==='e')||(offset==='E')){ //valida cadena vacía
        return ('Ingrese nivel de seguridad (número entero) y texto para transformar');
       }    
        else{
        
        for(let i=0; i<=(string.length-1); i++){ 
        
//TRANSFORMA VOCALES MAYÚSCULAS CON ACENTOS, VOCALES MINÚSCULAS CON ACENTO, ñ, Ñ Y ESPACIO
        if ((string.charCodeAt(i)===193) || (string.charCodeAt(i)===201) || (string.charCodeAt(i)===205) || (string.charCodeAt(i)===211) || (string.charCodeAt(i)===218) ||
        (string.charCodeAt(i)===225) || (string.charCodeAt(i)===233) || (string.charCodeAt(i)===237) || (string.charCodeAt(i)===243) ||(string.charCodeAt(i)===250)||
         (string.charCodeAt(i)===209)||(string.charCodeAt(i)===241)||
         (string.charCodeAt(i)===32)){
             newText += String.fromCharCode(string.charCodeAt(i)+153) ;
        }
        else{
            if((string.charCodeAt(i)===346) || (string.charCodeAt(i)===354) || (string.charCodeAt(i)===358) || (string.charCodeAt(i)===364) || (string.charCodeAt(i)===371) ||
            (string.charCodeAt(i)===378) || (string.charCodeAt(i)===386) || (string.charCodeAt(i)===390) || (string.charCodeAt(i)===396) ||(string.charCodeAt(i)===403) ||
            (string.charCodeAt(i)===362)||(string.charCodeAt(i)===394)||
            (string.charCodeAt(i)===185)){
                   newText += String.fromCharCode(string.charCodeAt(i)-153) ;
            }

//OFFSET POSITIVO    
//TRANSFORMA ABECEDARIO SIMPLE MAYÚSCULAS                                     
            else{                              
              if (newOffset>=0){
                if((string.charCodeAt(i)>=65)&&(string.charCodeAt(i)<=90)){ //Modifica abecedario simple mayúscula
                  newText += String.fromCharCode((string.charCodeAt(i)+newOffset-65)%26 + 65);
                }

//TRANSFORMA ABECEDARIO SIMPLE MINÚSCULAS                                                                                                              
                 else{
                  if((string.charCodeAt(i)>=97)&&(string.charCodeAt(i)<=122)){ //Modifica abecedario simple minúscula
                    newText +=String.fromCharCode((string.charCodeAt(i)+newOffset-97)%26 + 97);
                   }

//TRANSFORMA DÍGITOS 0 AL 9                                                                                                                  
                   else{
                    if((string.charCodeAt(i)>=48)&&(string.charCodeAt(i)<=57)){ //Modifica números
                      newText += (String.fromCharCode((string.charCodeAt(i)+newOffset-48)%10+48));
                   }

//MANTIENE CUALQUIER OTRO CARACTER DISTINTO DE LOS TRANSFORMADOS EN LOS CASOS ANTERIORES                                                                                                                
                 else{
                      newText +=string.charAt(i);
                       }
                      }
                     }
                   }

//OFFSET NEGATIVO                

//ABECEDARIO SIMPLE MAYÚSCULAS                
            else{
              if((string.charCodeAt(i)>=65)&&(string.charCodeAt(i)<=90)){//Modifica abecedario simple mayúscula
                newText += String.fromCharCode((string.charCodeAt(i) - Math.abs(newOffset)-90)%26 + 90);
              }

              //ABECEDARIO SIMPLE MINÚSCULAS
               else{
                 if((string.charCodeAt(i)>=97)&&(string.charCodeAt(i)<=122)){//modifica abecedario simple minúscula
                  newText += String.fromCharCode((string.charCodeAt(i)-Math.abs(newOffset)-122)%26 + 122);
                 }

//DÍGITOS 0 AL 9                              
                 else{
                   if((string.charCodeAt(i)>=48)&&(string.charCodeAt(i)<=57)){//Modifica números
                    newText += String.fromCharCode((string.charCodeAt(i)-Math.abs(newOffset)-57)%10 + 57);
                   }  

//MANTIENE CUALQUIER OTRO CARACTER DISTINTO DE LOS TRANSFORMADOS EN LOS CASOS ANTERIORES
                   else{
                    newText +=string.charAt(i);
                       } 
                      }      
                     }
                    }
                   }   
                  }
                 }                                                                                                    
    return newText; 
          }                            
  },
  decode: (offset,string) => {
  //VALIDACIÓN DE TIPO DE OFFSET Y QUE STRING SEA DISTINTO DE VACÍO
    if((string==='')||(offset==='')||(offset==='e')||(offset==='E')){ //valida cadena vacía
      return ('Ingrese nivel de seguridad (número entero) y texto para transformar');
    }
  
    else{
      let newOffset=parseInt(offset);
      let changeOffsetSign= -newOffset;
      return cipher.encode(changeOffsetSign,string); 
      
    }
  }
};
