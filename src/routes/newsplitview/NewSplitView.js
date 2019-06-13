import React from 'react';
import { Link } from 'react-router-dom';
import NewCategoryForm from '../../components/NewCategoryForm/NewCategoryForm';

export default function NewSplitView(props) {

    return <div>
        <Link to="/" className="c-link">&lt; Home</Link>
        <div className="o-vr o-vr" />
        <h1 className="c-hdg c-hdg--1">New Category</h1>
        <div className="o-vr o-vr--x3" />
        <div className="c-box">
            <div className="o-vertical o-vertical--center">
                <NewCategoryForm />
            </div>
        </div>
    </div>;
}
