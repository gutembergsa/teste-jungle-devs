/*Base*/
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm, FormProvider } from 'react-hook-form'

/*Redux*/
import { useSelector, useDispatch } from 'react-redux'
import { combinedActions as homepageActions } from '../../store/ducks/homepage'

/*Components*/
import { NewsLetterInput, Button, SpinnerLoader } from '../../components'

/*Style*/
import styles from './NewsLetterForm.module.scss'

const NewsLetterForm = () => {
	const { subscribeNewsletter } = homepageActions

	const { formIsLoading } = useSelector((state) => state.homepage)
	const { handleSubmit, control, watch } = useForm()
	const dispatch = useDispatch()

	const watchNameInput = watch('name')

	function onSubmit(data) {
		dispatch(subscribeNewsletter(data))
	}

	return (
		<FormProvider {...useForm()}>
			<form
				data-testid="form"
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
				<div className={styles.inputContainer}>
					<NewsLetterInput
						testid="name"
						name="name"
						control={control}
						autoComplete="off"
						disabled={formIsLoading}
						rules={{
							required: { value: true, message: 'Name is required' },
							minLenght: { value: 3, message: 'At least 3 letters' },
						}}
					/>
					{watchNameInput ? null : (
						<span className={styles.customPlaceholder}>
							Your
							<br />
							name
						</span>
					)}
				</div>
				<NewsLetterInput
					testid="email"
					name="email"
					type="email"
					autoComplete="off"
					placeholder="Your Email"
					control={control}
					disabled={formIsLoading}
					rules={{
						required: { value: true, message: 'Email is required' },
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: 'Enter a valid email',
						},
					}}
				/>
				<Button data-testid="button" type="submit">
					{formIsLoading ? <SpinnerLoader /> : 'Send'}
				</Button>
			</form>
		</FormProvider>
	)
}

NewsLetterForm.propTypes = {}

export default NewsLetterForm
