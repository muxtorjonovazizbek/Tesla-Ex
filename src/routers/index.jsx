import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  
  import App from "../App";
  import { Home, HeroPages, ModelS, Model3, ModelX, ModelY} from "@pages";

const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<App />}>
            <Route index element={<Home/>} />
            <Route path="/hero" element={<HeroPages/>} />
            <Route path="/model-s" element={<ModelS/>} />
            <Route path="/model-3" element={<Model3/>} />
            <Route path="/model-x" element={<ModelX/>} />
            <Route path="/model-y" element={<ModelY/>} />
            
          </Route>
        )
      );    
  return   <RouterProvider router={router} />
    
}

export default Index