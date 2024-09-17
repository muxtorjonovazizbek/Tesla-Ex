import { createRoot } from 'react-dom/client'
import Root from "./routers"
// import "bootstrap/dist/css/bootstrap.min.css"
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';



createRoot(document.getElementById('root')).render(
  <Root/> 
)
