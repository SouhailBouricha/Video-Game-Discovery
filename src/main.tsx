import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App'
import theme from './components/theme'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const clientQuery = new QueryClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <QueryClientProvider client={clientQuery}>
        <ReactQueryDevtools />
        <App />  
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
