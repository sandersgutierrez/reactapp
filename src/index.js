import React from 'react'
import ReactDOM from 'react-dom'
import { CounterApp } from './CounterApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <CounterApp />
    </BrowserRouter>,
    document.getElementById('root'),
)
