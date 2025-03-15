import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { ReactNode } from "react";



function CustomErrorBoundaryUI({ error, resetErrorBoundary }: FallbackProps) {

    return (
        <div className="flex items-center justify-center h-screen">
            <div role="alert" className="alert alert-error">
                <p>Something went wrong:</p>
                <div>{error?.message}</div>
                <button className="cursor-pointer hover:border" onClick={resetErrorBoundary}>Try again</button>
                <button className="cursor-pointer hover:border" onClick={() => window.location.href = "/"}>Home</button>

            </div>
        </div>



    )
}

export default function CustomErrorBoundary({ children }: { children: ReactNode }) {

    return (
        <ErrorBoundary FallbackComponent={CustomErrorBoundaryUI}
            onReset={() => { window.location.reload() }}
        >
            {children}

        </ErrorBoundary>
    )
}

