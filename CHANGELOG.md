# Changelog

## [1.0.2-beta.0] - 2024-10-17
### Added
- Improved the `ResizeContainer` function to include more refined control over min and max width and height constraints.
- Enhanced error handling for cases where either `containerId` or `resizeHandlerId` is undefined.
- Included helper functions `updateWidth` and `updateHeight` for dynamically setting the dimensions with constraints.
  
### Changed
- Adjusted the internal logic to fetch computed styles for min and max dimensions instead of reading directly from inline styles.
- Updated documentation to reflect usage improvements and function details.
- Improved the onMouseMove function to align width and height adjustment based on container position and mouse coordinates.

### Fixed
- Refined event listener cleanup logic, ensuring no residual listeners post unmounting.
  
## [1.0.1-beta.0] - 2024-10-16
### Added
- Initial release of **React Resize It**, a lightweight library for resizing containers in React applications.
- `ResizeContainer` function allows for seamless resizing of containers using mouse events.
- Support for individual resizing directions per component (horizontal or vertical) using `data-direction` attribute.
- Dynamic handling of min and max dimensions during resizing.
- Added functionality to prevent simultaneous resizing in both directions when changing the resizing direction.

### Changed
- Improved documentation for usage and installation instructions.
- Enhanced type definitions to ensure better TypeScript support.

### Fixed
- Fixed event listener cleanup logic to prevent memory leaks.
