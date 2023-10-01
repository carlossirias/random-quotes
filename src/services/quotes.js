const API_URL = 'https://api.quotable.io/random'

export const getRandomQuotes = async ()=>
{
   const response = await fetch(API_URL)
    const data = await response.json()
    return data
}