import './App.css'
import data from './data.json'
import { MdClose } from "react-icons/md";

function App() {

  console.log(data)

  return (
    <div>
      <header></header>
      <div className="divider"></div>
      <div className="container">
      <div className="fiter">
        <div className='filtered-btn'>
          <button className='btn'>Frontend</button>
          <button className='close'>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
        {data.map((item) => {
          return (<div className="job-list">
          <div className='dev-info'>
            <img src={item.logo} alt={item.company} />
            <div className='contents'>
              <div> <span className='company-name'>{item.company}</span> 
             { item.new && <span className='new-badge'>New!</span>} 
             { item.featured && <span className='fetured'>Featured</span>}
             </div>
              <h3>{item.position}</h3>
              <div className='dates'>
                <p>{item.postedAt}</p>•
                <p>{item.contract}</p>•
                <p>{item.location}</p>
              </div>
            </div>
          </div>
          <div className="skills">
            <button className='btn'>{item.role}</button>
            <button className='btn'>{item.level}</button>
            {item.languages.map(e => (<button className='btn'>{e}</button>))}
            {item.tools.map(i => (<button className='btn'>{i}</button>))}
          </div>
        </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
