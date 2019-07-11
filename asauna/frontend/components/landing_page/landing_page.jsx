import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';


class Splash extends React.Component {


    render () {
        return (
            <div>
                <header className="splash--header">
                    <div className="splash--subheader">
                        <div className="splash--mark">
                            <i className="fas fa-fire"></i>
                            &nbsp;
                            asauna
                        </div>
                        <div className="splash--session--container">
                            <Link to={`/login`} className="splash--session">Log In</Link>
                            &nbsp;
                            &nbsp;
                            <Link to={`/signup`} className="splash--session">Sign Up</Link>
                        </div>
                    </div>
                    {/* <div>
                    </div> */}
                </header>
                <section className="splash--section">
                    <div className="splash--container">
                        <div className="splash--masthead">
                            <div className="splash--centerpiece">
                                <div className="textStack">
                                    <p className="-label">
                                        Asauna Premium
                                    </p>
                                    <h4 className="splash--page--header">
                                        Help your team do its best work with Asauna
                                    </h4>
                                    <p className="splash--page--subheader">
                                        Go beyond to-do lists and get the features you need to plan and manage projects—from start to finish.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="splash--image--container">
                            <div className="left--content--container">
                                <p className="-label">
                                    Efficiency
                                </p>
                                <h4 className="-h4">
                                    Increase your team's efficiency by 45%
                                </h4>
                                <p className="-large">
                                    Teams report they get more done with less time and resources when using Asana Premium because its powerful features help them execute work successfully.
                                </p>
                            </div>
                            <div className="right--image--container">
                                <img class="lazyImage" data-srcset="https://luna1.co/61c299.png 1x, https://luna1.co/6f851d.png 2x" data-src="https://luna1.co/6f851d.png" alt="Person with productivity icons" src="https://luna1.co/6f851d.png" srcset="https://luna1.co/61c299.png 1x, https://luna1.co/6f851d.png 2x"></img>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Splash