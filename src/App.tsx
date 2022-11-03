import { GlobalStyled } from './globasStyles'
import { MainStyled } from './globasStyles'
import { LeftMenuBar } from './components/leftMenuBar'
import { RightMenuBar } from './components/rightMenuBar/index'
import { TopMenuBar } from './components/TopMenuBar'
import { useContext } from 'react'
import { Context } from './contexts/Context'
import { Cover } from './components/Cover'


function App() {
  const {state, dispatch} = useContext(Context)

  return (
    <GlobalStyled theme={state.theme.status as string}>
      <LeftMenuBar/>
      <RightMenuBar/>
      <TopMenuBar/>
      <MainStyled>
        <Cover/>
      </MainStyled>
      
    </GlobalStyled>  
  )
}

export default App
