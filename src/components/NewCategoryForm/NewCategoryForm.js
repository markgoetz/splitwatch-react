import React, { Fragment, useState, useContext } from 'react';
import useReactRouter from 'use-react-router';
import GameListContext from '../../lib/GameListContext';
import xIcon from '../../assets/x.svg';

export default function NewCategoryForm(props) {
    const [splits, setSplits] = useState(['']);
    const [gameTitle, setGameTitle] = useState('');
    const [categoryTitle, setCategoryTitle] = useState('');
    const { history } = useReactRouter();

    const gameListContext = useContext(GameListContext);

    const saveGame = e => {
        e.preventDefault();
        gameListContext.addCategory(gameTitle, categoryTitle, 'id');
        history.push('/');
    }

    const addSplit = () => { setSplits([...splits, ''])};
    const removeSplit = index => {
        setSplits([...splits.slice(0, index), splits.slice(index + 1)]);
    }
    const setSplitName = (index, name) => {
        let newSplits = [...splits];
        newSplits[index] = name;
        setSplits(newSplits);
    };

    let splitFields = splits.map(renderSplitField(setSplitName, removeSplit));

    return <form className="c-form" onSubmit={saveGame}>
        <label className="c-form__label" htmlFor="newcategory-game">Game</label>
        <div className="c-form__field">
            <input className="c-input" id="newcategory-game" defaultValue={gameTitle} onChange={e => setGameTitle(e.target.value)} />
        </div>
        <label className="c-form__label" htmlFor="newcategory-category">Category</label>
        <div className="c-form__field">
            <input className="c-input" id="newcategory-category" defaultValue={categoryTitle} onChange={e => setCategoryTitle(e.target.value)} />
        </div>
        <div className="c-form__fullrow">
            <hr />
        </div>
        <div className="c-form__fullrow">
            <h2 className="c-hdg c-hdg--2 u-mix-center">Splits</h2>
        </div>
        { splitFields }
        <div className="c-form__field">
            <button className="c-btn c-btn--secondary u-mix-fullwidth" type="button" onClick={addSplit}>Add another split</button>
        </div>
        <div className="c-form__fullrow">
            <hr />
        </div>
        <div className="c-form__fullrow">
            <button className="c-btn c-btn--primary u-mix-fullwidth">
                Save
            </button>
        </div>
    </form>;
}

function renderSplitField(setSplitName, removeSplit) {
    return (splitName, index, splits) => {
        const id = `newsplit-split${index};`

        return <Fragment key={index}>
            <label className="c-form__label" htmlFor={id}>
                Name for split {index + 1}
            </label>
            <div className="c-form__field">
                <input className="c-input"
                    id={id}
                    onChange={e => setSplitName(index, e.target.value)}
                    value={splitName} />
            </div>
            <div className="c-form__action">
                <button className="c-btn c-btn--remove"
                    type="button" 
                    disabled={splits.length === 1}
                    onClick={() => removeSplit(index)}>
                    <img src={xIcon} alt="Remove this split" />
                </button>
            </div>
        </Fragment>;
    }
}