# TypeScript Type Error: 'string' is not assignable to type 'number'

This repository demonstrates a common type error in TypeScript and its solution.

## The Bug

The `combine` function attempts to add a number and a string, resulting in a type error because TypeScript's type system prevents incompatible operations.

## The Solution

The solution involves explicitly converting the string to a number using `parseInt` before performing the addition.  Type annotations ensure the function behaves as expected.