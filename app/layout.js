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
import { Container } from '../components/Styled_Components/styled_container';
import StyledComponentsRegistry from '../components/registry';
import NavBar from '@/components/Header/Navbar';
import FootNav from '@/components/Footer/footer';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Fay's Digital Solution</title>
      </head>
      <body>
        <ChakraProvider>
          <AuthContextProvider>
            <StyledComponentsRegistry>
              <Container>
                <NavBar/>
                {children}
                <FootNav />
              </Container>
            </StyledComponentsRegistry>
          </AuthContextProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
