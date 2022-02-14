import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../styles/Houses';
import { RootState } from '../store/index';
import { addedHouseActions } from '../store/added-house-slice';
import { useDispatch, useSelector } from 'react-redux';

const StyledInput = styled.input`
  border: 2px rgba(147, 197, 253) solid;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  outline: none;
  width: 100%;
`;
const StyledLabel = styled.label`
  margin: 1rem;
  p {
    font-weight: 500;
  }
`;

export const AddHouse = () => {
  const dispatch = useDispatch();
  const isSubmitted = useSelector((state: RootState) => state.addHouse.added);

  const [address, setAddress] = useState<string>('');
  const [floorsNumber, setFloorsNumber] = useState<number>();
  const [description, setDescription] = useState<string>('');
  const [label, setLabel] = useState<string>('');

  const SubmitForm = (event: any) => {
    event?.preventDefault();

    const postFunction = async () => {
      const response = await axios.post(`${process.env.REACT_APP_URL}/houses`, {
        address: address,
        floorsNumber: floorsNumber,
        description: description,
        label: label,
      });
      if (response.status === 201) dispatch(addedHouseActions.setAdded(true));
    };

    postFunction();
  };

  return (
    <Container>
      <h1 className='mt-6 text-center text-xl'>Dodaj nowy domek</h1>
      <form onSubmit={SubmitForm} className='mx-10 flex flex-col'>
        <StyledLabel>
          <p>Adres</p>
          <StyledInput type='text' onChange={e => setAddress(e.target.value)} />
        </StyledLabel>
        <StyledLabel>
          <p>Piętro</p>
          <StyledInput type='number' onChange={e => setFloorsNumber(+e.target.value)} />
        </StyledLabel>
        <StyledLabel>
          <p>Opis</p>
          <StyledInput type='text' onChange={e => setDescription(e.target.value)} />
        </StyledLabel>
        <StyledLabel>
          <p>Etykieta</p>
          <StyledInput type='text' onChange={e => setLabel(e.target.value)} />
        </StyledLabel>
        <button className='mx-4 mt-3 cursor-pointer rounded-lg bg-blue-300 px-5 py-3' type='submit'>
          Wyślij
        </button>
      </form>
      {isSubmitted && <h1 className='mt-3 text-center text-lg font-bold text-green-400'>Dodałeś nowy dom!</h1>}
    </Container>
  );
};
