import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({
    variable: "--font-inter",
    subsets: ['latin']
})

export const metadata = {
    title: 'entrova',
    description: 'Simplifying global workforce management',
    applicationName: "entrova",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable}`}>
            <body suppressHydrationWarning={true}>{children}</body>
        </html>
    )
}
