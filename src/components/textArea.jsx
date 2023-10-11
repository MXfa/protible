import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledTextField = styled(TextField)(
  ({ theme }) => `
    width: 100%;
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? '#fff' : grey[900]};
    background: transparent;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[500] : grey[500]};
    
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  
    &:focus-visible {
      outline: 0;
    }
  `,
);
const TextArea = ({ comment, setComment }) => {
  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 280) {
      setComment(inputText);
    }
  };

  const handleKeyDown = (event) => {
    const inputText = event.target.value;
    const isBackspace = event.key === 'Backspace';
    const isDelete = event.key === 'Delete';
    const isTextSelected = event.target.selectionStart !== event.target.selectionEnd;

    if (inputText.length >= 280 && !isBackspace && !isDelete && !isTextSelected) {
      event.preventDefault();
    }
  };

  const isValid = comment.length <= 280;

  return (
    <div>
      <StyledTextField
        variant="filled"
        multiline
        rows={3}
        fullWidth
        placeholder="Escribe un comentario..."
        value={comment}
        onChange={(event) => {
          handleChange(event);
        }}
        onKeyDown={handleKeyDown}
        inputProps={{
          maxLength: 280,
        }}
      />
      <p>{comment.length}/280 caracteres</p>
      {!isValid && (
        <p style={{ color: 'red' }}>
          El comentario debe tener máximo 280 caracteres.
        </p>
      )}
    </div>
  );
};

export default TextArea;
