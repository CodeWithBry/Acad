import s from "./ComponentLoader.module.css"

const ComponentLoader = () => {
  return (
    <div className={s.componentLoaderWrapper}>
        <li className={`${s.component1} ${s.component}`}></li>
        <li className={`${s.component2} ${s.component}`}></li>
        <li className={`${s.component3} ${s.component}`}></li>
        <li className={`${s.component4} ${s.component}`}></li>
        <li className={`${s.component5} ${s.component}`}></li>
    </div>
  )
}

export default ComponentLoader