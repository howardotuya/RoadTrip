import './globals.css'

export const metadata = {
  title: 'Homepage - RoadTrip Community',
  description: 'Created by Howard Otuya',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
