import { ResizeContainerProperties } from "./interface/resize.interface";

/**
 * ResizeContainer function allows elements to be resized by dragging a handle.
 * @param {ResizeContainerProperties} - containerId: selector for the resizable elements, 
 * resizeHandlerId: selector for the resize handle elements, and direction: resize direction.
 */
export const ResizeContainer = ({ containerId, resizeHandlerId, direction }: ResizeContainerProperties) => {
    // Select all resizable containers and corresponding resize handles based on provided IDs.
    const containers = document.querySelectorAll(containerId) as NodeListOf<HTMLElement>;
    const resizeHandlers = document.querySelectorAll(resizeHandlerId) as NodeListOf<HTMLElement>;

    containers.forEach((container, index) => {
        const resizeHandler = resizeHandlers[index];

        // Ensure that both the container and handler are defined; throw an error if not.
        if (!container || !resizeHandler) throw new Error("ContainerId or resizeHandlerId is required!");

        // Define default direction or use individual direction for each component
        const elementDirection = container.getAttribute("data-direction") || direction;

        // Extract the min and max dimensions for resizing, defaulting to infinity or 0 as fallback values.
        const { maxWidth, minWidth, maxHeight, minHeight } = {
            maxWidth: parseInt(container.style.maxWidth.replace("px", ""), 10) || Infinity,
            minWidth: parseInt(container.style.minWidth.replace("px", ""), 10) || 0,
            maxHeight: parseInt(container.style.maxHeight.replace("px", ""), 10) || Infinity,
            minHeight: parseInt(container.style.minHeight.replace("px", ""), 10) || 0
        }

        // Helper function to update width within specified bounds.
        const updateWidth = (newWidth: number) => {
            container.style.width = `${Math.min(Math.max(newWidth, minWidth), maxWidth)}px`;
        }

        // Helper function to update height within specified bounds.
        const updateHeight = (newHeight: number) => {
            container.style.height = `${Math.min(Math.max(newHeight, minHeight), maxHeight)}px`;
        }

        /**
         * onMouseMove handler dynamically resizes the container based on mouse movements.
         * Adjusts width if 'horizontal' and height if 'vertical', limited by the defined bounds.
         */
        const onMouseMove = (eMove: MouseEvent) => {
            if (elementDirection === "horizontal") {
                const newWidth = eMove.clientX;
                updateWidth(newWidth);
            } else if (elementDirection === "vertical") {
                const newHeight = eMove.clientY;
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
        };

        /**
         * onMouseDown handler initiates the resizing by adding mousemove and mouseup listeners.
         * Prevents default behavior to avoid text selection while resizing.
         */
        const onMouseDown = (e: MouseEvent) => {
            e.preventDefault();
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        };

        // Attach mousedown listener to the resize handler to initiate the resizing sequence.
        if (resizeHandler) resizeHandler.addEventListener("mousedown", onMouseDown);

        // Cleanup function to remove event listeners when no longer needed.
        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
            resizeHandler?.removeEventListener("mousedown", onMouseDown);
        };
    });
};
