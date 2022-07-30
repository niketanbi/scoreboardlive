import React from 'react';
import styled from 'styled-components';

const ImageAvatarRound = styled.div`
  img {
    height: 2.0625rem; 
    width: 2.0625rem; 
    border-radius: 50%;
    display: flex;
    align-self: flex-start;
    border: solid white 5px;
  }
`;
const defaultAvatarWrapper = styled.div`
    height: 3.562rem; 
    width:  3.5625rem;
    border-radius: 50%;
    display: flex;
    align-self: flex-start;
    background-color:#ffff;

`;

const DefaultAvatar = styled.div`
    height:2.062rem; 
    width: 2.0625rem; 
    border-radius: 50%;
    display: flex;
    align-self: flex-start;
    background-color:#E2E0E2;
    border: solid white 5px;
    border-color:white;
`

function RoundIconAvatar(props: IRoundIconAvatarProps) {
  return (
    <ImageAvatarRound>
      {props.src ? <img src={props.src} /> : <DefaultAvatar />}
    </ImageAvatarRound>
  )
}

export default React.memo(RoundIconAvatar);

export interface IRoundIconAvatarProps {
  src?: string | undefined,
  rank: number | undefined,
}