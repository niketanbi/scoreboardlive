import React, { useEffect, useState } from "react";
import CardComponent from "../molecules/Card";
import styled from "styled-components";
import randomScoreGenerator from "../../shared/randomScoreGenerator";
import { useFlip, FlipProvider } from "react-easy-flip";


const StoryBoard = styled.div`
    border-radius:10px;
    background-color:white;
    margin:20px;
`


function StoryBoardComponent() {
    const [userData, setUserData] = useState<Array<any>>(randomScoreGenerator());
    const todoItemsId = "flip-todo-items";

    useFlip(todoItemsId, {
        duration: 800,
    });

    useEffect(() => {
        const setIntevalId = setInterval(() => {
            setUserData(randomScoreGenerator());
        }, 1000);
        return (() => { clearTimeout(setIntevalId); })
    }, []);

    return (

        <StoryBoard data-flip-root-id={todoItemsId}>
            <FlipProvider>
                {userData.map((userDetails: userDetailsInterface, index: number) => {
                    return (
                        <CardComponent id={userDetails.userID} userID={userDetails.userID} type={(index % 2 === 0) ? "even" : "odd"} text={userDetails.displayName} imageLink={userDetails.picture} rank={index + 1} score={userDetails.score} />
                    )
                })}
            </FlipProvider>
        </StoryBoard>
    )
}

export default StoryBoardComponent;

interface userDetailsInterface {
    userID: string,
    displayName: string,
    picture: string,
    score: number,
}