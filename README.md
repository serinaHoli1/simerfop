# Simerfop

A simple task scheduler for Node.js applications.

## Installation

You can install Simerfop via npm:

```bash
npm install simerfop
```

## Usage

```javascript
const Simerfop = require('simerfop');

const scheduler = new Simerfop();

// Example usage:
scheduler.schedule(() => {
  console.log('Task executed at', new Date());
}, Date.now() + 5000); // Schedule task 5 seconds from now

scheduler.schedule(() => {
  console.log('Another task executed at', new Date());
}, Date.now() + 10000); // Schedule another task 10 seconds from now
```

## Documentation

### Constructor

Creates a new instance of the scheduler.

### `schedule(task, time)`

Schedules a task to run at a specific time.

- `task`: Function to execute.
- `time`: Time at which the task should run (in milliseconds since the Unix epoch).

### `clear()`

Clears all scheduled tasks and stops the scheduler.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
