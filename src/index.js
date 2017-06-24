import { createStore } from 'redux';
import videosReducer from './reducers/videos';
import { addVideo } from './actions/actions';

let store = createStore(videosReducer);

// Mostramos el estado inicial
console.log(store.getState());

// Cada vez que el estado cambie, lo mostramos
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// Enviamos algunas acciones
store.dispatch(addVideo(
    {
        "videoId": "eQbULctSG-U",
        "title": "Accedo 24/7 - Inglés",
        "description": "Aplique a la oferta de trabajo de Accedo 24/7 y viva la mejor experiencia trabajando en un ambiente de colaboración y crecimiento profesional." 
    }
));

store.dispatch(addVideo(
    {
        "videoId": "c5xTPPFe1a0",
        "title": "Accedo Tech Event -  Dynamic UI",
        "description": "Alex Kubarev at the Accedo Tech Event in Stockholm, on how we change the UI for +10M devices. Music by Springtide - CC license."
    }
));

// Anulamos el monitoreo de las actualizaciones al estado
unsubscribe();
