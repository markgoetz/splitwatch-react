import React from 'react';
import GameListProvider from '../../components/GameListProvider/GameListProvider';
import { Link } from 'react-router-dom';

export default function IndexView(props) {
    return <div className="o-vertical o-vertical--center">
        <h2 className="c-hdg c-hdg--2">A web-based split timer for speedrunners.</h2>
        <div className="c-box">
            <form className="c-form">
                <GameListProvider>
                    <label htmlFor="indexview-gameselect" className="c-form__label">
                        Game
                    </label>
                    <div className="c-form__field">
                        <select className="c-select" id="indexview-gameselect"></select>
                    </div>
                    <div className="c-form__action">
                        <Link to="/newsplit" className="c-btn c-btn--secondary" type="button">New category...</Link>
                    </div>
                    <label className="c-form__label" htmlFor="indexview-categoryselect">
                        Category
                    </label>
                    <div className="c-form__field">
                        <select className="c-select" id="indexview-categoryselect"></select>
                    </div>
                </GameListProvider>

                <div className="c-form__fullrow">
                    <button className="c-btn c-btn--primary">Start a Run</button>
                </div>
            </form>
        </div>
    </div>;
}