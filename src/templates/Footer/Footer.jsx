/*Base*/
import React from 'react'

/*Components*/
import { Button } from '../../components'

/*Styles*/
import styles from './Footer.module.scss'

/*Assets*/
import { ReactComponent as CalendarIcon } from '../../assets/icons/iconCalendar.svg'
import { ReactComponent as FacebookIcon } from '../../assets/icons/iconFacebook.svg'
import { ReactComponent as InstaIcon } from '../../assets/icons/iconInstagram.svg'
import { ReactComponent as TwitterIcon } from '../../assets/icons/iconTwitter.svg'
import logo from '../../assets/images/logo.svg'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				<p className={styles.title}>Become a nanny share host</p>
				<p className={styles.subTitle}>Takes less than 5 minutes to get started</p>
				<Button className={styles.footerButton}>
					<span>
						<CalendarIcon />
						<div className="">
							<span>Create Your Nanny Share</span>
							<span>Takes less than 5 minutes</span>
						</div>
					</span>
				</Button>
				<p className={styles.linkContainer}>
					<a className={styles.link} href="#">
						Or browse local nanny-shares{' '}
					</a>
				</p>
				<div className={styles.footerNav}>
					<div className={styles.logoBlock}>
						<img src={logo} alt="Footer Hapu logo" />
					</div>
					<div className={styles.interNavBlock}>
						<nav className={styles.footerNav}>
							<ul className={styles.footerNavList}>
								<li>
									<a className={styles.firstLinkGroup} href="#">
										Share Your Nanny
									</a>
									<a href="#">Our Story</a>
								</li>
								<li>
									<a className={styles.firstLinkGroup} href="#">
										Blog
									</a>
									<a href="#">Terms &amp; Privacy</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className={styles.externalNavBlock}>
						<nav className={styles.footerNav}>
							<ul className={styles.footerNavList}>
								<li>
									<a href="#">
										<Button className={styles.externalLinkButton}>
											<FacebookIcon />
										</Button>
									</a>
								</li>
								<li>
									<a href="#">
										<Button className={styles.externalLinkButton}>
											<TwitterIcon />
										</Button>
									</a>
								</li>
								<li>
									<a href="#">
										<Button className={styles.externalLinkButton}>
											<InstaIcon />
										</Button>
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<p className={styles.rightsText}>
					Copyright © 2017 Hapu PTY Limited All rights reserved
				</p>
			</div>
		</footer>
	)
}

export default React.memo(Footer)
