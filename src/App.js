import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

import AlbumList from "./pages/AlbumList"
import AlbumDetail from "./pages/AlbumDetail"

export const App = () => {
  return (
    <BrowserRouter>
      <header>
        <h1>The Beatles</h1>
        <Route path="/albums">
          <Link to="/">
            Back to the list
          </Link>
        </Route>
      </header>
      <Switch>
        <Route path="/" exact>
          <AlbumList />
        </Route>
        <Route path="/albums/:idAlbum" >
          <AlbumDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
