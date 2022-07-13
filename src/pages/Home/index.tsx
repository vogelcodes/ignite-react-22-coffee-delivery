import heroImg from '../../assets/images/hero.png'
import { HeroContainer, HeroText } from './styles'

export function Home() {
  return (
    <HeroContainer>
      <HeroText>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <ul>
          <li>Compra Simples e Segura</li>
          <li>Compra Simples e Segura</li>
          <li>Compra Simples e Segura</li>
          <li>Compra Simples e Segura</li>
        </ul>
      </HeroText>
      <img src={heroImg} alt="Copo de Café"></img>
    </HeroContainer>
  )
}
