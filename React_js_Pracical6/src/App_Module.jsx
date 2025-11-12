import React, { useState } from 'react'
import styles from "./app.module.css"
const App_Module = () => {
    const [active, setActive] = useState(true);
  return (
    <>
    <div className={`${styles.container} ${styles.appContainer}`}>Css Modules allow to write css that scoped locally to a component</div>
    <div className={styles.containerApp}>
        <h2>Hi mom</h2>
        <p className={active ? styles.activeDescription : styles.inActiveDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nemo?</p>
    </div>
    <div className='bg-gray-500 py-3 px-3 text-center text-2xl space-2'>
      <h1 className='text-blue-500'>Hi i am Omar</h1>
    </div>
    </>
  )
}

export default App_Module;