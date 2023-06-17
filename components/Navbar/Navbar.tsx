import { ActiveLink } from '../ActiveLink.tsx/ActiveLink';
import { menuItems } from '@/constants/constants';

import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
	return (
		<nav className={styles['menu-container']}>
			{menuItems.map(({ href, text }) => (
				<ActiveLink key={href} href={href} text={text} />
			))}
		</nav>
	);
};
