import './App.css'
import { QuotesSection } from './components/QuotesSection'
import { Card } from './components/Card'
import { useEffect, useState } from 'react'
import { getRandomQuotes } from './services/quotes'
import { ActionContainer } from './components/ActionsContainer'

function App() {
  const [quotes, setQuotes] = useState()

  useEffect(()=>{
    getRandomQuotes()?.then(quote => setQuotes(quote))
  },[])

  const hasContent = quotes?._id && quotes?.content ? true : false 
  
  return (
    <>
      <main className='bg-[#111729] w-full min-h-screen'>
        <QuotesSection>
          <Card
          id={quotes?._id}
          content={quotes?.content}
          author={quotes?.author}
          tags={quotes?.tags}
          hasContent={hasContent}/>

          {hasContent && <ActionContainer message={quotes?.content} setQuotes={setQuotes}/>}
        </QuotesSection>
      </main>
    </>
  )
}

export default App
