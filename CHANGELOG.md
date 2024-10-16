# Changelog

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