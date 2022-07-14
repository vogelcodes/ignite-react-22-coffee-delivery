import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 544px;
`
export const HeroText = styled.div`
  width: 36.75rem;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  ul {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      font-size: medium;
      div {
        margin-right: 0.5rem;

        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        border-radius: 9999px;
        svg {
          color: white;
        }
      }
      .yellow-dark {
        background-color: ${(props) => props.theme['yellow-dark']};
      }
      .base-text {
        background-color: ${(props) => props.theme['base-text']};
      }
      .yellow {
        background-color: ${(props) => props.theme.yellow};
      }
      .purple {
        background-color: ${(props) => props.theme.purple};
      }
    }
  }
`
