import React from 'react';
import { asyncConstants } from '../_helpers/constants';

function asyncReducer(state, action){
    switch(action.type){
        case asyncConstants.PENDING:{
            return {...state, status: asyncConstants.PENDING}
        }
        case asyncConstants.RESOLVED: {
            return {...state, status: asyncConstants.RESOLVED, data: action.data}
        }
        case asyncConstants.REJECTED: {
            return {...state, status: asyncConstants.REJECTED, error: action.error}
        }
        default: {
            throw new Error(`UNHANDLED ERROR MESSAGE`);
        }
    }
}

function useAsync(initialState){
    const [state, dispatch] = React.useReducer(asyncReducer, {
        status: asyncConstants.IDLE,
        data: null,
        error: null, 
        ...initialState,
    })

    const run = React.useCallback(promise => {
        dispatch({type: asyncConstants.PENDING});
        promise.then(
            data => {
                dispatch({type: asyncConstants.RESOLVED, data})
            },
            error => {
                dispatch({type: asyncConstants.REJECTED, error})
            }
        )
    }, [])

    return {...state, run}

}

export default useAsync;