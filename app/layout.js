// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Fays Digital Solution",
//   description: "Your next digital solution",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

'use client';
import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from './context/authContext';
import NavBar from '../components/Navbar';
import { Container } from '../components/styled_container';
import FootNav from '../components/footer';

export default function Layout({ children }) {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Fay's Digital Solution</title>
      </head>
      <body>
        <ChakraProvider>
          <AuthContextProvider>
            <Container>
              <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
              {children}
              <FootNav />
            </Container>
          </AuthContextProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
