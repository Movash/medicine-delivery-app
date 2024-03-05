import { styled } from 'styled-components';

export const FormCont = styled('div')(() => {
  return {
    input: {
      fontSize: '14px',
      lineHeight: 1.29,
      width: '100%',
      height: '46px',
      border: '1px solid rgba(239, 237, 232, 0.3)',
      borderRadius: '12px',
      backgroundColor: 'var(--second-gray-color)',
      textIndent: '12px',
      outline: 'none',
      paddingTop: '2px',
      transition: 'border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover, &:focus': {
        borderColor: 'var(--active-color)',
      },
    },
    '.inputs-cont': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '30px',
      width: '100%',
    },
    '.input-cont': {
      width: '50%',
    },
    '.input-error': {
      borderColor: 'var(--error-color)',
    },
    '.input-success': {
      borderColor: 'var(--success-color)',
    },
    '.notify-cont': {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      marginTop: '4px',
    },
    '.notify-descr': {
      fontSize: '12px',
      letterSpacing: '0.01em',
    },
    '.error': {
      color: 'var(--error-color)',
    },
    '.success': {
      color: 'var(--success-color)',
    },
  };
});
