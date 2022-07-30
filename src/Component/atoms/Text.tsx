import React from "react";
import styled from "styled-components";

const StyledText = styled.span`
    font-size:15px;
    padding:10px;
    padding-left:10px;
`

function TextComponent(props: TextComponentInterface) {
    return (
        <StyledText>
            <span>
                {props.text}
            </span>
        </StyledText>
    )
}

export default React.memo(TextComponent);

interface TextComponentInterface {
    text: string | number;
}