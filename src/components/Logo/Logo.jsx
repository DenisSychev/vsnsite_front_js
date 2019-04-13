import React, { PureComponent } from 'react';
import './logo.sass';

export default class Logo extends PureComponent {
    render() {
        return (
            <a href="/" className="logo">
                <span>Лог</span>
                <span className="cuboid">
                    <span className="cuboid-face cuboid-face-front"></span>
                    <span className="cuboid-face cuboid-face-back"></span>
                    <span className="cuboid-face cuboid-face-top"></span>
                    <span className="cuboid-face cuboid-face-bottom"></span>
                    <span className="cuboid-face cuboid-face-left"></span>
                    <span className="cuboid-face cuboid-face-right"></span>
                </span>
                <span>тип</span>
            </a>
        );
    }
};