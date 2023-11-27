import './globals.scss'
import Script from "next/script";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PERENNIALS | Conecta. Comparte. Prospera',
  description: 'Welcome to PERENNIALS',
}

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="es">
      <body>
        <div className="flex flex-col h-full">
          <Header/>
            <div className='flex-grow bg-gray-50'>
              {children}
            </div>
          <Footer/>
        </div>
        <Script type="text/javascript" id="zsiqchat" src='./js/ZohoSalesIQ.js' />
      </body>


    </html>
  )
}
