import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const number1 = container.getByTestId('number1');
    const number4 = container.getByTestId('number4');
    const equalsSign = container.getByTestId('operator-equals');
    const addSign = container.getByTestId('operator-add');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number1);
    fireEvent.click(addSign);
    fireEvent.click(number4);
    fireEvent.click(equalsSign);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract 4 from 7 and get 3', () => {
    const number7 = container.getByTestId('number7');
    const number4 = container.getByTestId('number4');
    const equalsSign = container.getByTestId('operator-equals');
    const subtractSign = container.getByTestId('operator-subtract');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number7);
    fireEvent.click(subtractSign);
    fireEvent.click(number4);
    fireEvent.click(equalsSign);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should multiply 3 by 5 and get 15', () => {
    const number3 = container.getByTestId('number3');
    const number5 = container.getByTestId('number5');
    const equalsSign = container.getByTestId('operator-equals');
    const multiplySign = container.getByTestId('operator-multiply');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number3);
    fireEvent.click(multiplySign);
    fireEvent.click(number5);
    fireEvent.click(equalsSign);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should divide 21 by 7 and get 3', () => {
    const number2 = container.getByTestId('number2');
    const number1 = container.getByTestId('number1');
    const number7 = container.getByTestId('number7');
    const equalsSign = container.getByTestId('operator-equals');
    const divideSign = container.getByTestId('operator-divide');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number2);
    fireEvent.click(number1);
    fireEvent.click(divideSign);
    fireEvent.click(number7);
    fireEvent.click(equalsSign);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should concatenate multiple number button clicks', () => {
    const number2 = container.getByTestId('number2');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number2);
    fireEvent.click(number2);
    fireEvent.click(number2);
    fireEvent.click(number2);
    expect(runningTotal.textContent).toEqual('2222');
  })

  it('should chain multiple operations together', () => {
    const number4 = container.getByTestId('number4');
    const number6 = container.getByTestId('number6');
    const number8 = container.getByTestId('number8');
    const equalsSign = container.getByTestId('operator-equals');
    const multiplySign = container.getByTestId('operator-multiply');
    const subtractSign = container.getByTestId('operator-subtract');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number8);
    fireEvent.click(subtractSign);
    fireEvent.click(number6);
    fireEvent.click(multiplySign);
    fireEvent.click(number4);
    fireEvent.click(equalsSign);
    expect(runningTotal.textContent).toEqual('8');
  })

  it('should clear the running total without affecting the calculation', () => {
    const clearButton = container.getByTestId('clear');
    const number6 = container.getByTestId('number6');
    const number8 = container.getByTestId('number8');
    const equalsSign = container.getByTestId('operator-equals');
    const multiplySign = container.getByTestId('operator-multiply');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number8);
    fireEvent.click(multiplySign);
    fireEvent.click(number6);
    fireEvent.click(equalsSign);
    fireEvent.click(clearButton);
    fireEvent.click(multiplySign);
    fireEvent.click(number6);
    fireEvent.click(equalsSign);
    expect(runningTotal.textContent).toEqual('288');
  })
})

