import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Nav = styled('nav')(() => {
  return {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'var(--sky-blue-color)',
    zIndex: '2',
    '& div': {
      '& a': {
        color: 'var(--white-color)',
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 1.5,
        letterSpacing: '0.02em',
        marginLeft: 40,
        transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        '&.active': {
          color: 'var(--active-color)',
        },
        '&:hover, &:focus': {
          color: 'var(--active-color)',
        },
      },
    },
  };
});

export const HeaderNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 15;
  padding-bottom: 15;
  background-color: var(--sky-blue-color);
  z-index: 2;
`;

export const HeaderLink = styled(NavLink)`
  color: var(--white-color);
  font-weight: 700;
  font-size: 20;
  line-height: 1.5;
  letter-spacing: 0.02em;
  margin-left: 40;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:active {
    color: var(--active-color);
  }

  &:hover,
  &:focus {
    color: var(--active-color);
  }
`;
