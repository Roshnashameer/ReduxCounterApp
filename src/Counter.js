import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './reduxTool/counterSlice'


function Counter() {
    const data = useSelector((state) => state.counterReducer.value)
    const dispatch = useDispatch()
    return (
        <div><h1 className='text-center'>Counter App</h1>
            <div className='text-center w-50 container bg-dark p-5 mt-5 shadow'>
                <h1 className='text-white'>{data}</h1>
                <div className='mt-3'>
                    <Button onClick={() => dispatch(increment())} className='btn btn-success'>Increment</Button>
                    <Button onClick={() => dispatch(decrement())} className='btn btn-danger ms-3'>Decrement</Button>
                    <Button onClick={() => dispatch(reset())} className='btn btn-warning ms-3'>Reset</Button>

                </div>
            </div>
        </div>
    )
}

export default Counter