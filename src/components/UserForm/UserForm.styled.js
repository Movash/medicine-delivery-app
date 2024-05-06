import { styled } from 'styled-components';

export const FormCont = styled('div')(() => {
  return {
    // input: {
    //   fontSize: '14px',
    //   lineHeight: 1.29,
    //   width: '100%',
    //   height: '46px',
    //   border: '1px solid rgba(239, 237, 232, 0.3)',
    //   borderRadius: '12px',
    //   backgroundColor: 'var(--second-gray-color)',
    //   textIndent: '12px',
    //   outline: 'none',
    //   paddingTop: '2px',
    //   transition: 'border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    //   '&:hover, &:focus': {
    //     borderColor: 'var(--active-color)',
    //   },
    // },
    // '.inputs-cont': {
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    //   gap: '30px',
    //   width: '100%',
    // },
    // '.input-cont': {
    //   width: '50%',
    // },
    // '.input-error': {
    //   borderColor: 'var(--error-color)',
    // },
    // '.input-success': {
    //   borderColor: 'var(--success-color)',
    // },
    // '.notify-cont': {
    //   display: 'flex',
    //   alignItems: 'center',
    //   gap: '4px',
    //   marginTop: '4px',
    // },
    // '.notify-descr': {
    //   fontSize: '12px',
    //   letterSpacing: '0.01em',
    // },
    // '.error': {
    //   color: 'var(--error-color)',
    // },
    '.success': {
      color: 'var(--success-color)',
    },
  };
});

export const UserFormInput = styled.input`
  font-size: 14px;
  line-height: 1.29;
  width: 100%;
  height: 46px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  background-color: var(--second-gray-color);
  text-indent: 12px;
  outline: none;
  padding-top: 2px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border-color: var(--active-color);
  }

  &.input-error {
    border-color: var(--error-color);
  }

  &.input-success {
    border-color: var(--success-color);
  }
`;

export const InputsCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

export const InputCont = styled.div`
  width: 50%;
`;

export const NotifyCont = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
`;

export const NotifyDescr = styled.p`
  font-size: 12px;
  letter-spacing: 0.01em;

  &.error {
    color: var(--error-color);
  }
`;
