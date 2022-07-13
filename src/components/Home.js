import farm from '/home/origami/js.practice/reactPrac/cv-project/src/assets/photo-1444858291040-58f756a3bdd6.avif'
const Home= () => {
    return (
      <div className="homeContain">
        <div className="space"></div>
        <div className="homeCont">
          <div className="titles">Welcome To Arthurs Store!</div>
          <div className="fresh">We Guarantee only the freshest of ingredients at Arthurs Local Store. Where the all produce is collected locally and fresh. </div>
          <img className='farm' src={farm} alt=''/>
        </div>
        <div className="space2"></div>
      </div>
    );
  };
  
  export default Home;
  