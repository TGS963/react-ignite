import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starempty from "../img/star-empty.png"
import starfull from "../img/star-full.png"

const GameDetail = ({pathid}) => {
    const navigate = useNavigate();
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')){
            document.body.style.overflow = "auto";
            navigate('/')
        }
    }
    const getstars = () =>{
        const stars = [];
        const rating = Math.floor(game.rating);
        for ( let i = 0; i <= 5; ++i ){
            if ( i < rating ){
                stars.push(<img alt="star" key={i} src={starfull} />)
            }
            else {
                stars.push(<img alt="star" key={i} src={starempty} />)
            }
        }
        return stars;
    }
    const getplatform = (platform) =>{
        switch (platform){
            case "PlayStation 4":
                return playstation;
            case "PlayStation 5":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad;
        }
    }
    const {game, screen, isLoading} = useSelector(state => state.detail);
    return (
        <>
        {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
            <Detail layoutId={pathid}>
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId={`name ${pathid}`}>{game.name}</motion.h3>
                        <p>Rating: {game.rating}</p>
                        {getstars()}
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {game.platforms.map (data => (
                                <img key={data.platform.id} src={getplatform(data.platform.name)} alt={data.platform.name}/>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <motion.img layoutId={`image ${pathid}`} src={game.background_image} alt="game_image" />
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
                <Gallery>
                    {screen.results.map(screen => (
                        <img src={screen.image} alt="game" key={screen.id}/>
                    ))}
                </Gallery>
            </Detail>
        </CardShadow>
        )}
        </>
    );
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track{
        background: white;
    }
`
const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
`
const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 2rem;
        height: 2rem;
        display: inline;
    }
`
const Info = styled(motion.div)`
    text-align: center;
`
const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`
const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
    }
`
const Gallery = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
    }
`
const Description = styled(motion.div)`
    margin: 5rem 0rem;
`

export default GameDetail;