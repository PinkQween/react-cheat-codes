# React Cheat/Secret Codes

This package provides a hook that allows you to implement cheat codes functionality in your React application. You can use this hook to listen for specific key sequences and trigger actions or callbacks when those sequences are typed by the user.

## Installation

You can install `react-secret-codes` via npm:

```bash
npm install react-secret-codes
```

OR

```bash
yarn add react-secret-codes
```

OR

```bash
bun i react-secret-codes
```

# Usage

To use `react-secret-codes` in your React application, import the `useCheatCode` hook and call it with the desired cheat code sequence and a callback function to be executed when the code is typed.

```JavaScript
import useCheatCode from 'react-secret-codes';

const MyComponent = () => {
  useCheatCode('awesome', () => {
    // Callback function to be executed when the code is typed
    console.log('Cheat code activated!');
    // Add your custom logic here
  });

  return (
    <>
      {/* Your component JSX */}
    </>
  );
};

export default MyComponent;
```

We recommend combining with environment variables to create something like this:

```JavaScript
import useCheatCode from 'react-secret-codes';

const MyComponent = () => {
  useCheatCode(process.env.REACT_APP_SECRET_CODE, () => {
    // Callback function to be executed when the code is typed
    console.log('Cheat code activated!');
    // Add your custom logic here
  });

  return (
    <>
      {/* Your component JSX */}
    </>
  );
};

export default MyComponent;
```

Do you want the user to have to do it within a time limit? well you can do this:

```JavaScript
import { useTimeSensitiveCode } from 'react-secret-codes';

const MyComponent = () => {
  useTimeSensitiveCode(process.env.REACT_APP_SECRET_CODE, () => {
    // Callback function to be executed when the code is typed
    console.log('Cheat code activated!');
    // Add your custom logic here
  }, 3000);

  return (
    <>
      {/* Your component JSX */}
    </>
  );
};

export default MyComponent;
```

If you want to just look at the time of every individual character you can use a slightly different function:

```JavaScript
import { useTimeSensitiveCodeEachCharacter } from 'react-secret-codes';

const MyComponent = () => {
  useTimeSensitiveCodeEachCharacter(process.env.REACT_APP_SECRET_CODE, () => {
    // Callback function to be executed when the code is typed
    console.log('Cheat code activated!');
    // Add your custom logic here
  }, 20);

  return (
    <>
      {/* Your component JSX */}
    </>
  );
};

export default MyComponent;
```

You can even combine the last 2 like this:

```JavaScript
import { useCombinedTimeSensitiveCode } from 'react-secret-codes';

const MyComponent = () => {
  useCombinedTimeSensitiveCode(process.env.REACT_APP_SECRET_CODE, () => {
    // Callback function to be executed when the code is typed
    console.log('Cheat code activated!');
    // Add your custom logic here
  }, 20, 3000);

  return (
    <>
      {/* Your component JSX */}
    </>
  );
};

export default MyComponent;
```

# Notes
- The hook returns the current typed code sequence, allowing you to track the progress of the code entry if needed.
- You can use the hook in any component where you want to implement cheat code functionality.
- Remember to handle side effects or logic within the callback function passed to the hook.

# Contributing
Contributions are welcome! If you have any ideas, suggestions, or find any issues, feel free to open an issue or submit a pull request on GitHub.
