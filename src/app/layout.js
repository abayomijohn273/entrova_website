import '@/styles/globals.css'
import { Albert_Sans } from 'next/font/google'

const inter = Albert_Sans({
    variable: "--font-inter",
    subsets: ['latin']
})

export const metadata = {
    title: 'Entrova | Software Development Company & AI Studio',
    description: 'Entrova is a software development company and AI studio. We design, build, and ship custom software and AI products for startups and enterprises.',
    applicationName: "Entrova",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable}`}>
            <body suppressHydrationWarning={true}>{children}</body>
        </html>
    )
}
