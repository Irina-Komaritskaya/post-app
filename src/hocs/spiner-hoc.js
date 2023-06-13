import { Spinners } from "../components/spinner";
import React, { useState, useEffect } from "react";

export const hocSpinner = (Component) => (props) => {
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setloading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [loading]);

    return <>{loading ? <Spinners /> : <Component {...props} />}</>;
};

export const SpinnerDelay = hocSpinner(({ children }) => {
    return <>{children}</>;
});
