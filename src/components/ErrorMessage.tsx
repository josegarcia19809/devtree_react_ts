import * as React from "react";

type ErrorMessageProps = {
    children: React.ReactNode,
}

function ErrorMessage({ children }: ErrorMessageProps) {
    return (
        <div className="mt-4 rounded-md bg-red-500/10 border border-red-500
        text-red-400 px-4 py-2 text-sm uppercase">
            {children}
        </div>
    );
}


export default ErrorMessage;