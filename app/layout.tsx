import './globals.css'

export const metadata = {
  title: 'My messenger',
  description: 'My messenger',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
