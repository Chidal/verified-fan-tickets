import './globals.css'; // Ensure this is imported

// import { WagmiConfig } from 'wagmi'; // Commented out
// import { config } from '@/lib/wagmi'; // Commented out

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <WagmiConfig config={config}> */} {/* Commented out */}
          {children}
        {/* </WagmiConfig> */} {/* Commented out */}
      </body>
    </html>
  );
}