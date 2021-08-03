/*Base*/
import React from 'react'
import PropTypes from 'prop-types'

/*Styles*/
import styles from './SpinnerLoader.module.scss'

const SpinnerLoader = () => {
	return (
		<div className={styles.spinner}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default SpinnerLoader
