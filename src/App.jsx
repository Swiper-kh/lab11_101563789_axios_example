import { useState } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import PersonList from './components/PersonList'
import PersonListFetch from './components/PersonListFetch'

function App() {
  const [mode, setMode] = useState('axios')

  return (
    <div>
      <h1 className="header">User List</h1>

      <div className="text-center my-3">
        <ButtonGroup>
          <Button
            variant={mode === 'axios' ? 'success' : 'outline-success'}
            onClick={() => setMode('axios')}
          >
            Axios
          </Button>
          <Button
            variant={mode === 'fetch' ? 'success' : 'outline-success'}
            onClick={() => setMode('fetch')}
          >
            Fetch API
          </Button>
        </ButtonGroup>
      </div>

      {mode === 'axios' ? <PersonList /> : <PersonListFetch />}
    </div>
  )
}

export default App
