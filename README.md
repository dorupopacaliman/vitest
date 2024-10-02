# React + TypeScript + Vite Exercise Project

## Overview

This project is a learning exercise designed to demonstrate and practice modern web development techniques using React, TypeScript, and Vite. It's specifically crafted to showcase testing with Vitest, a next-generation testing framework for Vite.

## Purpose

The primary goals of this project are:

1. To provide hands-on experience with React and TypeScript in a Vite environment
2. To demonstrate effective testing practices using Vitest
3. To explore various React concepts including components, hooks, and state management

**Note:** This is not intended to be a production-ready application. It's a playground for learning and experimentation.

## Key Features

- React components built with TypeScript
- Custom hooks for state management
- Comprehensive test suite using Vitest and React Testing Library
- ESLint configuration for code quality
- Mock server setup for API testing

## Getting Started

1. Clone the repository
2. Run `yarn install` to install dependencies
3. Use `yarn dev` to start the development server
4. Run `yarn test` to execute the test suite

## Project Structure

- `/src`: Source code for the React application
  - `/components`: React components
  - `/hooks`: Custom React hooks
  - `/test-setup`: Configuration for test environment
- `/public`: Static assets
- `vite.config.ts`: Vite configuration, including Vitest setup

## Testing with Vitest

This project heavily utilizes Vitest for testing. Key aspects include:

- Component tests demonstrating rendering and user interactions
- Hook tests showcasing state management
- API mocking for isolated testing of data fetching components
- Custom test setup for consistent testing environment

To run tests:

```bash
yarn test
```

## Learning Objectives

While working with this project, focus on:

1. Writing effective tests for React components and hooks
2. Understanding the benefits of Vitest in a Vite-based project
3. Implementing and testing custom hooks
4. Mocking external dependencies in tests
5. Using TypeScript with React for improved developer experience