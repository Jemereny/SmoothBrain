
> This page serves as a simple strategic guide for error handling, not a rigid rulebook. Developers must still use their own judgement to determine if a specific context requires an alternative approach.

## Terminologies

In some languages, it may be named differently but they all do the same thing.

> “Errors” === “Exceptions”
> “Raise” === “Throw”

## Introduction

Learning how to handle errors in code helps to better control the flow of the program, provides a better user experience and better developer experience. It allows us to handle confusing errors and let us know where bugs come from and protects us from having long downtimes.

## Different types of errors

### Expected errors

Expected errors can be things like HTTP status codes, Database errors (specific to different DBs), or domain errors that developers themselves create and throw.

### Unexpected errors

Unexpected errors are errors that are not handled due to either not knowing it could occur where it is out of the norm, it is something that is missed by developers or if developer does not have enough context to fix it (e.g. db connection errors).



Domain errors represent business-level errors or failures which are meaningful to the application. e.g. UserNotFound, InsufficientCredits

## When to handle

Handle errors at the level where meaningful actions can be taken.

### Expected errors

Expected errors can be handled at a boundary, either translating them into a domain-specific error or returning safe/default fallbacks. Understanding when to propagate errors is key to ensuring errors are properly handled.

### Unexpected errors

Usually can be handled by a middleware or a top-level try/catch statement to gracefully handle the unhandled errors.

## How to Handle

### Don’t swallow errors

Avoid catching errors without translating them or ret-hrowing them with context. Based on context, this rule may be ignored.

### Preserving of context errors

Preserving errors, especially unexpected errors can better help debugging. If catch and re-throwing, adding the error back to the context of the new error can help preserve stack trace and lead to easier time debugging issues.

### Example

```
// Example Server
// GET('/users/{userId}')
function getUser(userId: string): UserDto {
  const user = getUserFromDb();

  // How should we handle null/errors here?

  return Mapper.ToDto(user);
}

function getUserFromDb(userId: string): User | null {
  return db.getUser(userId);
}

// Example Client
// Http method to outside 
// GET('/{userId}')
function getUser(userId: string): UserDto {
  const userDto = axios.get(`/users/${userId}`);
  // How do we handle errors?
}
```
