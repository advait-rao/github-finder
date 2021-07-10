import React, { Fragment } from 'react';

const About = () => {
    return (
        <Fragment>
            <div className='card'>
                <h1>About this App</h1>
                <p>
                    This project allows you to search for Github users and
                    access some basic user information.
                </p>
                <br />
                <p>
                    Click{' '}
                    <a href='https://github.com/advait-rao/github-finder'>
                        here
                    </a>{' '}
                    to go to the Github page.
                </p>
            </div>
        </Fragment>
    );
};

export default About;
