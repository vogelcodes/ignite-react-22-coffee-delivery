import styled from 'styled-components'

const CoffeeListContainer = styled.div`
  margin: auto;
  max-width: 66.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    align-self: flex-start;
  }
`
const CoffeeProducts = styled.div`
  margin-top: 3.5rem;
  display: grid;
  column-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`
const CoffeeCard = styled.div`
  display: flex;
  width: 256px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  background-color: ${(props) => props.theme['base-card']};
  img {
    margin-top: -20px;
    width: 7.5rem;
    height: 7.5rem;
  }
  p {
    font-size: 14px;
    text-align: center;
    width: 216px;
  }
  span {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 100px;
    padding: 4px 8px;
  }
`
const CardAction = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    font-size: 14px;
    align-items: flex-end;
    h3 {
      margin-bottom: -3px;
      line-height: 24px;
    }
  }
`
const coffeeList = [
  {
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imgUrl: '/coffee-types/Expresso.png',
  },
  {
    tags: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    imgUrl: '/coffee-types/Americano.png',
  },
  {
    tags: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    imgUrl: '/coffee-types/Cremoso.png',
  },
  {
    tags: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    imgUrl: '/coffee-types/Americano.png',
  },
]

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos Cafés</h2>
      <CoffeeProducts>
        {coffeeList.map((item) => (
          <CoffeeCard key={item.name}>
            <img src={item.imgUrl} alt="" />
            <div>
              {item.tags.map((tag, i) => (
                <span key={i}>{tag.toUpperCase()}</span>
              ))}
            </div>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <CardAction>
              <div>
                R${' '}
                <h3>
                  {item.price.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })}
                </h3>
              </div>
              <div>
                <div>-1+</div>
                <div>Cart</div>
              </div>
            </CardAction>
          </CoffeeCard>
        ))}
      </CoffeeProducts>
    </CoffeeListContainer>
  )
}
