import '@/styles/globals.css'
import { Albert_Sans } from 'next/font/google'

const inter = Albert_Sans({
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
