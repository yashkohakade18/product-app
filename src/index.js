
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './views/Home/home';

import Productview from './views/ProductView/productview';

import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
      path:'/',
      element:<Home/>
  },
  {

      path:'/Product/:id',
      element:<Productview/>
  }
])
root.render(<RouterProvider router={router}/>);
