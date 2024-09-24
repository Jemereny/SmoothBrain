> ...the ratio of time spent reading vs. writing is well over 10:1. We are constantly reading old code as part of the effort to write new code.

- Robert C. Martin, Author of Clean Code

These guidelines are not meant to be followed strictly as guidelines are always subjective and should only ever be used in the correct context. These are some over-generalised practices that can help when trying to code but trying to apply these rules without knowing the body of experiences that generated these practices may result in failure. If any code you're reading are not following any rules but is already maintainable, following some of these practices may be a hindrance instead.

# Table of contents
- [Meaningful names](#meaningful-names)
- [Comments](#comments)
- [Abstracting code from third-party libraries / De-Coupling](#abstracting-code-from-third-party-libraries---de-coupling)
- [Functional Code / Pure functions](#functional-code---pure-functions)
- [Imperative vs Declarative programming](#imperative-vs-declarative-programming)
- [Guards](#guards)
- [Business Logic vs Application Logic](#business-logic-vs-application-logic)
- [Logging and Throwing errors](#logging-and-throwing-errors)

# Meaningful names
As much as possible, code should always be self-explanatory. Variables and methods should always have meaningful names to describe the context, or function of what it does. It is always good to double-check if the name used is confusing or if it has a different meaning. For example, bi-weekly has two meanings; twice a week or once every two weeks in American English. While in British English, bi-weekly means twice a week and fortnightly means once every two weeks.

# Comments
Comments should be used to describe a block of code that require context, any gotchas, or explain the reasons behind an unintuitive way of doing things. These comments should always be informative enough and should explain intent of the solution to the problem.

# Abstracting code from third-party libraries / De-Coupling
Third-party libraries and even the code you write can change. De-coupling the code from services, such as making arguments not rely on specific implementations or state of a service will help to ensure code doesn't break when there are changes that aren't related to it. This will also help in testing as code becomes more modular without dependency on these third-party libraries. A way to help with this is to think about writing a piece of code that can be easily ported over to different languages by copy pasting with only changes to syntax.

# Functional Code / Pure functions
Pure functions are functions that have no side effects and should always return the same output given the same input data. Having these functions in the codebase will help to make code easier to test as the functions do not depend on or affect the state of the program. They are isolated and can be run independently without worry about unexpected side effects. The code also becomes more modular and reusable.

# Imperative vs Declarative programming
Imperative programming directs the control flow of the program, having mutable data  declarative states what is the end goal. In the end, there's no right or wrong here as context is very important. Being able to decide between the two enables code readability and functionality. It could be easier to write the code one way and more difficult to write a code another way.

Examples of both:

```typescript
function imperative() {
    const values = [5, 3, 2, 8, 7];
    const valuesLessThanFive = [];
 
    for(const value of values) {
        if (value < 5) {
            valuesLessThanFive.push(value);
        }
    }
}
 
function declarative() {
    const values = [5, 3, 2, 8, 7];
    const valuesLessThanFive = values.filter(value => value < 5);
}
```

The essence of every underlying method of declarative programming is in fact, imperative programming. Hence, you can also have a method that wraps imperative programming and do a method call instead.

# Business Logic vs Application Logic
Being able to differentiate the two types of logic allows us to decide where should a piece of logic be. The definition of business logic is that it encodes real-world business rules that determine how data is created, stored or changed. Usually, the business logic of the application comes from collaboration and agreement with business experts. In an ideal world, all relevant business logic can be stored in a shared library or a service so that between applications or services, the logic is the same.

Application logic is everything else, for example, clicking a button that opens a popup window to let clients select or add data. There can be multiple application logic that implement the same business logic. An example would be that a desktop application, web service or mobile app all uses the same business logic but all require different application logic.

It is recommended business and application logic are kept separate as much as possible to increase reusability between components especially different micro-services. It also enables ease of validation of the logic and reduces the number of areas one would have to modify if a business logic changes.

However, it is understandable when the two logics get mixed up as sometimes mixing application logic and business logic can enable the frontend to be more responsive, giving users a better experience.

# Logging and Throwing errors
When catching errors, the code that catches the error should be able to handle the error. Handling the error could mean that the code either 
1. warn and execute default behaviour
1. catch privileged information and throw a new exception unrelated to the caught exception.

However, it is not recommended to log an error and throw the same error out as there is no way for the upstream to know if the exception has already been logged. If the upstream follows the same pattern of logging and re-throwing, the same exception will be logged more than once.
