import { useVans } from '../../shared/lib/hooks'
import { useSearchParams } from 'react-router-dom'
import { Loader, VanCard } from '../../shared/components'
import './styles.css'
import { handleFilterChange } from '../../shared/lib/helpers'

export const Vans = () => {
  const { loading, data: vans } = useVans()
  const [searchParams, setSearchParams] = useSearchParams()

  const typeFilter = searchParams.get('type')

  const diplayedVans = typeFilter
    ? vans.filter((van) => van?.type?.toLowerCase() === typeFilter)
    : vans

  if (loading) {
    return <Loader />
  }

  return (
    <section className="van-list-container">
      {diplayedVans.length !== 0 ? (
        <>
          <h1>Explore our van options</h1>
          <div className="van-list-filter-buttons">
            <button
              onClick={() =>
                handleFilterChange('type', 'simple', setSearchParams)
              }
              className={`van-type simple ${
                typeFilter === 'simple' ? 'selected' : ''
              }`}
            >
              Simple
            </button>
            <button
              onClick={() =>
                handleFilterChange('type', 'luxury', setSearchParams)
              }
              className={`van-type luxury ${
                typeFilter === 'luxury' ? 'selected' : ''
              }`}
            >
              Luxury
            </button>
            <button
              onClick={() =>
                handleFilterChange('type', 'rugged', setSearchParams)
              }
              className={`van-type rugged ${
                typeFilter === 'rugged' ? 'selected' : ''
              }`}
            >
              Rugged
            </button>

            {typeFilter ? (
              <button
                onClick={() =>
                  handleFilterChange('type', null, setSearchParams)
                }
                className="van-type clear-filters"
              >
                Clear filter
              </button>
            ) : null}
          </div>
          <div className="van-list">
            {diplayedVans.map((van) => (
              <VanCard
                key={van.id}
                van={van}
                searchParams={searchParams.toString()}
              />
            ))}
          </div>
        </>
      ) : (
        <h1>No vans of this type</h1>
      )}
    </section>
  )
}
