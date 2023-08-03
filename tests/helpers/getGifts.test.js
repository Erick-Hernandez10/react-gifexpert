
import { getGifs } from "../../src/helpers/getGifts"

describe('Pruebas en Gifts()',() => {

  test('Debe de retornar un arreglo de gifts',async()=>{
        const gifs = await getGifs('one Punch');

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id:    expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
  })

})