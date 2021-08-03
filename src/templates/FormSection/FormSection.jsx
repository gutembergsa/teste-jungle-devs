/*Base*/
import React from 'react'

/*Components*/
import { NewsLetterForm } from '../../components'

/*Styles*/
import styles from './FormSection.module.scss'

/*Assets*/
import image1 from '../../assets/images/imageSection1.png'
import image2 from '../../assets/images/imageSection2.png'
import image3 from '../../assets/images/imageSection3.png'
import image4 from '../../assets/images/imageSection4.png'

const FormSection = () => {
	return (
		<div className={styles.containerBg}>
			<div className={styles.container}>
				<div className={styles.firstSection}>
					<div className={styles.left}>
						<p className={styles.title}>
							Share your home, <br /> nanny and costs
						</p>
						<p className={styles.content}>
							You have a fantastic home, a fantastic nanny and wouldn’t cutting your
							costs in half be, well, fantastic?! If only it was easy to connect with
							other parents to share your costs? Well now it is, with Hapu.{' '}
							<a className={styles.link}>Hapu means tribe</a> and it’s our
							foundational 3 tribal principles that empowers you to create and manage
							your own tribe. A tribe that together has the power to create new
							affordable solutions in childcare that work for you and your community.
						</p>
						<p>
							<a className={styles.link} href="#">
								Ready to get started?
							</a>
						</p>
					</div>
					<div className={styles.right}>
						<img src={image1} alt="Section 1 image" />
					</div>
				</div>
				<div className={styles.formSection}>
					<p className={styles.title}>
						Are you a parent without a nanny and looking to share?
					</p>
					<p>
						Leave us your name and email and we’ll update you as soon as a share becomes
						available in your area!
					</p>
					<NewsLetterForm />
				</div>
				<div className={styles.secondSection}>
					<div className={styles.left}>
						<p className={styles.title}>Shared payments made simple</p>
						<p className={styles.content}>
							Sometimes it’s hard enough just sharing a restaurant bill. Try sharing
							that bill week in, week out and you might encounter more than a few
							snares. But not with Hapu. Simply set your rates and our automated
							payment system takes care of the rest. You need never talk money or who
							owes what.
						</p>
						<p>
							<a className={styles.link} href="#">
								Read how Bridget’s share (without Hapu) ended over $15{' '}
							</a>
						</p>
					</div>
					<div className={styles.right}>
						<img src={image2} alt="Section 2 image" />
					</div>
				</div>
				<div className={styles.thirdSection}>
					<p className={styles.title}>A framework built for the long term</p>
					<p className={styles.content}>
						Childcare is for the long term. And you need a framework you can count on
						that gives your share long term viability and success. That’s why we’ve
						defined Hapu around our three tribal principles; clearly defined process,
						transparency over money and equality of participation.
					</p>
					<p>
						<a className={styles.link} href="#">
							Read how Hapu’s tribal background defines our app
						</a>
					</p>
					<div className={styles.image}>
						<img src={image3} alt="Section 3 image" />
					</div>
				</div>
				<div className={styles.fourthSection}>
					<div className={styles.image}>
						<img src={image4} alt="Section 4 image" />
					</div>
					<p className={styles.title}>Coming soon: Nanny Share Daily Diary!</p>
					<p className={styles.content}>
						With the Hapu daily diary your nanny will be able to update you and your
						sharers with photos and commentary of the day. You and sharers will receive
						notifications and you’ll be able to login to view the daily adventures fo
						your little ones. We can’t wait!
					</p>
				</div>
			</div>
		</div>
	)
}

export default React.memo(FormSection)
