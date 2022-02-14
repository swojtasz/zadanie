import axios from 'axios';
import { useEffect, useState } from 'react';

interface Props {
  url: string;
}
export const useFetchData = ({ url }: Props) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      const response = await axios.get(`${url}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, isLoading };
};
