import { useState, useEffect } from 'react'

import { PaperPlaneRight } from '@phosphor-icons/react'

import { Repository } from './components/Repository'
import { Header } from './components/Header'

import styled from './App.module.css'

const userAuthenticated = {
  name: 'Yago Vela',
  role: 'Dev Front-end',
  username: 'yagovelaa',
}

export function App() {
  const [repositories, setRepositories] = useState([])
  const [newTitleRepository, setNewTitleRepository] = useState('')
  const { name, role, username } = userAuthenticated

  useEffect(() => {
    async function getAllRepositoriesToUser() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`,
        )
        const repositories = await response.json()

        const allRepositories = repositories.map((repo) => ({
          name: repo.name,
        }))

        setRepositories(allRepositories)
      } catch (error) {
        console.log(error)
      }
    }

    getAllRepositoriesToUser()
  }, [username])

  function handleCreateNewRepository(event) {
    event.preventDefault()

    setRepositories([...repositories, { name: newTitleRepository }])
    setNewTitleRepository('')
  }

  function handleAddNewTextRepository(event) {
    setNewTitleRepository(event.target.value)
  }

  function deleteRepository(repositoryToDelete) {
    const repositoryWithoutDeletedOne = repositories.filter((repository) => {
      return repository.name !== repositoryToDelete
    })

    setRepositories(repositoryWithoutDeletedOne)
  }

  const isTitleRepositoryEmpty = newTitleRepository === ''

  return (
    <>
      <div className={styled.container}>
        <div className={styled.content}>
          <Header name={name} role={role} />

          <main className={styled.gridRepositories}>
            {repositories.map((repository) => (
              <Repository
                key={repository.name}
                name={repository.name}
                username={username}
                onDeleteRepository={deleteRepository}
              />
            ))}
          </main>

          <footer>
            <form onSubmit={handleCreateNewRepository} className={styled.form}>
              <input
                name="repository"
                type="text"
                placeholder="Nome do repositório"
                required
                value={newTitleRepository}
                onChange={handleAddNewTextRepository}
              />
              <button type="submit" disabled={isTitleRepositoryEmpty}>
                <PaperPlaneRight size={24} weight="fill" />
              </button>
            </form>
          </footer>
        </div>
      </div>
    </>
  )
}
