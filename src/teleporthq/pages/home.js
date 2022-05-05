import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Advanced Determined Cheetah</title>
        <meta property="og:title" content="Advanced Determined Cheetah" />
      </Helmet>
      <select multiple>
        <option value="New Option">New Option</option>
        <option value="Option 1">Option 1</option>
        <option value="New Option">New Option</option>
        <option value="New Option">New Option</option>
      </select>
      <select multiple>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
    </div>
  )
}

export default Home
