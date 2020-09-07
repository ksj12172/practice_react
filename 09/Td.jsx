import React, {useContext, useCallback,memo, useMemo} from 'react';
import {TableContext, CODE, OPEN_CELL, CLICK_MINE, FLAG_CELL,
    QUESTION_CELL, NORMALIZE_CELL} from './MineSearch';

const getTdStyle = (code) => {
    switch (code) {
        case CODE.NORMAL:
        case CODE.MINE:
            return {
                background:'#444'
            };
        case CODE.CLICKED_MINE:
        case CODE.OPENED:
            return {
                background:'white'
            }
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
            return {
                background:'yellow'
            };
        case CODE.FLAG_MINE:
        case CODE.FLAG:
            return {
                background:'red'
            };
        default:
            return {
                background:'white'
            }
    }
}

const getTdText = (code) => {
    switch (code) {
        case CODE.NAORMAL:
            return '';
        case CODE.MINE:
            return 'X';
        case CODE.CLICKED_MINE:
            return '펑';
        case CODE.FLAG_MINE:
        case CODE.FLAG:
            return '!';
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
            return '?';
        default:
            return code;
    }
}

const Td = memo(({ rowIndex, cellIndex }) => {
    const {tableData, halted, dispatch} = useContext(TableContext);

    const onClickTd = useCallback(() => {
        if (halted) return;

        switch(tableData[rowIndex][cellIndex]) {            
            case CODE.OPENED:
            case CODE.FLAG_MINE:
            case CODE.FLAG:
            case CODE.QUESTION_MINE:
            case CODE.QUESTION:
                return;
            case CODE.NORMAL:
                dispatch({type:OPEN_CELL, row:rowIndex, cell:cellIndex});
                return;
            case CODE.MINE:
                dispatch({type:CLICK_MINE, row:rowIndex, cell:cellIndex});
                return;
        }        
    },[tableData[rowIndex][cellIndex], halted]);

    const onRightClickTd = useCallback((e)=>{
        e.preventDefault();
        if (halted) return;
        switch (tableData[rowIndex][cellIndex]) {
            case CODE.NORMAL:
            case CODE.MINE:
                dispatch({type:FLAG_CELL, row:rowIndex, cell:cellIndex});
                return;
            case CODE.FLAG_MINE:
            case CODE.FLAG:
                dispatch({type:QUESTION_CELL, row:rowIndex, cell:cellIndex});
                return;
            case CODE.QUESTION_MINE:
            case CODE.QUESTION:
                dispatch({type:NORMALIZE_CELL, row:rowIndex, cell:cellIndex});
                return;
            default:
                return;
        }
    },[tableData[rowIndex][cellIndex], halted]);

    // Td라는 함수는 row*cell번 실행되지만 useMemo하면 실제 render는 값이 바뀔 때만 된다
    // 값을 저장해서 rerendering 되지 않게 하기
    return <RealTd onClickTd={onClickTd} onRightClickdTd={onRightClickTd} data={tableData[rowIndex][cellIndex]}/>;
});

const RealTd = memo(({onClickTd, onRightClickTd, data}) => {
    return (
        <td
            style={getTdStyle(data)}
            onClick={onClickTd}
            onContextMenu={onRightClickTd}//오른쪽 마우스 클릭
        >{getTdText(data)}</td>
    )
});

export default Td;