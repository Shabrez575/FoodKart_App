Resources :-
1 - (https://redux.js.org/introduction/getting-started).
2 - (https://redux-toolkit.js.org/introduction/getting-started).

REDUX -
Redux is a JS library for predictable and maintainable global state management.

- How we can manage state of an application using redux.
- How we can manage data of an application using redux.

Redux Toolkit - 
Redux Toolkit is our official recommended approach for writing Redux logic. It wraps around the Redux core, and contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

Learning :-
- How we can handle the data effectively using redux.
- Latest way to write redux is through redux toolkit.
- We can implement cart feature using redux.

Redux Store:-

The Redux store brings together the state, actions, and reducers that make up your app. The store has several responsibilities:-

1. Holds the current application state inside
2. Allows access to the current state via store.getState();
3. Allows state to be updated via store.dispatch(action);
4. Registers listener callbacks via store.subscribe(listener);
5. Handles unregistering of listeners via the unsubscribe function returned by store.subscribe(listener).

NOTES:-
- Redux store is a big JS object with a lot of data inside it & kept in a global central space.
- Redux says that you can not directly modify the cart slice.

Write data into the cart:-  
- When you click on the ADD button it dispatches an Action & which calls a (reducer function) and then reducer function internally modify the cart or which update the slice of redux store.

Read the cart item :-
- How we can get the data of the cart over cart-icon.
  - for which we used selector(This phenomena known as subscribing to an store.)
  - Data of the cart is change then header cart is also update based on that.

- [ADD](Click on) -> [A](Dispatch Action) -> [func()](reducer) -> [|Store|<slice>] -> [Selector](Subscribed to store) -> [cart](updated cart value.)

# Redux Toolkit Library
- npm i @reduxjs/toolkit

# React-Redux
- npm i react-redux

