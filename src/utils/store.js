import { combineReducers, createStore } from 'redux'
import themeReducer from '../features/theme'

// on utilise combineReducer pour faire
// fonctionner plusieurs reducers ensemble
const reducer = combineReducers({
  // le themeReducer est responsable de la propriété `theme` du state
  theme: themeReducer,
})

// Pour connecter les Redux Devtools on utilise
// un fonction disponible sur l'objet window
// Si cette fonction existe on l'exécute.
const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// on utilise le reducer créer avec combineReducers
// pour initialiser le store
// Pas besoin de passer de state initial
// car chaque reducer à son propre state initial
const store = createStore(reducer, reduxDevtools)

export default store
