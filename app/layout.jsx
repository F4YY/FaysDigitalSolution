'use client';
import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from './context/authContext';
import NavBar from '../components/Navbar';
import { Container } from '../components/styled_container';

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
            </Container>
          </AuthContextProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
