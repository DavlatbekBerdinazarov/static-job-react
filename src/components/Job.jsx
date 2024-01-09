
function Job({ item, addFilterKeywords }) {

  const {
    id,
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = item;

  let isActive = (item.new && featured)

  const keywords = [role, level, ...languages, ...tools]

  return (
    <div className={`job-list ${isActive ? "active-border": ''}`}>
      <div className="dev-info">
        <img src={logo} alt={company} />
        <div className="contents">
          <div>
            <span className="company-name">{company}</span>
            {item.new && <span className="new-badge">New!</span>}
            {featured && <span className="fetured">Featured</span>}
          </div>
          <h3>{position}</h3>
          <div className="dates">
            <p>{postedAt}</p>•<p>{contract}</p>•<p>{location}</p>
          </div>
        </div>
      </div>
      <div className="skills">
        {keywords.map((element,index) => {
            return (
                <button key={index} onClick={() => addFilterKeywords(element)} className="btn">{element}</button>
            )
        })}
       </div>
    </div>
  );
}

export default Job;
