describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

  //Validación ingreso de string y offset número
    it('debería retornar "Ingrese nivel de seguridad (número entero) y texto para transformar" para "" con offset ""',()=>{
      assert.equal(cipher.encode("",""),'Ingrese nivel de seguridad (número entero) y texto para transformar');
    });
    it('debería retornar "Ingrese nivel de seguridad (número entero) y texto para transformar" para "A" con offset "e"',()=>{
      assert.equal(cipher.encode("e","A"),'Ingrese nivel de seguridad (número entero) y texto para transformar');
    });

    it('debería retornar "Ingrese nivel de seguridad (número entero) y texto para transformar" para "A" con offset "E"',()=>{
      assert.equal(cipher.encode("E","A"),'Ingrese nivel de seguridad (número entero) y texto para transformar');
    });

//CODIFICADO OFFSET POSITIVO
  //Alfabeto simple Mayúscula
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',()=>{
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

  //Alfabeto simple minúscula
    it('debería retornar "bcdefghijklmnopqrstuvwxyza" para "abcdefghijklmnopqrstuvwxyz" con offset 27',()=>{
      assert.equal(cipher.encode(27,"abcdefghijklmnopqrstuvwxyz" ),"bcdefghijklmnopqrstuvwxyza" );
    });
  
  //Números
    it('debería retornar "1234567890" para "0123456789" con offset 11',()=>{
      assert.equal(cipher.encode(11,"0123456789"),"1234567890");
    });

  //Vocales con acento mayúsculas y minúsculas, Ñ y ñ, ""
    it('debería retornar "ŚŢŦŬųźƂƆƌƓƊŪ¹" para "ÁÉÍÓÚáéíóúñÑ " con offset 33',()=>{
      assert.equal(cipher.encode(33,"ÁÉÍÓÚáéíóúñÑ " ),"ŚŢŦŬųźƂƆƌƓƊŪ¹" );
    });

   //Cualquier otro caracter
    it('debería retornar "°!#$%&/()=?¡" para "°!#$%&/()=?¡" con offset 27',()=>{
      assert.equal(cipher.encode(27,"°!#$%&/()=?¡" ),"°!#$%&/()=?¡" );
    });

    //CODIFICADO OFFSET NEGATIVO
    //Abecedario simple mayúsculas
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset -33',()=>{
      assert.equal(cipher.encode(-33,"HIJKLMNOPQRSTUVWXYZABCDEFG" ),"ABCDEFGHIJKLMNOPQRSTUVWXYZ" );
    });

    //Abecedario simple minúsculas
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "bcdefghijklmnopqrstuvwxyza" con offset -27',()=>{
      assert.equal(cipher.encode(-27,"bcdefghijklmnopqrstuvwxyza" ),"abcdefghijklmnopqrstuvwxyz" );
    });

    //Números
    it('debería retornar "0123456789" para "1234567890" con offset -11',()=>{
      assert.equal(cipher.encode(-11,"1234567890" ),"0123456789" );
    });

    //Vocales con acento mayúsculas y minúsculas, Ñ y ñ, ""
    it('debería retornar "ŚŢŦŬųźƂƆƌƓƊŪ¹" para "ÁÉÍÓÚáéíóúñÑ " con offset -33',()=>{
      assert.equal(cipher.encode(-33,"ÁÉÍÓÚáéíóúñÑ " ),"ŚŢŦŬųźƂƆƌƓƊŪ¹" );
    });

   //Cualquier otro caracter
    it('debería retornar "°!#$%&/()=?¡" para "°!#$%&/()=?¡" con offset -27',()=>{
      assert.equal(cipher.encode(-27,"°!#$%&/()=?¡" ),"°!#$%&/()=?¡" );
    });
   });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
  //Validación ingreso de string
  it('debería retornar "Ingrese nivel de seguridad (número entero) y texto para transformar" para "" con offset ""',()=>{
    assert.equal(cipher.decode("",""),'Ingrese nivel de seguridad (número entero) y texto para transformar');
  });
  it('debería retornar "Ingrese nivel de seguridad (número entero) y texto para transformar" para "A" con offset "e"',()=>{
    assert.equal(cipher.decode("e","A"),'Ingrese nivel de seguridad (número entero) y texto para transformar');
  });

  it('debería retornar "Ingrese nivel de seguridad (número entero) y texto para transformar" para "A" con offset "E"',()=>{
    assert.equal(cipher.decode("E","A"),'Ingrese nivel de seguridad (número entero) y texto para transformar');
  });
//OFFSET POSITIVO
  //Abecedario simple mayúsculas
  it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
    assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  });

  //Abecedario simple minúsculas
  it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "bcdefghijklmnopqrstuvwxyza" con offset 27',()=>{
    assert.equal(cipher.decode(27,"bcdefghijklmnopqrstuvwxyza"),"abcdefghijklmnopqrstuvwxyz");
  });

  //Números
  it('debería retornar "0123456789" para "1234567890" con offset 11',()=>{
    assert.equal(cipher.decode(11,"1234567890" ),"0123456789");
  });

  //Vocales con acento mayúsculas y minúsculas, Ñ y ñ, ""
  it('debería retornar "ÁÉÍÓÚáéíóúñÑ " para "ŚŢŦŬųźƂƆƌƓƊŪ¹" con offset 33',()=>{
    assert.equal(cipher.decode(33,"ŚŢŦŬųźƂƆƌƓƊŪ¹"),"ÁÉÍÓÚáéíóúñÑ ");
  });

 //Cualquier otro caracter
  it('debería retornar "°!#$%&/()=?¡" para "°!#$%&/()=?¡" con offset 27',()=>{
    assert.equal(cipher.decode(27,"°!#$%&/()=?¡"),"°!#$%&/()=?¡");
  });


//DECODIFICADO OFFSET NEGATIVO
  //Abecedario simple mayúsculas
  it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset -33',()=>{
    assert.equal(cipher.decode(-33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
  });

  //Abecedario simple minúsculas
  it('debería retornar "bcdefghijklmnopqrstuvwxyza" para "abcdefghijklmnopqrstuvwxyz" con offset -27',()=>{
    assert.equal(cipher.decode(-27,"abcdefghijklmnopqrstuvwxyz"),"bcdefghijklmnopqrstuvwxyza");
  });

  //Números
  it('debería retornar "1234567890" para "0123456789" con offset -11',()=>{
    assert.equal(cipher.decode(-11,"0123456789"),"1234567890");
  });

  //Vocales con acento mayúsculas y minúsculas, Ñ y ñ, ""
  it('debería retornar "ÁÉÍÓÚáéíóúñÑ " para "ŚŢŦŬųźƂƆƌƓƊŪ¹" con offset -33',()=>{
    assert.equal(cipher.decode(-33,"ŚŢŦŬųźƂƆƌƓƊŪ¹"),"ÁÉÍÓÚáéíóúñÑ ");
  });
  //Cualquier otro caracter
  it('debería retornar "°!#$%&/()=?¡" para "°!#$%&/()=?¡" con offset -27',()=>{
    assert.equal(cipher.decode(-27,"°!#$%&/()=?¡" ),"°!#$%&/()=?¡" );
  });
  });
});
