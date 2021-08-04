/*Base*/
import React, { useEffect, useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useFormContext, useController, Controller } from 'react-hook-form'

/*Styles*/
import styles from './NewsLetterInput.module.scss'

const NewsLetterInput = ({ ...rest }) => {
	const {
		name,
		type,
		testid,
		disabled,
		defaultValue,
		control,
		autoComplete,
		placeholder,
		rules,
		useCustomPlaceholder,
	} = rest

	const { field, fieldState } = useController({
		name,
		control,
		rules,
		defaultValue: defaultValue,
	})
	const { onChange, value } = field
	const { invalid, error } = fieldState

	return (
		<label className={styles.input}>
			<input
				data-testid={testid}
				name={name}
				type={type}
				disabled={disabled}
				autoComplete={autoComplete}
				placeholder={placeholder}
				className={styles.userArea}
				onChange={onChange}
			/>
			{!value?.length && useCustomPlaceholder ? useCustomPlaceholder : null}
			{invalid && error?.message && (
				<span className={styles.error}>{error?.message}</span>
			)}{' '}
		</label>
	)
}

NewsLetterInput.propTypes = {
	name: PropTypes.string.isRequired,
	fieldConfig: PropTypes.object,
}

export default NewsLetterInput
