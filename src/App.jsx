import { Trash, PaperPlaneRight, ThumbsUp } from '@phosphor-icons/react'

import LogoUnimar from './assets/unimar-logo.svg'
import styled from './App.module.css'

function App() {
  return (
    <>
      <div className={styled.container}>
        <div className={styled.content}>
          <header className={styled.header}>
            <img src={LogoUnimar} alt="" />

            <div className={styled.infoUser}>
              <strong>Yago Vela</strong>
              <strong>-</strong>
              <span>Ciência da computação</span>
            </div>
          </header>

          <main className={styled.gridRepositorys}>
            <div className={styled.repository}>
              <div>
                <img
                  className={styled.avatar}
                  src="https://github.com/yagovelaa.png"
                  alt=""
                />

                <div className={styled.infoRepository}>
                  <strong>unimar-repository</strong>
                  <div>
                    <button className={styled.iconButton}>
                      <ThumbsUp className={styled.likeIcon} size={18} />
                    </button>
                    <span>Aplaudir - 10</span>
                  </div>
                </div>
              </div>

              <button className={styled.iconButton}>
                <Trash className={styled.trashIcon} size={24} />
              </button>
            </div>
          </main>

          <footer>
            <form className={styled.form}>
              <input
                name="repository"
                type="text"
                placeholder="Nome do repositório"
                required
              />
              <button type="submit">
                <PaperPlaneRight size={24} weight="fill" />
              </button>
            </form>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
