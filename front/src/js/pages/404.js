import React, { Component } from 'react';
import '../../css/about.scss';

class NotFound extends Component {
    render() {
        return (
            <div className="about">
                <div className="about__container">
                    <div className="content-background">
                        <div className="background-img"></div>
                    </div>
                    <div className="content">
                        Not FOUND
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;


