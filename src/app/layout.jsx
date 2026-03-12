
import './globals.css'
import { localfont } from 'next/font/local'
import { Roboto } from 'next/font/google'
const local = localfont({
    src: "../font/Quicksand-VariableFont_wght.ttf",
    weight: '400',
    textbase: 'latin'
})
const roboto=Roboto({
    weight:'700',
    subsets: ['latin'],
})
export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`${local.className} ${roboto.className}`}>
                {children}
            </body>
        </html>
    )
}


