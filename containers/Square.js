import React, {Component} from 'react';


const squareCss = {
    width: 30,
    height: 30,
    border: "1px solid black",
    display: "inline-block",
    verticalAlign: "top",
    textAlign: "center"
};


export default class Square extends Component {
    render() {
        return (
            <div id={this.props.id} style={squareCss} onClick={() => this.props.onSquareClickHandler(this.props.id)}>
                {this.props.playerChar}
            </div>
        )
    }
}