/*Base*/
import React from 'react'

/*Componets*/
import { Button } from '../../components'

/*Styles*/
import styles from './Header.module.scss'

/*Assets*/
import { ReactComponent as HapuSmile } from '../../assets/icons/iconSmile.svg'

const Header = () => {
	return (
		<header>
			<Button className={styles.headerSmileButton}>
				<HapuSmile />
			</Button>
			<nav className={styles.navbar}>
				<ul className={styles.navbarList}>
					<li>
						<a className={styles.link} href="#">
							Create Your Nanny Share
						</a>
					</li>
					<li>
						<a className={styles.link} href="#">
							Browse Shares
						</a>
					</li>
					<li>
						<a className={styles.link} href="#">
							Our Story
						</a>
					</li>
				</ul>
				<ul className={`${styles.navbarList} ${styles.navbarControl}`}>
					<li>
						<a className={styles.link} href="#">
							<Button>Become a Nanny Share Host</Button>
						</a>
					</li>
					<li>
						<a className={styles.link} href="#">
							Sign In
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default React.memo(Header)
