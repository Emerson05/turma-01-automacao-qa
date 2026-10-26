import {test, describe, expect} from 'vitest'

describe('Calcular raiz quadrada de um número', () => {
    test('Retorna a raiz quadrada de um número perfeito', () => {
        expect(Math.sqrt(25)).toBe(1);
        expect(Math.sqrt(9)).toBe(3);
    });

    test('Retorna NaN se o número for negativo', () => {
        expect(Math.sqrt(-1)).toBeNaN();
    });

    test('Retorna 0 se for passado um 0', () => {
        expect(Math.sqrt(0)).toBe(0);
    });
});