import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
export const PlayerCount = () => {

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }

  const dispatch = useDispatch();

  const updatePlayers = (p) => {
    p === 1
      ? dispatch({ type: 'SET_PLAYER_COUNT', payload: 1 })
      : dispatch({ type: 'SET_PLAYER_COUNT', payload: 2 });
    routeChange('/newgame');
  }

  return (
    <>
      <div className="container">
        <h2>Select Player Count</h2>
        <button onClick={() => updatePlayers(1)}>One</button>
        <button onClick={() => updatePlayers(2)}>Two</button>
      </div>
    </>
  )
}