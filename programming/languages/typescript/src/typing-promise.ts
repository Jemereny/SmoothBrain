/**
 * This helps to type items when filtering an array and if the array consists of objects of a generic type
 * and the object can be distinguished by a field
 * 
 * E.g. type GenericType = TypeA | TypeB;
 * const array: GenericType[] = [TypeAItem, TypeBItem]
 */
export async function TypingSettledPromises() {
    const promises: Promise<string>[] = [
      Promise.resolve("Promise 1 resolved"),
      Promise.resolve("Promise 2 resolved"),
      Promise.reject("Promise 3 rejected"),
      Promise.resolve("Promise 4 resolved"),
    ];
    const settledPromises: PromiseSettledResult<string>[] =
      await Promise.allSettled(promises);
  
    // Even after we filter, this returns a PromiseSettledResult instead of a PromiseFulfilledResult.
    settledPromises.filter(settledPromise => settledPromise.status === 'fulfilled')
      // Unable to access '.value' from PromiseFulfilledResult
      .map(fulfilledPromise => fulfilledPromise.status);
  
    // Same for PromiseRejectedResult
    settledPromises.filter(settledPromise => settledPromise.status === 'rejected')
      // Unable to access '.reason' from PromiseRejectedResult
      .map(fulfilledPromise => fulfilledPromise.status);
  
    // We just need to tell typescript that the result returned from .filter is of PromiseFulfilledResult/PromiseRejectedResult
    // since PromiseSettledResult.status can tell us the type we can cast it to.
    settledPromises.filter((settledPromise): settledPromise is PromiseFulfilledResult<string> => settledPromise.status === 'fulfilled')
      .map(fulfilledPromise => fulfilledPromise.value);
  
    settledPromises.filter((settledPromise): settledPromise is PromiseRejectedResult => settledPromise.status === 'rejected')
      .map(fulfilledPromise => fulfilledPromise.reason);
  }
  
  async function main() {
    await TypingSettledPromises();
  }
  
  main()
    .then(() => console.log("Successfully run"))
    .catch((err) => console.log(err));
  