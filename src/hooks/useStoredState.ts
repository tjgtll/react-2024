import { useEffect, useState } from 'react';

export const useStoredState = () => {
  const storedSearchTerm = localStorage.getItem('searchTerm');
  const [searchTerm, setSearchTerm] = useState(storedSearchTerm || '');

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
  }, [searchTerm]);

  return { searchTerm, setSearchTerm };
};
