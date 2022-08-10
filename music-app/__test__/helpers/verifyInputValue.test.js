import { verifyInputValue } from '../../src/helpers/verifyInputValue';

describe('Pruebas en verifyInputValue', () => {

    test('Debe de retornar el string apto para mandarlo en el path dal API', () => {
      
        const inputValue = ' MICHAEL jacKSON ';
        const verifiedInputValue = verifyInputValue(inputValue);

        expect(verifiedInputValue).toBe('michael+jackson');
    });
    
  
});
