/*Base*/
import React from 'react'

/*Test utils*/
import { render, screen, waitFor, act } from '@testing-library/react'
import user from '@testing-library/user-event'

/*Implementation utils*/
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import NewsLetterForm from './NewsLetterForm'
import { combinedActions } from '../../store/ducks/homepage'

const mockStore = configureMockStore([])

const homepage = {
	fake: false,
}

let store, subscribeNewsletter

describe('NewsLetterForm Component', () => {
	beforeEach(() => {
		store = mockStore({
			homepage: homepage,
		})
		jest.spyOn(store, 'dispatch').mockImplementation()
		subscribeNewsletter = jest
			.spyOn(combinedActions, 'subscribeNewsletter')
			.mockImplementation()
	})
	test('Check if the process to POST a newsletter is working', async () => {
		render(
			<Provider store={store}>
				<NewsLetterForm />
			</Provider>,
		)
		const inputName = screen.getByTestId('name')
		const inputEmail = screen.getByTestId('email')
		const button = screen.getByTestId('button')

		await waitFor(() => {
			user.type(inputName, 'gutemberg')
			user.type(inputEmail, 'gutemberg@test.com')
			user.click(button)
		})

		expect(store.dispatch).toHaveBeenCalledTimes(1)
		expect(subscribeNewsletter).toHaveBeenCalledTimes(1)
	})
})
