import { useNavigate } from 'react-router';
import { Container, HouseContainer } from '../styles/Houses';
import { useFetchData } from '../utils/useFetchData';

export const Houses = () => {
  const { data, isLoading }: { data: any | undefined; isLoading: boolean } = useFetchData({
    url: `${process.env.REACT_APP_URL}/houses/all`,
  });

  const navigate = useNavigate();

  const NavigateToDetails = (id: string) => {
    navigate(`/houses/${id}`);
  };

  const NavigateToAddHouse = () => {
    navigate('/houses/add');
  };

  return (
    <>
      {isLoading || !data ? (
        <div className='flex items-center justify-center'>
          <div className='spinner-border inline-block h-8 w-8 animate-spin rounded-full border-4' role='status'></div>
        </div>
      ) : data.error ? (
        <h1 className='text-red-700'>Error</h1>
      ) : (
        <Container>
          <h1 className='mt-6 text-center'>Lista domków</h1>
          <button className='mx-4 mt-3 cursor-pointer rounded-lg bg-blue-300 px-5 py-3' onClick={NavigateToAddHouse}>
            Dodaj nowy domek
          </button>
          {data.results.map((house: any) => (
            <HouseContainer key={house._id}>
              <p>address: {house.address ? house.address : ' - '}</p>
              <p>floorsNumber: {house.floorsNumber ? house.floorsNumber : ' - '}</p>
              <p>description: {house.description ? house.description : ' - '}</p>
              <button className='mt-3 cursor-pointer rounded-lg bg-white px-5 py-3' onClick={NavigateToDetails.bind(null, house._id)}>
                Szczegóły domku
              </button>
            </HouseContainer>
          ))}
        </Container>
      )}
    </>
  );
};
