import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from './lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Analysis from './pages/Analysis';
import Results from './pages/Results';
import Sources from './pages/Sources';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/tagebuch" element={<Diary />} />
            <Route path="/analyse" element={<Analysis />} />
            <Route path="/ergebnisse" element={<Results />} />
            <Route path="/quellen" element={<Sources />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App