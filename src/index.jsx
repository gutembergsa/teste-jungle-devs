/*Base*/
import React from 'react'
import ReactDOM from 'react-dom'

/*Redux*/
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/store'

/*Root component*/
import App from './app/App'

ReactDOM.render(
	<React.StrictMode>
		<ReduxProvider store={store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById('root'),
)
