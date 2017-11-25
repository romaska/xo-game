import React, {Component} from 'react';
import Square from './Square.js';


const rowHeight = {
    height: 30
};


export default class Board extends Component{
    

    render(){
        return(
            <div>
                <div style={rowHeight}>
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
                <div style={rowHeight}>
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
                <div style={rowHeight}>
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
            </div>
        )
    }
}