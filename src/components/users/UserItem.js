import React, { Component } from 'react';

class UserItem extends Component {
    constructor() {
        super();
        this.state = {
            id: 'id',
            login: 'advait-rao',
            avatar_url:
                'https://avatars.githubusercontent.com/u/84999187?s=400&u=1ad974498903da361298fc5d2fba370da004cb85&v=4',
            html_url: 'https://github.com/advait-rao',
        };
    }
    render() {
        return (
            <div className='card text-center'>
                <img
                    src={this.state.avatar_url}
                    alt=''
                    className='round-img'
                    style={{ width: '100px' }}
                ></img>
                <h3> {this.state.login} </h3>
                <div>
                    <a
                        href={this.state.html_url}
                        className='btn btn-dark btn-sm my-1'
                    >
                        More
                    </a>
                </div>
            </div>
        );
    }
}

export default UserItem;
