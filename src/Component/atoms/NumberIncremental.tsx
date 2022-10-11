import React, { EffectCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import usePrevious from "../../CustomHooks/usePreviousEffect";

const StyledText = styled.span`
    font-size:15px;
    padding:10px;
    padding-left:10px;
`

function NumberIncrementRenderer({ start = 0, end, timer }: NumberIncrementRendererInterface): JSX.Element {
    // console.clear();
    const [currentNumber, setCurrentNumber] = useState<null | number>(null);
    const numberRef = useRef(start);
    const endRef = useRef(end);
    // const accumlator = ((end - start > 0) ? ((end - start) / 200) : 200);
    const accumlator = end / 200;

    const updateCounter = () => {
        if (end - start > 0) {
            if (numberRef.current < end) {
                const result = Math.ceil(numberRef.current + accumlator);
                if (result > end) return setCurrentNumber(end);
                setCurrentNumber(result);
                numberRef.current = result;
            }
        }
        else {
            if (numberRef.current > end) {
                const result = Math.ceil(numberRef.current - accumlator);
                console.log(numberRef.current, end, result, accumlator, "current and end", result < numberRef.current);
                if (result < numberRef.current) return setCurrentNumber(numberRef.current);
                setCurrentNumber(result);
                numberRef.current = result;
            }
        }
        setTimeout(updateCounter, timer);
    };
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            updateCounter();
        }
        return () => (isMounted = false);
    }, [end, start]);

    return (
        // <CountUp duration={0.3} start={previousNumber ? previousNumber : 0} end={props.number} delay={0}>
        // {({ countUpRef }) => (
        <div>
            <span>{currentNumber}</span>
        </div>
        // )}
        // </CountUp>
    )
}

// const Counter = ({ start, end }: any) => {
//     // useState maintains the value of a state across
//     // renders and correctly handles its changes
//     const [count, setCount] = useState(start);
//     // useMemo only executes the callback when some dependency changes
//     const increment = React.useMemo(() => end / 200, [end]);

//     // The logic of your counter
//     // Return a callback to "unsubscribe" the timer (clear it)
//     const doIncrement = () => {
//         if (count < end) {
//             const timer = setTimeout(
//                 () => setCount(
//                     count < (end - increment)
//                         ? count + increment
//                         : end
//                 ),
//                 1);
//             return () => clearTimeout(timer);
//         }
//     }

//     // useEffect only executes the callback once and when some dependency changes
//     React.useEffect(doIncrement, [count, end, increment]);

//     // Render the counter's DOM
//     return (
//         <div> {count}</div>
//     )
// }

export default NumberIncrementRenderer;

interface NumberIncrementRendererInterface {
    start: number | undefined;
    end: number;
    timer: number;
}
