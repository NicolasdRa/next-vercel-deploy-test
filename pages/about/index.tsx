import { ReactElement } from 'react';
import Link from 'next/link';
import { DarkLayout } from '@/components/layouts/DarkLayout';
import MainLayout from '@/components/layouts/MainLayout';

export default function AboutPage() {
	return (
		<>
			<h1 className={'title'}>About Page</h1>
			<div className={'description'}>
				<div>
					<Link href='/'>Go to Home</Link>
				</div>
			</div>
		</>
	);
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<MainLayout>
			<DarkLayout>{page}</DarkLayout>
		</MainLayout>
	);
};
