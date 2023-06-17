import MainLayout from '@/components/layouts/MainLayout';
import Link from 'next/link';

export default function PricingPage() {
	return (
		<MainLayout>
			<h1 className={'title'}>Pricing Page</h1>

			<div className={'description'}>
				<div>
					<Link href='/'>Go to Home</Link>
				</div>
			</div>
		</MainLayout>
	);
}
