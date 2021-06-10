import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const HeaderContainer = styled.header`
  max-width: 1120px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h1 {
    height: 3rem;
    color: ${props => props.theme.colors.blue_500}
  }
`;

export const TokenAPIInput = styled.input`
  width: 20rem;
  height: 3rem;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.gray_100};
  font-size: 1rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
`;

export const SubtitleForm = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  label {
    color: ${props => props.theme.colors.gray_400};
    font-weight: 500;
    font-size: 1.25rem;
  }

  button {
    background-color: #FFF;
    border-radius: 0.25rem;
    padding: 0.5rem;
    border: 0;
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme.colors.blue_500};
    transition: 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const FormCrud = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    border-bottom: 1px solid ${props => props.theme.colors.gray_100};
    font-weight: 500;
    color: ${props => props.theme.colors.gray_400};
  }

  input {
    width: 19rem;
    border: 1px solid ${props => props.theme.colors.gray_100};
    padding: 1rem;
    border-radius: 8px;
  }
`;

