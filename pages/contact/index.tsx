import Link from 'next/link';
import MainLayout from '@/components/layouts/MainLayout';

export default function ContactPage() {
	return (
		<MainLayout>
			<h1 className={'title'}>Contact Page</h1>

			<div className={'description'}>
				<div>
					<Link href='/'>Go to Home</Link>
				</div>
			</div>
		</MainLayout>
	);
}
