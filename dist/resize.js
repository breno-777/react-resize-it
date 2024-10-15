"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizeContainer = void 0;
const ResizeContainer = ({ containerId, resizeHandlerId }) => {
    const container = document.getElementById(containerId);
    const resizeHandler = document.getElementById(resizeHandlerId);
    if (!container || !resizeHandler)
        throw new Error("ContainerId or resizeHandlerId is required!");
    const maxWidth = parseInt(container.style.maxWidth.replace("px", ""), 10) || Infinity;
    const minWidth = parseInt(container.style.minWidth.replace("px", ""), 10) || 0;
    const onMouseMove = (eMove) => {
        const newWidth = eMove.clientX;
        if (newWidth > maxWidth) {
            container.style.width = `${maxWidth}px`;
        }
        else if (newWidth < minWidth) {
            container.style.width = `${minWidth}px`;
        }
        else {
            container.style.width = `${newWidth}px`;
        }
    };
    const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    };
    const onMouseDown = (e) => {
        e.preventDefault();
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    };
    if (resizeHandler)
        resizeHandler.addEventListener("mousedown", onMouseDown);
    return () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        resizeHandler === null || resizeHandler === void 0 ? void 0 : resizeHandler.removeEventListener("mousedown", onMouseDown);
    };
};
exports.ResizeContainer = ResizeContainer;
