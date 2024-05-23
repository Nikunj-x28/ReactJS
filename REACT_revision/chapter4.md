Config driven UI
A "config-driven UI" refers to a user interface (UI) design approach where the layout, appearance,
behavior, and other aspects of the UI are largely determined by configuration data rather than hardcoded
within the application code.

Unique Key Property = 
https://react.dev/learn/rendering-lists
JSX elements directly inside a map() call always need keys!
Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first
file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing.
The second file would become the first file, the third file would be the second file, and so on.
File names in a folder and JSX keys in an array serve a similar purpose. They let us uniquely identify an
item between its siblings. A well-chosen key provides more information than the position within the array.
Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime.


[data in your array] -> React has to map it to the components and then create the HTML elements
                        when you shuffle the array if we didn’t have keys our mapping will get disturbed
                        Keys dont serve the purpose of keeping the order , they help in establishing 
                        relations.

***never use indexes as keys
https://dev.to/shiv1998/why-not-to-use-index-as-key-in-react-lists-practical-example-3e66
When is it safe to use index as key in a list?
    Data is static.
    When you know reordering of lists: Sorting, Filtering is not going to happen.
    In the absence of an id.

The import and export syntax is part of ECMAScript 2015 (ES6). It was introduced as a standardized way
to manage modules in JavaScript. 
When importing a default export, you can choose any name for the imported value.

EXPORTING WITHOUT DEFAULT
// mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
In this mathUtils.js module, we're exporting two named functions: add and subtract. Now let's import and use
them in another file:

// app.js
import { add, subtract } from './mathUtils.js';

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2

In app.js, we import add and subtract using curly braces {} and specifying their names within the braces.
This syntax allows us to import only the named exports we need from the module mathUtils.js.

import * syntax 
// Module.js
export const name = 'John';
export function greet() {
  console.log('Hello!');
}
// AnotherModule.js
import * as Module from './Module.js';
console.log(Module.name);
Module.greet();



React tries to make sure the Data layer and the UI layer stay consistent.
React can do fast and efficient DOM manipulation and maintain consistency.

REACT HOOKS
They are normal JS utility functions.
2 most important Hooks.
- useState()
- useEffect()

Whenever a state variable changes REACT re-renders the component.

Hooks, including useState, can only be used within the body of a functional component or within
other custom hooks.

How updating state causes a rerender ?
State Mutation:
When you call setXYZ(newValue), React updates the state variable restaurants to the new value (newValue)
that you provided.

Reconciliation:
After the state variable is updated, React performs a process called reconciliation.
During reconciliation, React compares the current virtual DOM of the component with the previous virtual
DOM snapshot to identify the differences (or "diffs").

Render Phase:
Once the differences are identified, React re-renders the component with the updated state value.


![reconciliation](images/image.png)