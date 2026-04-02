import { Provider } from "react-redux";
import store from "./services/store.js";
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
  </Provider>
)
