import { BrowserRouter, Route } from 'react-router-dom'

import {AuthContextProvider} from './contexts/AuthContext'

import { Home } from './pages/Home'

import { NewRoom } from './pages/NewRoom';
import './styles/global.scss'

export function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}
