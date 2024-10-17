
# React Resize It

**React Resize It** is a lightweight and intuitive library designed for seamless resizing of containers in your React applications. With its user-friendly interface and support for customizable resize directions, developers can effortlessly adjust element sizes using just a few lines of code, enhancing both user experience and layout flexibility.

## Installation

You can easily install the library via npm:

```bash
npm install react-resize-it
```

## Usage

To implement the `ResizeContainer` function in your React component, follow these steps:

### 1. Import the Function

Begin by importing the `ResizeContainer` function from the library:

```javascript
import { ResizeContainer } from 'react-resize-it';
```

### 2. Set Up Your HTML Structure

Create a container that you want to resize along with a handler element that will trigger the resizing action. The handler should be positioned absolutely within the container for optimal usability.

```html
<div id="myContainer" style="max-width: 500px; min-width: 100px; width: 300px; position: relative;">
    <p>Resize me!</p>
    <div
        id="myResizeHandler"
        style="cursor: ew-resize; width: 10px; background: gray; position: absolute; top: 0; bottom: 0; right: 0;"></div>
</div>
```

### 3. Implement the `ResizeContainer` Function

Now, call the `ResizeContainer` function within your React component, passing the IDs of the container and the resize handler as arguments. You can also specify individual resize directions for different components by using the `data-direction` attribute.

```javascript
import React, { useEffect } from 'react';
import { ResizeContainer } from 'react-resize-it';

const MyComponent = () => {
    useEffect(() => {
        // Initialize the resizing functionality
        const cleanup = ResizeContainer({ 
            containerId: '#myContainer', 
            resizeHandlerId: '#myResizeHandler' 
        });
        
        return cleanup; // Clean up event listeners on unmount
    }, []);
    
    return (
        <div id="myContainer" style={{ maxWidth: '500px', minWidth: '100px', width: '300px', position: 'relative' }}>
            <p>Resize me!</p>
            <div id="myResizeHandler" style={{ cursor: 'ew-resize', width: '10px', background: 'gray', position: 'absolute', top: 0, bottom: 0, right: 0 }}></div>
        </div>
    );
};

export default MyComponent;
```

### 4. Customizing Resize Direction

To allow individual components to have distinct resizing directions, set the `data-direction` attribute on your container elements. This will override the default direction provided in the `ResizeContainer` function.

```html
<div id="myContainer" data-direction="vertical" style="...">
    ...
</div>
```

## Parameters

- **`containerId`** (string): The ID of the container element that you want to resize. Include a `#` prefix to indicate an ID selector.
- **`resizeHandlerId`** (string): The ID of the element that will act as the resize handler. Include a `#` prefix to indicate an ID selector.
- **`direction`** (string, optional): The default resize direction. Use `"horizontal"` for width adjustments or `"vertical"` for height adjustments. If specified, this can be overridden by individual components using the `data-direction` attribute.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contributing

If you'd like to contribute to this project, feel free to submit a pull request or open an issue.

## Author

Breno Amarante [Github](https://github.com/breno-777)