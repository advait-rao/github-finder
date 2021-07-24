import React, { Fragment } from 'react';

const About = () => {
    return (
        <Fragment>
            <div className='card'>
                <h1>About this App</h1>
                <p>
                    This project allows you to search for GitHub users and
                    allows you to view customised user information cards.
                </p>
                <br />
                <p>
                    To know more, check out the{' '}
                    <a
                        href='https://github.com/advait-rao/github-finder'
                        target='_blank'
                        rel='noreferrer'
                    >
                        GitHub
                    </a>{' '}
                    page.
                </p>
            </div>
        </Fragment>
    );
};

export default About;
