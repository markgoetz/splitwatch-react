import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import xIcon from '../../assets/x.svg';

export default function NewSplitView(props) {
    const [splits, setSplits] = useState(['']);

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

    
    return <div>
        <Link to="/" className="c-link">&lt; Home</Link>
        <div className="o-vr o-vr" />
        <h1 className="c-hdg c-hdg--1">New Category</h1>
        <div className="o-vr o-vr--x3" />
        <div className="c-box">
            <div className="o-vertical o-vertical--center">
                <form className="c-form">
                    <label className="c-form__label" htmlFor="newcategory-game">Game</label>
                    <div className="c-form__field">
                        <input className="c-input" id="newcategory-game" />
                    </div>
                    <label className="c-form__label" htmlFor="newcategory-category">Category</label>
                    <div className="c-form__field">
                        <input className="c-input" id="newcategory-category" />
                    </div>
                    <div className="c-form__fullrow">
                        <hr />
                    </div>
                    <div className="c-form__fullrow">
                        <h2 className="c-hdg c-hdg--2 u-mix-center">Splits</h2>
                    </div>
                    { splitFields }
                    <div className="c-form__fullrow">
                        <button className="c-btn c-btn--secondary u-mix-fullwidth" type="button" onClick={addSplit}>Add another split</button>
                    </div>
                </form>
            </div>
        </div>
    </div>;
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