import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProfilePicuture.module.scss'

const ProfilePicuture = ({ image, ...rest }) => {
	const jsx = image ? (
		<img
			className={styles.image}
			width={56}
			height={56}
			src={image}
			alt="Imagem de perfil"
			{...rest}
		/>
	) : (
		<span className={styles.imageFallback} />
	)
	return jsx
}

ProfilePicuture.propTypes = {
	image: PropTypes.any.isRequired,
}

export default ProfilePicuture
