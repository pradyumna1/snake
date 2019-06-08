import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {getInitialState} from './lib/utils';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.type = props.state;
    }
    render() {
        return (
            <div className={`square ${this.type}`}>
            </div>
        )
    }
} 

class Row extends React.Component {
    constructor(props) {
        super(props);
        this.length = props.length;
        this.rowStates = props.rowStates;
    }
    renderSquares() {
        const squares = [];
        for (let i = 0; i < this.length; i++) {
            squares.push(
                <Square state={this.rowStates[i]}/>
            )
        }
        return squares;
    }
    render() {
        return (  
            <div className="grid-row">
                {this.renderSquares()}
            </div>
        )
    }
}

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.rows = props.rows;
        this.columns = props.columns;
        this.gridStates = props.gridStates;
    }
    
    renderRows() {
        const rows = [];
        for (let i = 0; i < this.rows; i++) {
            rows.push(
                <Row length={this.columns} rowStates={this.gridStates[i]}/>
            )
            
        }
        return rows;
    } 
    render() {
        return (
            <div>
                {this.renderRows()}
            </div> 
        )
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gridStates: getInitialState(),
        }
    }
    render() {
        return (
            <div>
                <h1>Snake</h1>
                <div>
                    <Grid rows={50} columns={50} gridStates={this.gridStates}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
)
