import React from "react";
import { withRouter } from 'react-router-dom';


class LoadingPage extends React.Component {
    constructor(props) {
        super(props)

;

        this.state = {
            splashFinished: false,
        }


        // this.handleLogout = this.handleLogout.bind(this)
    }

    // handleLogout(e) {
    //     this.props.logout()
    //     .then(this.props.history.push('/login'))
    // }

    componentDidMount(){
        let that = this;
        this.props.fetchWorkspaces()
        .then(setTimeout(() => {
            if (!!that.props.workspaces.length) {
                that.props.history.push(`/home/${that.props.workspaces[that.props.workspaces.length - 1].id}`)
            } else {
                that.props.history.push('/home/create')
            }
        }, 2000)
        )
    }



    render() {
        const stylesObj1 = {
            background: "rgba(255, 82, 99, 0.9)"
        }
        const stylesObj2 = {
            background: "rgba(255, 115, 129, 0.9)"
        }
        const stylesObj3 = {
            background: "rgba(252, 189, 1, 0.9)"
        }

        return (
            <div>
                <div className="spinner">
                    <div className="bounce1" style={stylesObj1}></div>
                    <div className="bounce2" style={stylesObj2}></div>
                    <div className="bounce3" style={stylesObj3}></div>
                </div>
                <div className="loadinglogo">
                    <i className="fas fa-fire"></i>
                    <div className="session--logo">asauna</div>
                </div>
            </div>
        )
    }
}

export default withRouter(LoadingPage)