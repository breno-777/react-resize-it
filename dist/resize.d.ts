import { ResizeContainerProperties } from "./interface/resize.interface";
/**
 * ResizeContainer function allows elements to be resized by dragging a handle.
 * @param {ResizeContainerProperties} - containerId: selector for the resizable elements,
 * resizeHandlerId: selector for the resize handle elements, and direction: resize direction.
 */
export declare const ResizeContainer: ({ containerId, resizeHandlerId, direction }: ResizeContainerProperties) => void;
