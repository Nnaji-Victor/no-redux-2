import {render as rtlRender} from "@testing-library/react"
import {Router} from 'react-router-dom'
import { history } from "./history"

function render(ui, {...options} = {}){
    const Wrapper = ({children}) => (
        <Router history={history}>
            {children}
        </Router>
    )

    return rtlRender(ui, {wrapper: Wrapper, ...options})
}

export * from '@testing-library/react'
export {render};