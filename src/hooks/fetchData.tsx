import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = <T,> (section:string) => {
  const baseURL = import.meta.env.VITE_BASE_URL
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(baseURL+section);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error)
      }
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetchData;