/*Base*/
import React from 'react'

/*Components*/
import { ProfilePicuture } from '../../components'

/*Style*/
import styles from './AvailableNannyViewer.module.scss'

/*Assets*/
import image from '../../assets/images/profileImage.png'

const AvailableNannyViewer = () => {
	return (
		<section className={styles.viewerSection}>
			<ProfilePicuture image={image} style={{ marginRight: 32 }} />
			<a href="#">Sarah’s day care available now in North Sydney</a>
			<p>Wednesday, Thursday, Friday - 7:30 - 5:30</p>
		</section>
	)
}

export default AvailableNannyViewer
