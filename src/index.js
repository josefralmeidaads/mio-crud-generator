import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { 
  Container,
  HeaderContainer,
  TokenAPIInput,
  FormContainer,
  SubtitleForm,
  FormCrud, 
} from './styles';
import theme from './styles/theme';
import api from './services/api';

export const Interface = () => {
  const [nameForm, setNameForm] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = {
      name: nameForm
    }
    try {
      const response = await api.post('/CrudGen', data);
      console.log('Response->', response.data);
    }catch(err){
      console.log(err.message)
    }
  }

  const onChangeNameForm = (value) => {
    setNameForm(value);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <HeaderContainer>
          <h1>CRUD-GENERATOR</h1>
          <TokenAPIInput 
            type="text"
            placeholder="Token API"
          />
        </HeaderContainer>

        <FormContainer onSubmit={handleSubmit}>
          <SubtitleForm>
            <label>Gerar CRUD</label>
            <button type="submit">
              GERAR
            </button>
          </SubtitleForm>

          <FormCrud onSubmit={handleSubmit}>
            <h2>Informação da Page</h2>
            <input 
              type="text" 
              placeholder="Nome da Página" 
              onChange={(e) => onChangeNameForm(e.target.value)}
            />
          </FormCrud>
        </FormContainer>
      </Container>
    </ThemeProvider>
  )
}
