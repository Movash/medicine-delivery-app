import { styled } from 'styled-components';

export const FormCont = styled('div')(() => {
  return {
    marginTop: '66px',
    input: {
      fontSize: '14px',
      lineHeight: 1.29,
      width: '100%',
      height: '46px',
      border: '1px solid rgba(239, 237, 232, 0.3)',
      borderRadius: '12px',
      backgroundColor: 'orange',
      // color: 'var(--white-color)',
      textIndent: '12px',
      outline: 'none',
      paddingTop: '2px',
      transition: 'border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover, &:focus': {
        borderColor: 'var(--orange-color)',
      },
    },
    '.inputs-cont': {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px',
      marginBottom: '28px',
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
    '.submit-btn': {
      fontSize: '16px',
      lineHeight: 1.12,
      padding: '12px 40px',
      // color: 'var(--white-color)',
      borderRadius: '12px',

      marginBottom: '12px',
      backgroundColor: 'var(--orange-color)',
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover, &:focus': {
        backgroundColor: 'var(--light-orange-color)',
      },
      '&:disabled': {
        color: 'rgba(239, 237, 232, 0.6)',
        cursor: 'not-allowed',
      },
    },
    '.navigate-cont': {
      display: 'flex',
      fontSize: '12px',
    },
    '.navigate-descr': {
      opacity: 0.6,
    },
    '.navigate-link': {
      textDecoration: 'underline',
      transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover, &:focus': {
        color: 'var(--light-orange-color)',
      },
    },
    '@media screen and (min-width: 768px)': {
      marginTop: '105px',
      h1: {
        fontSize: '32px',
        lineHeight: 1.375,
        marginBottom: '16px',
      },
      '.main-descr': {
        width: '496px',
        fontSize: '16px',
        lineHeight: 1.5,
        marginBottom: '32px',
      },
      input: {
        fontSize: '16px',
        lineHeight: 1.5,
        width: '364px',
        height: '52px',
      },
      '.inputs-cont': {
        gap: '20px',
        marginBottom: '64px',
      },
      '.eye-cont': {
        width: 'fit-content',
      },
      '.eye-btn': {
        top: '15px',
      },
      '.submit': {
        fontSize: '20px',
        lineHeight: 1.2,
        padding: '16px 60px',
      },
      '.navigate-cont': {
        marginLeft: '5px',
      },
    },
    '@media screen and (min-width: 1440px)': {
      marginTop: '116px',
    },
  };
});
