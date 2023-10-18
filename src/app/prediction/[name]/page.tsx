"use client"
import { getPredictedAge, getPredictedGender, getPredictedCountry } from "@/utils"

interface Params {
  params: {name: string}
}

const page = async ({params}: Params) => {

  const ageData = getPredictedAge(params.name)
  const genderData = getPredictedGender(params.name)
  const countryData = getPredictedCountry(params.name)
  

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData
  ])

  //Promise.all to wait for all three promises to resolve concurrently. This ensures that you don't render the page until you have data from all three requests.

  return (
    <div>
      <h1>{params.name}</h1>
      <h1>{age?.age}</h1>
      <h1>{gender?.gender}</h1>
      <h1>{country?.country[0]?.country_id}</h1>
      
      
    
    </div>
  )
}

export default page

