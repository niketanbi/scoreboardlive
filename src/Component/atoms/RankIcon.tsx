import React from 'react';
import styled from 'styled-components';

const defaultAvatarContainer = styled.div``;
interface RankedIconStyledInterface {
    color: string | undefined;
}

const RankedIconStyled = styled.div<RankedIconStyledInterface>`
    height: 1.062rem; 
    width: 1.0625rem; 
    border-radius: 50%;
    display: flex;
    align-self: flex-start;
    background-color:${(props) => (props.color)};
    border: 10px;
    border-color:white;
    font-size:7px;
    color:white;
    align-items:center;
    justify-content:center;
    margin-top:13px;
    margin-right:15px;
    span{
        
    }
`
function rankColorSelector(rank: number) {
    switch (rank) {
        case 1:
            return "#F53B3E";
            break;
        case 2:
            return "#FC7A3C";
        case 3:
            return "#FFA22E";
        default:
            return "#97BCF0";
    }
}

function RankedIcon(props: RankedIconProps) {
    return (
        <RankedIconStyled color={rankColorSelector(props.rank)} >
            <span>{props.rank}</span>
        </RankedIconStyled>
    )
}

export default React.memo(RankedIcon);

export interface RankedIconProps {
    rank: number,
}