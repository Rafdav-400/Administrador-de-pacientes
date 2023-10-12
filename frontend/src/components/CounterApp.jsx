import React from "react";
import { useState } from "react";

export const CounterApp = ({counter5}) => {
    const [counter, setCounter] = useState(counter5);
    const onSubstract = () => {
        setCounter(counter - 1);
    };
    const onAddition = () => {
        setCounter(counter + 1);
    };
    const onReset = () => {
        setCounter(counter5);
    };
    return (
        <div>
            <h1 className="text-2xl">Este es mi contador</h1>
            <hr />
            <div className="flex p-3">
                <button
                    onClick={onSubstract}
                    className="text-2xl mr-3 p-2 border rounded-md bg-orange-400"
                >
                    -1
                </button>
                <h1 className="text-3xl mr-3 p-2 font-bold">{counter}</h1>
                <button
                    onClick={onAddition}
                    className="text-2xl mr-3 p-2 border rounded-md bg-orange-400"
                >
                    +1
                </button>
            </div>
            <div className="flex p-3">
                <button
                    onClick={onReset}
                    className="text-2xl border rounded-md bg-orange-300"
                >
                    Resetear
                </button>
            </div>
        </div>
    );
};
