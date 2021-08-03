/*Base*/
import React from 'react'

/*Test utils*/
import { render, waitFor } from '@testing-library/react'

/*Implementation utils*/
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import App from './App'

const mockStore = configureMockStore([])

const homepage = {
	fake: false,
}

let store

describe('NewsLetterForm Component', () => {
	beforeEach(() => {
		store = mockStore({
			homepage: homepage,
		})
	})
	test('Check if app renders correctly with base props and connected redux store', async () => {
		const { container } = await waitFor(() =>
			render(
				<Provider store={store}>
					<App />
				</Provider>,
			),
		)
		expect(container).toBeTruthy()
	})
})
