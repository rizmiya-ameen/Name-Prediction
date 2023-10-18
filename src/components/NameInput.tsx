"use client"
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'




const NameInput = () => {

  const [input, setInput] = useState("")

  const router = useRouter()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    router.push(`/prediction/${input}`)
  }

  return (
    <div>
      <div>
        <h1>Enter your Name</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Type your name...'
          onChange={e => setInput(e.target.value)}
          value={input}
        />

        <button type="submit">Predict Data</button>
      </form>
    </div>
  )
}

export default NameInput