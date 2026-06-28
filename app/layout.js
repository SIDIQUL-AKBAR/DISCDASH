import './globals.css'; // Standard Tailwind import directives

export const metadata = {
  title: 'Kuttappan Bot — Cloud Panel',
  description: 'Control matrix system v2',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body class="bg-[#030712] text-slate-200 antialiased min-h-screen selection:bg-indigo-500/30">
        {children}
      </body>
    </html>
  );
}
