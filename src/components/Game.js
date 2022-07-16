import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import loaddetail from "../actions/detailAction";
import { Link } from "react-router-dom";
import { getsmallimage } from "../util";
import { popup } from "../animations";


const Game = ({name, released, image, id}) => {
    const dispatch = useDispatch();
    const loaddetailhandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loaddetail(id));
        
    }

    return (
        <StyledGame variants={popup} initial="hidden" animate="show" layoutId = {id} onClick={loaddetailhandler}>
            <Link to={`/game/${id}`} >
                <motion.h3 layoutId={`name ${id}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${id}`} src={image} alt={name}/>
            </Link>
            
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`

export default Game;