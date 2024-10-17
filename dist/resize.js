"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizeContainer = void 0;
/**
 * ResizeContainer function allows elements to be resized by dragging a handle.
 * @param {ResizeContainerProperties} - containerId: selector for the resizable elements,
 * resizeHandlerId: selector for the resize handle elements, and direction: resize direction.
 */
const ResizeContainer = ({ containerId, resizeHandlerId, direction }) => {
    // Select all resizable containers and corresponding resize handles based on provided IDs.
    const containers = document.querySelectorAll(containerId);
    const resizeHandlers = document.querySelectorAll(resizeHandlerId);
    containers.forEach((container, index) => {
        const computedStyle = window.getComputedStyle(container);
        const resizeHandler = resizeHandlers[index];
        // Ensure that both the container and handler are defined; throw an error if not.
        if (!container || !resizeHandler)
            throw new Error("ContainerId or resizeHandlerId is required!");
        // Set default direction or use individual direction for each component.
        const elementDirection = container.getAttribute("data-direction") || direction;
        // Variable to track the active container being resized.
        let activeContainer = null;
        // Extract the min and max dimensions for resizing, defaulting to Infinity or 0 as fallback values.
        const { maxWidth, minWidth, maxHeight, minHeight } = {
            maxWidth: parseInt(computedStyle.maxWidth, 10) || Infinity,
            minWidth: parseInt(computedStyle.minWidth, 10) || 0,
            maxHeight: parseInt(computedStyle.maxHeight, 10) || Infinity,
            minHeight: parseInt(computedStyle.minHeight, 10) || 0
        };
        // Helper function to update width within specified bounds.
        const updateWidth = (newWidth) => {
            if (activeContainer)
                activeContainer.style.width = `${Math.min(Math.max(newWidth, minWidth), maxWidth)}px`;
        };
        // Helper function to update height within specified bounds.
        const updateHeight = (newHeight) => {
            if (activeContainer)
                activeContainer.style.height = `${Math.min(Math.max(newHeight, minHeight), maxHeight)}px`;
        };
        /**
         * onMouseMove handler dynamically resizes the container based on mouse movements.
         * Adjusts width if 'horizontal' and height if 'vertical', limited by the defined bounds.
         */
        const onMouseMove = (eMove) => {
            if (!activeContainer)
                return;
            if (elementDirection === "horizontal") {
                const newWidth = eMove.clientX - activeContainer.getBoundingClientRect().left;
                updateWidth(newWidth);
            }
            else if (elementDirection === "vertical") {
                const newHeight = eMove.clientY - activeContainer.getBoundingClientRect().top;
                updateHeight(newHeight);
            }
        };
        /**
         * onMouseUp handler removes the event listeners for mousemove and mouseup
         * to stop resizing once the mouse button is released.
         */
        const onMouseUp = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
            activeContainer = null; // Reset active container after resizing ends.
        };
        /**
         * onMouseDown handler initiates the resizing by adding mousemove and mouseup listeners.
         * Prevents default behavior to avoid text selection while resizing.
         */
        const onMouseDown = (e) => {
            e.preventDefault();
            activeContainer = container; // Set active container to the one being resized.
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        };
        // Attach mousedown listener to the resize handler to initiate the resizing sequence.
        resizeHandler.addEventListener("mousedown", onMouseDown);
        // Cleanup function to remove event listeners when no longer needed.
        return () => {
            resizeHandler === null || resizeHandler === void 0 ? void 0 : resizeHandler.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };
    });
};
exports.ResizeContainer = ResizeContainer;
