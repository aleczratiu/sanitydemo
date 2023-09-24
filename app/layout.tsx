import './globals.css';
import ReactQueryProvider from '@/app/src/components/shared/ReactQueryProvider';
// import { Layout } from '@src/components/templates/Layout';

// TODO: Add the Layout component here and wrap the children with it to render the header and footer
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ReactQueryProvider>{children}</ReactQueryProvider>
            </body>
        </html>
    );
}
