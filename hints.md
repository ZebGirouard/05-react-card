The missing behavior lives on the button in `src/App.jsx`.

`isAvailable` already tells React which label to show. The only missing piece is a click handler that calls `setIsAvailable(...)` with the opposite of the current value.
