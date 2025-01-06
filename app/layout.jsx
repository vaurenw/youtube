import './globals.css';
    import { Inter } from 'next/font/google';

    const inter = Inter({ subsets: ['latin'] });

    export const metadata = {
      title: 'SaaS URL Processor',
      description: 'Process URLs with ease',
    };

    export default function RootLayout({ children }) {
      return (
        <html lang="en">
          <body className={inter.className}>
            <div className="min-h-screen bg-background">
              <main className="container py-8">
                {children}
              </main>
            </div>
          </body>
        </html>
      );
    }
