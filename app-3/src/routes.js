import React from "react";
import { Routes, Route } from "react-router-dom";
// find out which one is correct at some point
// import { Switch, Route } from 'react-router-dom'
import Pokemon from "./Pokemon";
import PokemonList from "./PokemonList";

export default (
  <Routes>
    <Route exact path="/" component={PokemonList} />
    <Route path="/pokemon/:name" component={Pokemon} />
  </Routes>
);
