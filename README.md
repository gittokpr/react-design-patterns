# React Design Patterns

## Layout Components

React components that deal primarily with arranging other components on the page.

1. Split Screen
2. List and Items
3. Models

## Container Components

Components that take care of loading and managing data of their child components. The idea of container components is that our (child) components shouldn't know where their data is coming from.

## UnControlled Components

Components that keep track of their own states and release data only when some event occurs (that is, submit event for html foms).

## Controlled Components

Components that donot keep track of their own state - all state is passed in as props(that is, when we use the useState hooks with text inputs).
