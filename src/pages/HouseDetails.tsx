import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import { useFetchData } from '../utils/useFetchData';

const HouseContainer = styled.div`
  display: flex;
  flex: 2 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  background-color: lightblue;
  border-radius: 10px;
  margin: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// wykomentowany kod, ponieważ problem z CORSami
export const HouseDetails = () => {
  const params = useParams();

  const { data, isLoading }: { data: any | undefined; isLoading: boolean } = useFetchData({
    url: `${process.env.REACT_APP_URL}/houses/${params.houseId}`,
  });

  const navigate = useNavigate();

  const deleteHouse = () => {
    const deleteFunction = async () => {
      const response = await axios.delete(`${process.env.REACT_APP_URL}/houses/${params.houseId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // handle error/response
      console.log(response);

      navigate('/houses');
    };
    deleteFunction();
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
          <h1 className='mt-6 text-center'>Szczegóły domku</h1>
          <HouseContainer key={data.result._id}>
            <p>id: {data.result._id ? data.result._id : ' - '}</p>
            <p>address: {data.result.address ? data.result.address : ' - '}</p>
            <p>floorsNumber: {data.result.floorsNumber ? data.result.floorsNumber : ' - '}</p>
            <p>description: {data.result.description ? data.result.description : ' - '}</p>
            <p>label: {data.result.label ? data.result.label : ' - '}</p>
            <p>createdAt: {data.result.createdAt ? data.result.createdAt : ' - '}</p>
            <p>updatedAt: {data.result.updatedAt ? data.result.updatedAt : ' - '}</p>
            <button className='mt-3 cursor-pointer rounded-lg bg-red-500 px-5 py-3' onClick={deleteHouse}>
              Usuń domek
            </button>
          </HouseContainer>
        </Container>
      )}
    </>
  );
};
