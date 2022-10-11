import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import CardComponent from "../molecules/Card";
import styled from "styled-components";
import randomScoreGenerator from "../../shared/randomScoreGenerator";

const StoryBoard = styled.div`
    border-radius:10px;
    background-color:white;
    margin:20px;
`

function StoryBoardComponent() {
    const [userData, setUserData] = useState<Array<any>>(randomScoreGenerator());

    const treeRoot = React.createRef<any>();

    const conditionalInvertStyling = (delta: any, element: HTMLElement) => {
        element.style.transform = `translate(${delta.left}px, ${delta.top}px)`;
        element.style.transition = `transform 0s`;
    };

    const conditionalTransofrmStyling = (element: HTMLElement) => {
        element.style.transform = ``;
        element.style.transition = `transform 500ms ease`;
    };

    const origins = useRef<{ [key: string]: any }>({});

    let flagInitialRun = useRef(true);

    const getCalculatedPositions = (start: any, target: any) => ({
        top: start.top - target.top,
        left: start.left - target.left,
        width: start.width / target.width,
        height: start.height / target.height,
    });

    const isZero = (delta: any) =>
        delta.left === 0 &&
        delta.top === 0 &&
        delta.width === 1 &&
        delta.height === 1;


    useLayoutEffect(() => {
        if (treeRoot.current === null) return;
        const list = treeRoot.current;
        const children: HTMLElement[] = Array.prototype.slice.call(list.children);

        for (const child of children) {
            const key = child.dataset.key!;

            const next = child.getBoundingClientRect();
            if (!flagInitialRun.current) {
                if (key in origins.current) {
                    const previous = origins.current[key];
                    const delta = getCalculatedPositions(previous, next);
                    if (!isZero(delta)) {
                        conditionalInvertStyling(delta, child);

                        requestAnimationFrame(() => {
                            conditionalTransofrmStyling(child);
                        });
                    }
                }
            }

            origins.current[child.dataset.key!] = next;
        }

        flagInitialRun.current = false;
    }, [treeRoot, conditionalInvertStyling, conditionalTransofrmStyling]);


    useEffect(() => {
        const setIntevalId = setInterval(() => {
            setUserData(randomScoreGenerator());
        }, 5000);
        return (() => { clearTimeout(setIntevalId); })
    }, []);
    return (
        <StoryBoard ref={treeRoot} >
            {userData.map((userDetails: userDetailsInterface, index: number) => {
                return (
                    <CardComponent id={userDetails.userID} key={userDetails.userID} userID={userDetails.userID} type={(index % 2 === 0) ? "even" : "odd"} text={userDetails.displayName} imageLink={userDetails.picture} rank={index + 1} score={userDetails.score} />
                )
            })}
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