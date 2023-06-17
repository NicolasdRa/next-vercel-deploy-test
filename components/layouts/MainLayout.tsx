import Head from 'next/head';

import { Navbar } from '@/components/Navbar/Navbar';

import styles from './MainLayout.module.css';

interface MainLayoutProps {
	children?: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home Page</title>
				<meta name='description' content='Home Page' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />

			<main className={styles.main}>{children}</main>
		</div>
	);
}
