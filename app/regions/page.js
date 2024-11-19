//'use client'; 

import "../../css/globals.css";
export default function HomePage() {
  return (
    <>
    <RegionMain />
    
    </>
  );

}


function RegionMain(){

    let region = [
      {
        link:"#",
        image:"http://placehold.it/760x670",
        location:"New South Wales",
        heading3:"Sydney",
        heading3_link:"#",
      },
  
      {
        link:"#",
        image:"http://placehold.it/760x670",
        location:"Victoria",
        heading3:"Melbourne",
        heading3_link:"#",
      },
  
      {
        link:"#",
        image:"http://placehold.it/760x670",
        location:"Queensland",
        heading3:"Brisbane",
        heading3_link:"#",
      },
  
      {
        link:"#",
        image:"http://placehold.it/760x670",
        location:"Western Australia",
        heading3:"Perth",
        heading3_link:"#",
      },
  
      {
        link:"#",
        image:"http://placehold.it/760x670",
        location:"South Australia",
        heading3:"Adelaide",
        heading3_link:"#",
      },
  
      {
        link:"#",
        image:"http://placehold.it/760x670",
        location:"Tasmania",
        heading3:"Hobart",
        heading3_link:"#",
      }
    ];
    return(
  
  <div className="content">
    <div className="container">
      <div className="row">
        <div className="main col-sm-12">
          <h1 className="section-title">Regions in Australia</h1>
          <div className="grid-style1 clearfix">
            {region.map((region_items,index)=>(
              <div className="item col-md-4" key={index}>
              <div className="image">
                <a href={region_items.link}>
                  <h3>{region_items.heading3}</h3>
                  <span className="location">{region_items.location}</span>
                </a>
                <img src={region_items.image} alt="" />
              </div>
            </div>
            ))}
            
            
        
          </div>
        </div>
      </div>
    </div>
  </div>
  
    );
    
  }