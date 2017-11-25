import {connect} from 'react-redux'
import React, {Component} from 'react';
import Square from './Square.js';
import addPlayerChar from '../actions/Actions';



const rowHeight = {
    height: 30
};


class Board extends Component {
    getSquare(i) {
        return <Square id={i} playerChar={this.props.boardArr[i]} onSquareClickHandler={this.props.onSquareClickHandler}/>
    }

    render() {
        return (
            <div>
                <div style={rowHeight}>
                    {this.getSquare(0)}
                    {this.getSquare(1)}
                    {this.getSquare(2)}
                </div>
                <div style={rowHeight}>
                    {this.getSquare(3)}
                    {this.getSquare(4)}
                    {this.getSquare(5)}
                </div>
                <div style={rowHeight}>
                    {this.getSquare(6)}
                    {this.getSquare(7)}
                    {this.getSquare(8)}
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        boardArr: state.boardArr
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSquareClickHandler: id => {dispatch(addPlayerChar(id))}
    }
};


Board = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);


export default Board;