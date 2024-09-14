import React from 'react';
import { Linkedin, GitHub } from 'react-feather';
import styles from './Footer.module.css';

function Footer() {
	return (
		<footer className={styles.wrapper}>
			<p className={styles.link_container}>
				<Linkedin size={16} />
				<a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/leandro-serra92'>
					My LinkedIn{' '}
				</a>
			</p>
			<p className={styles.link_container}>
				<GitHub size={16} />
				<a target='_blank' rel='noopener noreferrer' href='https://www.github.com/12coqui'>
					My Github{' '}
				</a>
			</p>
		</footer>
	);
}

export default Footer;
