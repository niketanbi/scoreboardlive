import React from "react";
import TextComponent from "../atoms/Text";
import styled from "styled-components";
import RoundIconAvatar from "../atoms/RoundIconAvatar";
import RankedIcon from "../atoms/RankIcon";
import NumberIncrementRenderer from "../atoms/NumberIncremental";
import usePrevious from "../../CustomHooks/usePreviousEffect";

interface CardStyledInterface {
    type: string | undefined;
}

const CardStyled = styled.div <CardStyledInterface>`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    padding:10px;
    background-color:${(props) => (props.type == "odd") ? "#F9FAFE" : "#ffff"};
    border-bottom:1px  grey;
    &:hover{
        background-color:#4A69DD;
    };
`
const ProfileContainer = styled.div`
    display:flex;
    font-size:30px;
    font-weight:bold;
    min-width:200px;
    max-width:200px;
`

function CardComponent(props: CardComponentInterface) {
    const previousNumber = usePrevious(props.score);
    return (
        <CardStyled data-key={props.userID} key={props.userID} type={props.type}>
            <ProfileContainer>
                <RankedIcon rank={props.rank} />
                <RoundIconAvatar src={props.imageLink} rank={props.rank} />
                <TextComponent text={props.text} />
            </ProfileContainer>
            <NumberIncrementRenderer start={previousNumber} end={props.score} timer={50} />
        </CardStyled>
    )
}

export default CardComponent;

interface CardComponentInterface {
    text: string,
    rank: number,
    imageLink: string,
    key?: number | string,
    type?: string,
    score: number,
    id?: string | number,
    userID: string,
}