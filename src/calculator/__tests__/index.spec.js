/**
 * Necesito un metodo que permita sumar dos numeros
 */

import Calculator from './../index';

describe('Calculator', () => {
// SUMA
    describe('sum method', () => {

        it('should get the result of the sum of two numbers correctly', () => {
            // Arrange
            const calculator = new Calculator();
            const value1 = 10;
            const value2 = 30;
            const expectedValue = 40;

            // Act
            const result = calculator.sum(value1, value2);

            // Assert
            expect(result).toBe(expectedValue);
        })

        it('should get the result of the sum of five numbers', () => {
            // Arrange
            const calculator = new Calculator();
            const value1 = 5;
            const value2 = 25;
            const value3 = 60;
            const value4 = 100;
            const value5 = 1800;
            const expectedValue = 1990;

            // Act
            const result = calculator.sum(value1, value2, value3, value4, value5);

            // Assert
            expect(result).toBe(expectedValue)
            expect(result).toEqual(expect.any(Number))

        })

        it.skip('should return an error when sending a string parameter', () => {
            // Arrange
            const calculator = new Calculator();
            const value1 = 10;
            const value2 = 'jhdiehjdiehide';

            // Assert
            expect(() => {
                calculator.sum(value1, value2);
            }).toThrow('The parameters received are not numbers')

        })

        it('should return an error when sending a string parameter', () => {
            // Arrange
            const calculator = new Calculator();
            const value1 = 10;
            const value2 = 'jhdiehjdiehide';
            function sumNumbers () {
                calculator.sum(value1, value2);
            }

            // Assert
            expect(sumNumbers).toThrow()
            /* expect(() => {
                calculator.sum(value1, value2);
            }).toThrow('The parameters received are not numbers') */

        })
    })

// RESTA
    describe('sub method', () => {

        it('should get the result of the substraction of two numbers correctly', () => {
            // Arrange
            const calculator = new Calculator();
            const value1 = 50;
            const value2 = 30;
            const expectedValue = 20;

            // Act
            const result = calculator.sub(value1, value2);

            // Assert
            expect(result).toBe(expectedValue);
        })

        it('should get the result of the substraction of five numbers', () => {
            // Arrange
            const calculator = new Calculator();
            const value1 = 500;
            const value2 = 250;
            const value3 = 60;
            const value4 = 10;
            const value5 = 18;
            const expectedValue = 162;

            // Act
            const result = calculator.sub2(value1, value2, value3, value4, value5);

            // Assert
            expect(result).toBe(expectedValue)
            expect(result).toEqual(expect.any(Number))

        })


    })

// MULTIPLICACION
    describe('mult method', () => {

        it('should get the result of the multiplication of two numbers correctly', () => {
            // Arrange
            const calculator = new Calculator();
            const value1 = 5;
            const value2 = 3;
            const expectedValue = 15;

            // Act
            const result = calculator.mult(value1, value2);

            // Assert
            expect(result).toBe(expectedValue);
        })


        it('should get the result of the multiplication of five numbers', () => {
            // Arrange
            const calculator = new Calculator();
            const value1 = 10;
            const value2 = 4;
            const value3 = 3;
            const value4 = 1;
            const value5 = 2;
            const expectedValue = 240;

            // Act
            const result = calculator.mult2(value1, value2, value3, value4, value5);

            // Assert
            expect(result).toBe(expectedValue)
            expect(result).toEqual(expect.any(Number))

        })

    })

})
