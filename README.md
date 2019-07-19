# Jest + Enzyme showcase

## Introduction

This is a repository containing a set of simple React components, both dumb (i.e. not connected to a store) and connected (i.e. rely on a store).

The test suites provide examples on how to approach these sort of components with regards to testing, and can be used as a reference.

## Purpose

The libraries used in this repository (Jest and Enzyme) are awesome tools to write tests in a declarative and structured manner. However, there exist some concepts that can yield confusion, namely the Enzyme terms for `shallow` and `mount` components.

In addition, React components can vary, from dumb components that simply render some markup, to *smart* components that are connected to a store and trigger some logic to update it. The approach to testing either type of component is not the same, and involves several differences that need to be considered.

The test suites in this repository should illustrate the differences between `shallow` and `mount` rendering in tests, as well as a potential approach to test React components.

## Structure

You may find here two sets of components. 

- Dumb components: there is a main component that contains the other components. The following listing shows the component hierarchy:
  - App
    - Header
      - Title
    - Footer

- Smart components: just a single component that dispatches actions towards the store, and therefore relies on the store. It is wrapped into a `redux` Provider in the test suite.
  - AlertBox

## Usage

First, clone the repository into your local machine. Then, proceed to install the NPM modules either via `yarn` or `npm`.

Finally, you may run the test suite with the following command: `npm run test`.

## Dependencies

React components are used, some of them connected to a `redux` store.

The test suites use `Enzyme` to render the tested components and `Jest` is used to run the test suites and perform the required assertions.

## Notes

The code in this repository follows some conventions, other are simply ignored. Therefore, it should not be considered as a reference towards coding-style best practices.

**Use the test suites as a reference for your personal uses.**
