import ReactDOM from 'react-dom/client';
import ErrorBoundary from './components/errorBoundary';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
