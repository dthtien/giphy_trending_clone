import * as sagas from './sagaList';

export default sagaMiddleware => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}
