import React from "react";

const Modal = ({ title, open, onCancel, footer, children }) => {
    if (!open) return null;

    return (
        <div className="fixed bg-gray -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 w-1/4 h-1/6 flex items-center justify-center rounded-3xl">
            <div className=" rounded-lg p-8 max-w-md w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button
                        className="bg-indigo-600 px-3 py-2 text-xl rounded-xl justify-end"
                        onClick={onCancel}
                    >
                        Close
                    </button>
                </div>
                <div>{children}</div>
                {footer && <div className="mt-4">{footer}</div>}
            </div>
        </div>
    );
};

export default Modal;
