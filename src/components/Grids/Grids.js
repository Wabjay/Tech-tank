const Grids = (props) => {
  return (
    <div className="grids">
      {props.data.map((data) => (
         <div className= {props.grid}>
            <img src={data.image} className="grid-image" alt="" />
            <div className="text">
              <p className="grid_title">{data.title}</p>
              <p className="grid_subtitle">{data.subtitle}</p>
            </div>
            </div>
      ))}
    </div>
  );
};

export default Grids;
