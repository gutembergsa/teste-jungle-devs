/*Base*/
import React, { useLayoutEffect, useEffect } from 'react'
import styles from './App.module.scss'

/*Redux*/
import { useSelector, useDispatch } from 'react-redux'
import { combinedActions as homepageActions } from '../store/ducks/homepage'

/*Optmizely*/
import { OptimizelyProvider } from '@optimizely/react-sdk'
import { OptimizelyService } from '../services'

/*Styles*/
import '../styles/styles.scss'
import 'react-toastify/dist/ReactToastify.css'

/*Componets*/
import { ToastContainer as Toast } from 'react-toastify'
import { Header, Hero, FormSection, Footer } from '../templates'

function App() {
	const { user } = useSelector((state) => state.homepage)
	const { defineUser, formLoading } = homepageActions

	const dispatch = useDispatch()

	useLayoutEffect(() => {
		dispatch(defineUser())
		dispatch(formLoading(false))
	}, [])

	return (
		<OptimizelyProvider optimizely={OptimizelyService} user={{ id: user }}>
			<main className={styles.main}>
				<Toast />
				<Header />
				<Hero />
				<FormSection />
				<Footer />
			</main>
		</OptimizelyProvider>
	)
}

export default App
