import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import VideoWatch from './components/VideoWatch';
import SearchResult from './components/SearchResult';

const routerConfig=createBrowserRouter([{
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<Main/>
        },{
          path:"/watch",
          element:<VideoWatch/>
        },{
          path:"/results",
          element:<SearchResult/>
        }
      ]
}])
function App() {
  return (
    <Provider store={store}>
      <>
      <Header/>
      <RouterProvider router={routerConfig} />
      </>
    </Provider>
  
  
  );
}

export default App;
