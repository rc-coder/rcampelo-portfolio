import StyledComponentsRegistry from '@/registry';
import './globals.css';
import { Inter, Quicksand, Raleway } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const quicksand = Quicksand({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: 'RCampelo',
  description: 'Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
