import React from "react";
import { useState } from "react";

export const CounterApp2 = ({ number1 }) => {
    const [number, setNumber] = useState(number1);
    const onDivide = () => {
        setNumber(number / 2);
    };
    const onSubstract = () => {
        setNumber(number - 1);
    };
    const onAddition = () => {
        setNumber(number + 1);
    };
    const onMultiply = () => {
        setNumber(number * 2);
    };
    return (
        <div>
            <h1>CounterApp2</h1>
            <hr />
            <div className="flex p-3">
                <button
                    onClick={onDivide}
                    className="text-3xl bg-lime-500 m-2 border rounded-sm"
                >
                    /2
                </button>
                <button
                    onClick={onSubstract}
                    className="text-3xl bg-lime-400 m-2 border rounded-sm"
                >
                    -1
                </button>
                <h1 className="text-3xl bg-lime-300 font-semibold">{number}</h1>
                <button
                    onClick={onAddition}
                    className="text-3xl bg-lime-400 m-2 border rounded-sm"
                >
                    +1
                </button>
                <button
                    onClick={onMultiply}
                    className="text-3xl bg-lime-500 m-2 border rounded-sm"
                >
                    *2
                </button>
                <button className=""></button>
            </div>
        </div>
    );
};
