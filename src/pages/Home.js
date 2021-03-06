import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadgames } from "../actions/gamesAction";
import Game from "../components/Game";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";
import { fadein } from "../animations";

const Home = () => {
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];
    const dispatch = useDispatch();
    useEffect(()=>{
        //console.log(loadgames())
        dispatch(loadgames())
    }, [dispatch])
    const {popular, newgames, upcoming, searched, isLoading} = useSelector((state) => state.games)
    return (<> 
        <GameList variants={fadein} initial="hidden" animate="show">
            <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
                {pathId && <GameDetail pathid = {pathId} />}
            </AnimatePresence>
            {searched.length ? (
            <div className="searched">
                
                <h2>Searched Games</h2>
                <Games onClick={() => {
                    <GameDetail />
                }}>
                    {searched.map(game => (
                        <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                    ))}
                </Games>
                
            </div>): ''}
            <h2>Upcoming Games</h2>
            <Games onClick={() => {
                <GameDetail />
            }}>
                {upcoming.map(game => (
                    <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popular.map(game => (
                    <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                ))}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newgames.map(game => (
                    <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                ))}
            </Games>
            </AnimateSharedLayout>
        </GameList></>
    );
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`;
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;