import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWitchCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter with Hook: { state }</h1>
            <hr/>

            <button className="btn btn-primary" onClick={ () => increment() }> +1 </button>
            <button className="btn btn-primary ml-2" onClick={ () => decrement() }> -1 </button>
            <button className="btn btn-primary ml-2" onClick={ reset }> Reset </button>
        </>
    )
}
