import React, {Component} from 'react';


var squareCss = {
    width: 30,
    height: 30,
    border: "1px solid black",
    display: "inline-block"
};


export default class Square extends Component {
    render() {
        return (
            <div style={squareCss} onClick={() => this.onClickHandler()}>
                {this.props.playerChar}
            </div>
        )
    }
}