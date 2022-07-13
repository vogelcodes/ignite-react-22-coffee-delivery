import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/images/Logo.svg'
import { CartBadge, HeaderContainer, LocationBadge } from './styles'
export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logo} alt=""></img>
      </span>
      <nav>
        <NavLink to="/checkout">
          <LocationBadge>
            <MapPin weight="fill" />
            <span>Porto Alegre, RS</span>
          </LocationBadge>
        </NavLink>
        <NavLink to="/checkout">
          <CartBadge>
            <ShoppingCart weight="fill" />
          </CartBadge>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
