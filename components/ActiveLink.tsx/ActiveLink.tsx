import { CSSProperties } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps {
	href: string;
	text: string;
}

const style: CSSProperties = {
	color: '#0070f3',
	fontWeight: 'bold',
	textDecoration: 'underline',
};

export const ActiveLink: React.FC<ActiveLinkProps> = ({ href, text }) => {
	const { asPath } = useRouter();
	const isActive = asPath === href;

	return (
		<Link href={href} legacyBehavior>
			<a style={isActive ? style : {}}>{text}</a>
		</Link>
	);
};
