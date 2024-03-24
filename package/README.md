# React Cheat Codes

This package provides a hook that allows you to implement cheat codes functionality in your React application. You can use this hook to listen for specific key sequences and trigger actions or callbacks when those sequences are typed by the user.

## Installation

You can install `react-cheat-codes` via npm:

```bash
npm install react-cheat-codes
```

# Usage

To use `react-cheat-codes` in your React application, import the `useCheatCode` hook and call it with the desired cheat code sequence and a callback function to be executed when the code is typed.

```JavaScript
import React from 'react';
import useCheatCode from 'react-cheat-codes';

const MyComponent = () => {
  useCheatCode('awesome', () => {
    // Callback function to be executed when the code is typed
    console.log('Cheat code activated!');
    // Add your custom logic here
  });

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default MyComponent;
```

In the above example, the cheat code 'awesome' will trigger the callback function when typed by the user.

# Notes
- The hook returns the current typed code sequence, allowing you to track the progress of the code entry if needed.
- You can use the hook in any component where you want to implement cheat code functionality.
- Remember to handle side effects or logic within the callback function passed to the hook.

# Contributing
Contributions are welcome! If you have any ideas, suggestions, or find any issues, feel free to open an issue or submit a pull request on GitHub.
