import React from 'react'
import { 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import News from '@/components/NewsHomePage';

import { NewsProvider } from './context';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NewsProvider>
        <News />
      </NewsProvider>
    </QueryClientProvider>
  )
}

export default App
