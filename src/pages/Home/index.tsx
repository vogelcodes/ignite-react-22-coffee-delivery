import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import heroImg from '../../assets/images/hero.png'
import { CoffeeList } from './CoffeeList'
import { HeroContainer, HeroText } from './styles'

export function Home() {
  return (
    <>
      <HeroContainer>
        <HeroText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ul>
            <li>
              <div className="yellow-dark">
                <ShoppingCart weight="fill" />
              </div>
              Compra Simples e Segura
            </li>
            <li>
              <div className="base-text">
                <Package weight="fill" />
              </div>
              Embalagem mantém o café intacto
            </li>
            <li>
              <div className="yellow">
                <Timer weight="fill" />
              </div>
              Entrega rápida e rastreada
            </li>
            <li>
              <div className="purple">
                <Coffee weight="fill" />
              </div>
              O café chega fresquinho até você
            </li>
          </ul>
        </HeroText>
        <img src={heroImg} alt="Copo de Café"></img>
      </HeroContainer>
      <CoffeeList />
    </>
  )
}
