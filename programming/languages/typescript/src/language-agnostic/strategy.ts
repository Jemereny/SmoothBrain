/**
 * Strategy pattern example
 * 
 * In this example, let us make our different algorithms to be sorting algorithms to be applied on a list of numbers
 */
function main() {
    const listOfNumbers: number[] = [57, 23, 60, 11, 9, 13, 300];
    const strategies: SortStrategy[] = [sortInDescendingOrder, sortInAscendingOrder];
  
    // Use the strategies to obtain sorted list of numbers
    for (const strategy of strategies) {
      const sortedListOfNumbers = strategy(listOfNumbers);
      console.log(sortedListOfNumbers);
    }
  
    try {
      const sortedListInAscendingOrder = evaluateStrategies(listOfNumbers, strategies);
      console.log(sortedListInAscendingOrder);
    } catch (error) {
      console.log(error);
    }
  }
  
  /**
   * These will be our example algorithms
   */
  function sortInAscendingOrder(listOfNumbers: number[]): number[] {
    return listOfNumbers.sort((a, b) => a - b);
  }
  
  function sortInDescendingOrder(listOfNumbers: number[]): number[] {
    return listOfNumbers.sort((a, b) => b - a);
  }
  
  /**
   * This function will lazily evaluate strategies by returning early if a solution is find.
   */
  function evaluateStrategies(listOfNumbers: number[], strategies: SortStrategy[]): number[] {
    for (const strategy of strategies) {
      // We should add error handling in here to either continue or return early.
      const sortedListOfNumbers = strategy(listOfNumbers);
      const firstNumber = sortedListOfNumbers[0];
      const lastNumber = sortedListOfNumbers[sortedListOfNumbers.length - 1];
  
      // For example, we are looking for a sort algorithm that returns us a list where the first number must be lesser than the last number.
      if (firstNumber < lastNumber) {
        return sortedListOfNumbers;
      }
    }
  
    // Handling when all strategies do not work.
    throw new Error('Unable to find a solution for all evaluated strategies.');
  }
  
  // This will help to type our list of strategies to be a function that inputs an array of numbers and outputs a sorted array of numbers
  type SortStrategy = (listOfNumbers: number[]) => number[];
  
  main();