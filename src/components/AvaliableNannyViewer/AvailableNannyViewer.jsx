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
		<aside className={styles.viewerAside}>
			<ProfilePicuture image={image} style={{ marginRight: 32 }} />
			<a href="#">Sarah’s day care available now in North Sydney</a>
			<p>Wednesday, Thursday, Friday - 7:30 - 5:30</p>
		</aside>
	)
}

export default AvailableNannyViewer
