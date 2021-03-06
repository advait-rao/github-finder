import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.showAlert('Please enter something', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    };

    const onChange = (e) => setText(e.target.value); //setting state.text to the value of the search field

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input
                    type='text'
                    name='text'
                    value={text}
                    onChange={onChange}
                    placeholder='search users...'
                />
                <input
                    type='submit'
                    value='search'
                    className='btn btn-dark btn-block'
                />
            </form>
            {githubContext.users.length > 0 && (
                <button
                    className='btn btn-light btn-block'
                    onClick={githubContext.clearUsers}
                >
                    Clear
                </button>
            )}
        </div>
    );
};

export default Search;
