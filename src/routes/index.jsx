import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import {Homepage} from './imports'

const router = createBrowserRouter([
    {
        element:<App/>,
        children:[
            {
                element:<Homepage/>,
                path:''
            }
        ]
    }
])

export { router }