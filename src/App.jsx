import { useEffect, useState } from "react"
import useFetchApi from "./hooks/useFetchApi"
import LocationCard from "./components/LocationCard"
import ResidentsList from "./components/ResidentsList"
import SearchForm from "./components/SearchForm"
import { randomID } from "./utils"

const baseUrl = 'https://rickandmortyapi.com/api'

function App() {

  const {data, request, pending, error} = useFetchApi()
  const [search, setSearch] = useState(randomID(126))

  useEffect(() => {
    request(`${baseUrl}/location/${search}`)
  }, [search])

  return (
    <div>
      <section className="hero" style="background-image: url('https://i.redd.it/o6cwlzg3exk41.png')">
        <div className="hero-content">
        </div>
      </section>

      <SearchForm setSearch={setSearch} />

      {pending ? <p>Loading...</p> : (
        data && <LocationCard location={data} />
      )}

      <ResidentsList residents={data?.residents} />
    </div>
  );
}

export default App;
