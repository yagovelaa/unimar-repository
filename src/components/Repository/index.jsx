import { useState } from 'react'
import { Trash, ThumbsUp } from '@phosphor-icons/react'

import styled from './Repository.module.css'

export function Repository({ name, username, onDeleteRepository }) {
  const [countLike, setCountLike] = useState(0)

  function handleDeleteRepository() {
    onDeleteRepository(name)
  }

  function handleAddLike() {
    setCountLike((state) => {
      return state + 1
    })
  }

  return (
    <div className={styled.repository}>
      <div>
        <img
          className={styled.avatar}
          src={`https://github.com/${username}.png`}
          alt=""
        />

        <div className={styled.infoRepository}>
          <strong>{name}</strong>
          <div>
            <button className={styled.iconButton} onClick={handleAddLike}>
              <ThumbsUp className={styled.likeIcon} size={18} />
            </button>
            <span>Aplaudir - {countLike}</span>
          </div>
        </div>
      </div>

      <button className={styled.iconButton} onClick={handleDeleteRepository}>
        <Trash className={styled.trashIcon} size={24} />
      </button>
    </div>
  )
}
