/**
 * Binding function calls
 * 
 * In javascript, the keyword "this" does not refer to the context where the function is defined
 * but the context where the function is being called.
 * 
 * When a function with a certain context (e.g. a class), is required to be re-assigned to another variable for usage (e.g. for functional programming)
 * it loses its context when it is assigned to a variable and will have to be bounded by using .bind()
 * 
 * Using .bind and giving the context will ensure that "this" will have a context of the object that is being called
 */
class SomeClass {
    constructor(readonly someVariable: string) {
    }
  
    someFunction() {
      console.log(this.someVariable);
    }
  }
  
  function main() {
    const someClass = new SomeClass('This is some variable');
    const unboundFunction = someClass.someFunction;
    const boundFunction = someClass.someFunction.bind(someClass);
    
    // The context of this is missing
    unboundFunction(); // undefined
    // Context is bounded
    boundFunction(); // This is some variable
  }
  
  main();