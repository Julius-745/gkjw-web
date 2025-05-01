import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData = <T,>(section: string, defaultValue: T) => {
  const baseURL = import.meta.env.VITE_REACT_ENDPOINT;
  const [data, setData] = useState<T>(defaultValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(baseURL + section);

        if (response.data) {
          setData(response.data);
        } else {
          setData(response);
        }

        setLoading(false);
      } catch (err: any) {
        setError(err?.message || 'Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, [baseURL, section]);

  return { data, loading, error };
};

export default useFetchData;
