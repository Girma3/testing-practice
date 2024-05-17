import { capitalize} from './functions'
test('two plus two is four', () => {
    expect(sum(2, 2)).toBe(4);
  });
//test for capitalize check the first letter for string
//check it return string ,check the first letter is  capital 
  test('accept string',() =>{
    expect(capitalize('you').toBe(String))

  });
  
