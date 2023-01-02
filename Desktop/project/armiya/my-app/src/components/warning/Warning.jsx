import React from 'react'
import style from "./Warning.module.css"
import img1 from "../../img/undov.png"
import img from "../../img/x.gif"
const Warning = () => {
  return (
    <div className={style.Warning}>
        <div className={style.Block}>
            <img src={img1} alt="" />
           <h1>E`tibor bering</h1>  
        </div>
        <div className={style.Card}>
          <div className={style.Link}>
              <h1>Bajarilmagan vazifalar</h1>
              <img src={img} alt="" />
          </div>
          
            <a href="." >link bo`lishi kere</a>
        </div>
        <div className={style.Card}>
          <div className={style.Link}>
              <h1>Bajarilmagan vazifalar</h1>
              <img src={img} alt="" />
          </div>
          
            <a href="." >link bo`lishi kere</a>
        </div>
        <div className={style.Card}>
          <div className={style.Link}>
              <h1>Bajarilmagan vazifalar</h1>
              <img src={img} alt="" />
          </div>
          
            <a href="." >link bo`lishi kere</a>
        </div>
        <div className={style.Card}>
          <div className={style.Link}>
              <h1>Bajarilmagan vazifalar</h1>
              <img src={img} alt="" />
          </div>
          
            <a href="." >link bo`lishi kere</a>
        </div>
      
       
    </div>
  )
}

export default Warning