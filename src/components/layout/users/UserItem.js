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
        return <div>User Item</div>;
    }
}

export default UserItem;
