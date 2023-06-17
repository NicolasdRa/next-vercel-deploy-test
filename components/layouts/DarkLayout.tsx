import { ReactNode } from 'react';

interface DarkLayoutProps {
	children?: ReactNode;
}

export const DarkLayout: React.FC<DarkLayoutProps> = ({ children }) => {
	return (
		<div
			style={{
				backgroundColor: 'rgba(0, 0, 0, 0.3)',
				borderRadius: '5px',
				padding: '10px',
			}}>
			<div>{children}</div>
		</div>
	);
};
