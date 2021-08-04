/*Base*/
import React from 'react'
import { OptimizelyFeature } from '@optimizely/react-sdk'

/*Components*/
import { Button, AvailableNannyViewer } from '../../components'

/*Style*/
import styles from './Hero.module.scss'

/*Assets*/
import image from '../../assets/images/heroAppSampleImage.png'
import { ReactComponent as PlayIcon } from '../../assets/icons/iconPlay.svg'

const Hero = () => {
	return (
		<>
			<div className={styles.hero}>
				<div className={styles.heroFlexContainer}>
					<div className={`${styles.heroBlock} ${styles.left}`}>
						<OptimizelyFeature feature="hapu_announce">
							{(enabled, variables) => {
								return enabled ? (
									<p className={styles.title}>{variables?.title}</p>
								) : (
									<p className={styles.title}>
										Easily create or join a local nanny share with Hapu
									</p>
								)
							}}
						</OptimizelyFeature>
						<OptimizelyFeature feature="hapu_announce">
							{(enabled, variables) => {
								return enabled ? (
									<p className={styles.subTitle}>{variables?.subtitle}</p>
								) : (
									<p className={styles.subTitle}>
										Easily create or join a local nanny share with Hapu
									</p>
								)
							}}
						</OptimizelyFeature>
						<p className={styles.play}>
							<Button aria-label="Play video" className={styles.heroButton}>
								{' '}
								<PlayIcon />{' '}
							</Button>
							<a className={styles.link} href="#">
								See hapu in action (27 seconds)
							</a>
						</p>
					</div>
					<div className={`${styles.heroBlock} ${styles.right}`}>
						<img
							className={styles.image}
							width={316}
							height={290}
							src={image}
							alt="App Sample Image"
						/>
					</div>
				</div>
			</div>
			<AvailableNannyViewer />
		</>
	)
}

export default React.memo(Hero)
