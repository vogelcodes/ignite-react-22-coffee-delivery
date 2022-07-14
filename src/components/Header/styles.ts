import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  max-width: 90rem;
  padding: 32px 160px;

  nav {
    display: flex;
    gap: 0.75rem;
    a {
      text-decoration: none;
      div {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }
    }
  }
`
export const LocationBadge = styled.div`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 8px;
  padding: 0.5rem;
  span {
    font-size: 14px;
    font-family: 'Roboto';
    font-weight: 400;
  }
`
export const CartBadge = styled.div`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 8px;
  padding: 0.5rem;
`
