import React, { EffectCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledText = styled.span`
    font-size:15px;
    padding:10px;
    padding-left:10px;
`

function NumberIncrementRenderer({ start = 0, end, timer }: NumberIncrementRendererInterface): JSX.Element {
    const [currentNumber, setCurrentNumber] = useState<number | null>(null);
    const numberRef = useRef(start);
    const accumlator = Math.abs((end - start) / 5);

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
                if (result < end) return setCurrentNumber(start);
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
        return () => { isMounted = false };
    }, [end, start]);

    return (
        <div>
            <span>{currentNumber}</span>
        </div>
    )
}

export default NumberIncrementRenderer;

interface NumberIncrementRendererInterface {
    start: number | undefined;
    end: number;
    timer: number;
}
