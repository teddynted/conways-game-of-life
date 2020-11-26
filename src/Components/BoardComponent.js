import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

const Row = styled.div`
    padding: 0;
    margin: 0;
    height: ${props => props.height};
    width: ${props => props.width};
`;

const Cell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    display: inline-block;
    width: ${props => props.width};
    height: ${props => props.height};
    text-align: center;
    span {
        display: inline-block;
    }
    ${({ background }) => background && `
        background-color: #000;
    `}
`;

const Button = styled.a`
    background-color: #f62459;
    color: #fff;
    padding: 10px;
    margin: 10px 0;
    display: inline-block;
    cursor: pointer;
`;

const buildTwoDimensionalArray = (cols, rows) => {
    let arr = new Array(cols);
    for(let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows); 
    }
    return arr;
}

const renderTable = (boardSize, cellSize) => {
    const cols = boardSize / cellSize;
    const rows = boardSize / cellSize;
    let grid = buildTwoDimensionalArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = Math.round(Math.random());
        }
    }
    return drawATable(cellSize, boardSize, grid);
}

const drawATable = (cellSize, boardSize, grid) => {
    let table = grid.map((row, i) => {
        return <Row height={`${cellSize}px`} width={`${boardSize}px`} key={i}>{
            row.map((cell, j) => {
                return <Cell key={j} background={grid[i][j] === 1} width={`${cellSize}px`} height={`${cellSize}px`}></Cell>;
            })
        }</Row>
    });
    return table;
}

const startIterations = (setGrid, generation, boardSize, cellSize) => {
    for (let k = 0; k < generation; k++) {
        (function() {
            let j = k;
            setTimeout(() => {
                setGrid(renderTable(boardSize, cellSize));
            }, 1000 * (j + 1));
        })();
    }
};

const BoardComponent = ({config}) => {
    const [grid, setGrid] = useState([]);
    const {
        boardSize,
        cellSize,
        generation
    } = config;
    return <Fragment>
        <Button onClick={() => startIterations(setGrid, generation, boardSize, cellSize)}>
            Start Iteration
        </Button>
        {grid && grid.length > 0 ? grid : renderTable(boardSize, cellSize)}
    </Fragment>;
}

export default BoardComponent;