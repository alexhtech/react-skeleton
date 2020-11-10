import React from 'react'
import { HeaderWrap, HeaderAnchor } from './styles'
import Logo from '@assets/images/happyHouseLogoWhite.svg'

interface headerLinkProps {
  label: string
  path: string
}

const Header = () => {
  const headerLinks = [
    { label: 'Mission', path: '/misson' },
    { label: 'Contact us', path: '/contact-us' },
    { label: 'Team', path: '/team' },
  ] as headerLinkProps[]

  return (
    <HeaderWrap>
      <Logo />
      {headerLinks?.map((link) => (
        <HeaderAnchor key={link.path} href={link.path}>
          {link.label}
        </HeaderAnchor>
      ))}
    </HeaderWrap>
  )
}

export default Header
