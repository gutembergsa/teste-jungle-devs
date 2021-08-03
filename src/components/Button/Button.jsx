/*Base*/
import React from 'react'
import PropTypes from 'prop-types'

/*Styles*/
import styles from './Button.module.scss'

const Button = ({ children, ...rest }) => {
	const { classes } = rest
	return (
		<button className={`${styles.button} ${{ ...classes }}`} {...rest}>
			{children}
		</button>
	)
}

Button.propTypes = {
	children: PropTypes.node,
}

export default Button
