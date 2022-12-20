import React from 'react'
import requests from '../requests'
import Row from './Row'

const Rows = () => {
  return (
    <main className='main-content'>
        <Row title="upcoming" fetchUrl={requests.requestUpcoming} />
        <Row title="popular" fetchUrl={requests.requestPopular} />
        <Row title="trending" fetchUrl={requests.requestTrending} />
        <Row title="topRated" fetchUrl={requests.requestTopRated} />
        <Row title="horror" fetchUrl={requests.requestHorror} />
    </main>
  )
}

export default Rows