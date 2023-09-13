import LogoUnimar from '../../assets/unimar-logo.svg'
import styled from './Header.module.css'

export function Header({ name, role }) {
  return (
    <>
      <header className={styled.header}>
        <img src={LogoUnimar} alt="" />

        <div className={styled.infoUser}>
          <strong>{name}</strong>
          <strong>-</strong>
          <span>{role}</span>
        </div>
      </header>
    </>
  )
}
