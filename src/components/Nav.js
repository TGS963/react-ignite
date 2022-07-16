import React, {useState} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fetchsearched } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadein } from "../animations";

const Nav = () => {
    const dispatch = useDispatch();
    const [textinput, settextinput] = useState("");
    const inputhandler = (e) => {
        settextinput(e.target.value)
    }
    const submitsearch = (e) => {
        e.preventDefault();
        dispatch(fetchsearched(textinput));
        settextinput("");
    }
    const clearsearched = () => {
        dispatch({
            type: "CLEAR_SEARCHED",
        });
    }
    return (
        <StyledNav variants={fadein} initial="hidden" animate="show">
            <Logo>
                <img onClick={clearsearched} src={logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input onChange={inputhandler} type="text" value={textinput}/>
                <button onClick={submitsearch} type="submit" >Search</button>
            </form>
        </StyledNav>
    )
}

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);

    }
    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
    }
`
const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img {
        height: 2rem;
        width: 2rem;
    }
`
export default Nav;