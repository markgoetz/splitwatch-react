import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ControlsView from '../routes/controlsview/ControlsView';
import IndexView from '../routes/indexview/IndexView';
import NewSplitView from '../routes/newsplitview/NewSplitView';
import Header from '../components/Header/Header';

import '../style/index.css';
import GameListProvider from './GameListProvider/GameListProvider';

const initialTimer = {
    isPlaying: false,
    startTime: 0,
    baseTime: 0
};

export default function(props) {
    const [timer] = useState({ initialTimer });
    const [splits] = useState([]);

    return (
        <div className="o-app">
            <div className="o-app__hd">
                <Header/>
            </div>
            <div className="o-app__bd">
                <GameListProvider>
                    <Router>
                        <Switch>
                            <Route exact path="/controls" render={props => <ControlsView startTime={timer.startTime}
                            baseTime={timer.baseTime}
                            isPlaying={timer.isPlaying}
                            splits={splits} />}></Route>
                            <Route exact path="/" component={IndexView} />
                            <Route exact path="/newsplit" component={NewSplitView} />
                        </Switch>
                    </Router>
                </GameListProvider>
            </div>
            <div className="o-app__ft"></div>
        </div>
    );
}
