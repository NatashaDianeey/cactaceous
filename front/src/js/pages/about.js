import React, { Component } from 'react';
import '../../css/about.scss';

import imagoC from '../../svg/imagotipo.svg';

class AboutPage extends Component {
    render() {
        return (
            <div className="about">
                <div className="about__container">
                    <div className="content-background">
                        <div className="background-img"></div>
                    </div>
                    <div className="content">
                        <div className="content-40">
                            <img src={imagoC} alt="C"/>
                            <div className="content-text">
                                <h4 className="title">What?</h4>
                                <h5 className="sbtitle">Let’s get to the root of it.</h5>
                                <p className="text">Monstruosus thoughtfully crafts ceramics for discerning plant-lovers. Made in Oregon. Made to last.</p>
                            </div>
                        </div>
                        <div className="content-60">
                            <div className="content-text">
                                <h4 className="title">Why?</h4>
                                <h5 className="sbtitle">Imperfect balance.</h5>
                                <p className="text">Mother Nature’s hand sometimes lends a savage beauty to some of her creations. This includes the Monstruosus – a variety of cactus whose forms and fronds grow with a natural genetic deformation. In its twisted nature, we appreciate the majesty of the plant world: its randomness and surprise. Touching on a similar juxtaposition, we established Monstruosus to craft simple, purposeful, ceramics that quietly adapt to their surroundings while balancing plants’ unexpected natural drama. We sweat the details, in design and production, so that our planters stand the test of time and trends. Our designs honor a strong lineage of Mid-Century American ceramic craftsmanship while building and evolving these traditions to fit an inspired, contemporary lifestyle. Monstruosus privileges simplicity and material integrity to allow each one of your carefully selected plants to thrive without distraction.</p>
                            </div>
                            <div className="content-text">
                                <h4 className="title">How?</h4>
                                <h5 className="sbtitle">Getting our hands dirty.</h5>
                                <p className="text">Our professional casters like to say that, chemically speaking, clay is just “dirty glass,” but, from start to finish, our process is nothing but pure. Monstruosus ceramics are slip-cast from clay, mined as close as possible to its geologic source. This minimizes the accumulation of minerals that would otherwise taint its pure white base. Once the clay arrives at our Oregon studio, we pay close attention to numerous variables that could affect its elasticity: the season, daily temperature and humidity, and the clay’s fluctuating chemical makeup of talc, silica, and feldspar. Our casters use their sixth sense, or “caster intuition” to respond to these qualities by hand sculpting each ceramic planter and modifying every step of the process to ensure Monstruosus planters are consistently and durably formed, fired, and refined.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;


