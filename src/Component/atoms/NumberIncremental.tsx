import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import styled from "styled-components";
import usePrevious from "../../CustomHooks/usePreviousEffect";

const StyledText = styled.span`
    font-size:15px;
    padding:10px;
    padding-left:10px;
`

function NumberIncrementRenderer(props: NumberIncrementRendererInterface): JSX.Element {
    const previousNumber = usePrevious(props.number);
    return (
        <CountUp duration={0.3} start={previousNumber ? previousNumber : 0} end={props.number} delay={0}>
            {({ countUpRef }) => (
                <div>
                    <span ref={countUpRef} />
                </div>
            )}
        </CountUp>
    )
}

export default NumberIncrementRenderer;

interface NumberIncrementRendererInterface {
    number: number;
}