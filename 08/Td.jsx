import React, {useCallback, useEffect,useRef, memo} from 'react';
import {CLICK_CELL } from './TicTacToe';

const Td = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
    // render 너무 많이 될 때 검사하는 방법
    const ref = useRef([]);
    useEffect(() => {
        console.log(rowIndex === ref.current[0], cellIndex === ref.current[1],
             dispatch === ref.current[2],cellData === ref.current[3]);
    }, [rowIndex, cellIndex, dispatch, cellData]);

    const onClickTd = useCallback(() => {
        if (cellData) {
            return;
        }
        dispatch({type:CLICK_CELL,row:rowIndex, cell:cellIndex});
    },[cellData]);
    return (
        <td onClick={onClickTd}>{cellData}</td>
    )
})

export default Td;