'use client'; 

import "../css/globals.css";
export default function HomePage() {
  return (
    <>
      <Slide />
      <AdvancedResearch />
      <MainContent />
    </>
  );

}



function Slide() {
  let Controls = {
    classNames: ["left carousel-control", "right carousel-control"],
    dataSlide: ["prev", "next"],
    spanClass: ["glyphicon glyphicon-chevron-left", "glyphicon glyphicon-chevron-right"],
    text: ["Previous", "Next"]
  };

  
    
    return (
      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div
            className="item active"
            id="slide1"
            style={{
              background: "url(http://placehold.it/1920x605) no-repeat left center",
              backgroundSize: "cover"
            }}
          >
            <div className="carousel-caption">
              <div className="caption sfr slider-title">Breathtaking views</div>
              <div className="caption sfl slider-subtitle">
                Relaxation in the Bay of Belfalas
              </div>
              <a href="#" className="caption sfb btn btn-default btn-lg">Learn More</a>
            </div>
          </div>
          <div
            className="item"
            id="slide2"
            style={{
              background: "url(http://placehold.it/1920x605) no-repeat left center",
              backgroundSize: "cover"
            }}
          >
            <div className="carousel-caption">
              <div className="caption sfr slider-title">The simple life</div>
              <div className="caption sfl slider-subtitle">
                Lush gardens in Mordor
              </div>
              <a href="#" className="caption sfb btn btn-default btn-lg">Learn More</a>
            </div>
          </div>
        </div>
  
        <div id="home-search-section"></div>
        
        {Controls.classNames.map((className, index) => (
          <a
            key={Controls.classNames[index]}
            className={className}
            role="button"
            data-slide={Controls.dataSlide[index]}
          >
            <span className={Controls.spanClass[index]}></span>
            <span className="sr-only">{Controls.text[index]}</span>
          </a>
        ))}
      </div>
    );
    
  }
  
    
 



function NightOption(){
  const night= [];
  for(let i=1; i<=14; i++){
    night.push(i);

  }


return(
  <>
  <option value=""></option>
  {night. map((night)=>(
    <option key={night} value={night}>{night}Night{night >1 ?'s':''}</option>
  ))}
  </>
);
}

function AdvancedResearch(){
  return(
    <div id="home-advanced-search" className="open">
  <div id="opensearch"></div>
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <form>
          <div className="form-group">
            <div className="form-control-small">
              <div
                className="input-group date chzn-container"
                data-datepicker
              >
                <input
                  placeholder="Arrive on..."
                  type="text"
                  className="form-control"
                  data-date-format="DD/MM/YYYY"
                />
                <span className="input-group-addon">
                  <span className="glyphicon glyphicon-calendar"></span>
                </span>
              </div>
            </div>

            <div className="form-control-small">
              <select
                id="search_status"
                name="search_status"
                data-placeholder="Stay..."
              >

            <NightOption />
            </select>
                
            </div>

            <div className="form-control-small">
              <select
                id="search_bedrooms"
                name="search_bedrooms"
                data-placeholder="Bedrooms"
              >
                <option value=""></option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="5plus">5+</option>
              </select>
            </div>
            <div className="form-control-large">
              <input
                type="text"
                className="form-control"
                name="location"
                placeholder="City, State, Country, etc..."
              />
            </div>
            <button type="submit" className="btn btn-fullcolor">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  );
  
}

function Contents(){

  let content = [
    {heading3:"Luxury Apartment with great views",
      location:"Upper East Side, New York",
      image: <img src="http://placehold.it/760x670" alt="" />,
      price: "$950",
      text:"per night",
      bedroom1:2,
    bedroom2:3
  },

  {heading3:"Stunning Villa with 5 bedroom",
   location:"Miami Beach, Florida",
   image:<img src="http://placehold.it/760x670" alt="" />,
    price: "$1300",
    text:"per night",
    bedroom1:5,
  bedroom2:2
},

{heading3:"Recent construction with 3 bedrooms",
  location:"Park Slope, New York",
  image:<img src="http://placehold.it/760x670" alt="" />,
   price: "$560",
   text:"per night",
   bedroom1:3,
 bedroom2:2
},
{heading3:"Modern construction with parking space",
  location:"Midtown, New York",
  image:<img src="http://placehold.it/760x670" alt="" />,
   price: "$85",
   text:"per night",
   bedroom1:1,
 bedroom2:2
},

{heading3:"3 bedroom villa with garage for ren",
  location:"Bal Harbour, Florida",
  image:<img src="http://placehold.it/760x670" alt="" />,
   price: "$150",
   text:"per night",
   bedroom1:3,
 bedroom2:2
}
  
  ];


  return(
    <>
    {content.map((item,index)=>(
      <div className="item col-md-4" key={index}>
                  <div className="image">
                    <a href="properties-detail.html">
                    <h3>{item.heading3}</h3>
                    <span className="location">{item.location}</span>
                    </a>
                    {item.image}
                    </div>
                    <div className="price">
                      <span>{item.price}</span>
                      <p>{item.text}</p>
                      </div>
                      <ul className="amenities">
                        <li><i className="icon-bedrooms"></i>{item.bedroom1}</li>
                        <li><i className="icon-bedrooms"></i>{item.bedroom2}</li>
                      </ul>
                    </div>
                    
    ))}
    </>

    
      
          

    
    

    
  );
}

function Content2(){
  let regions = [
    {image:<img src="http://placehold.it/194x194" alt="" />,
      heading3:"Rhovanion"
    },

    {image:<img src="http://placehold.it/194x194" alt="" />,
      heading3:"Eriador"
    },
    {image:<img src="http://placehold.it/194x194" alt="" />,
      heading3:"Bay of Belfalas"
    },
    {image:<img src="http://placehold.it/194x194" alt="" />,
      heading3:"Mordor"
    },
    {image:<img src="http://placehold.it/194x194" alt="" />,
      heading3:"The Southwest"
    },
    {image:<img src="http://placehold.it/194x194" alt="" />,
      heading3:"Arnor"
    },
  ];

  return(
    <>

  {regions.map((item2,index)=>(
    <div className="item" key={index}>
      <a href="#">
        {item2.image}
        <h3>{item2.heading3}</h3>
      </a>
      </div>
   
  ))}
    </>
  );

}

function MainContent3(){
  let article=[
    {
      icon:"fa fa-file-text",
      link:"#",
      image:"http://placehold.it/766x515",
      date:"July 30, 2014",
      comment:2,
      tag:"Properties, Prices, best deals",
      heading3:"How to get your dream property for the best price?",
      heading3_title:"#",
      content:"Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor liberocondimen."

    },
    {
      icon:"fa fa-film",
      link:"#",
      image:"http://placehold.it/766x515",
      date:"July 24, 2014",
      comment:4,
      tag:"Tips, Mortgage",
      heading3:"7 tips to get the best mortgage.",
      heading3_title:"#",
      content:"Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor liberocondimen."

    },
    {
      icon:"fa fa-file-text",
      link:"#",
      image:"http://placehold.it/766x515",
      date:"July 5, 2014",
      comment:1,
      tag:"Location, Price, House",
      heading3:"House, location or price: What's the most important factor?",
      heading3_title:"#",
      content:"Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor liberocondimen."

    }
  ]
return(
  <>
  <h1 className="section-title">Recent Articles</h1>
  <div className="grid-style1">
{article.map((item3,index)=>(
 <div className="item col-md-4" key={index}>
 <div className="image">
   <a href={item3.link}>
     <span className="btn btn-default"><i className="fa fa-file-o"></i> Read More</span>
   </a>
   <img src={item3.image} alt="" />
 </div>
 <div className="tag"><i className={item3.icon}></i></div>
 <div className="info-blog">
   <ul className="top-info">
     <li><i className="fa fa-calendar"></i> {item3.date}</li>
     <li><i className="fa fa-comments-o"></i> {item3.comment}</li>
     <li>
       <i className="fa fa-tags"></i> {item3.tag}
     </li>
   </ul>
   <h3>
     <a href={item3.heading3_title}>{item3.heading3}</a>
   </h3>
   <p>{item3.content}</p>
 </div>
</div>
))}
 <div className="center">
                <a href="#" className="btn btn-default-color">View All News</a>
              </div>
</div>

</>

);

}

function SideBar1(){

  let side1 = [
    {
      link:"blog-detail.html",
      image:"http://placehold.it/100x100",
      available:"Available Now",
      h4_link:"blog-detail.html",
      h4:"Private Beac",
      text:"Lossarnach, Eriado"
    },
    {
      link:"blog-detail.html",
      image:"http://placehold.it/100x100",
      available:"Available on 24 July",
      h4_link:"blog-detail.html",
      h4:"Mountain views",
      text:"Hyarnustar, Rhovanion"
    },
    {
      link:"blog-detail.html",
      image:"http://placehold.it/100x100",
      available:"Available 5 July",
      h4_link:"blog-detail.html",
      h4:"Heart of the village",
      text:"Minhiriath, Eriador"
    },
    {
      link:"blog-detail.html",
      image:"http://placehold.it/100x100",
      available:"Available 6 July",
      h4_link:"blog-detail.html",
      h4:"The city life",
      text:"West Beleriand, Mordor"
    }

  ]
  return(

             
              <div className="col-sm-12">
                <h2 className="section-title">Last minute deals</h2>
                <ul className="latest-news">
                  {side1.map((sideItem1,index)=>(
                     <li className="col-md-12" key={index}>
                     <div className="image">
                       <a href={sideItem1.link}></a>
                       <img alt="" src={sideItem1.image}/>
                     </div>
 
                     <ul className="top-info">
                       <li><i className="fa fa-calendar"></i>{sideItem1.available}</li>
                     </ul>
 
                     <h4>
                       <a href={sideItem1.h4_link}>{sideItem1.h4}</a>
                       <p>{sideItem1.text}</p>
                     </h4>
                   </li>
                  ))}
                 
                </ul>
                <p className="center">
                  <a className="btn btn-fullcolor" href="#">More deals</a>
                </p>
              </div>

                );       
            
}

function SideBar2(){
  let side2 = [
    {
      link:"#",
      image:"http://placehold.it/70x70",
      h5_link:"#",
      h5: "Sam Minnée reviewed",
      h5_link_text:"The House With No Windows",
      text:"Awesome solitary confinement, mate. Spot on. Sweet as.",
      h6:"Just now"
    },
    
    {
      link:"#",
      image:"http://placehold.it/70x70",
      h5_link:"#",
      h5: "Sam Minnée reviewed",
      h5_link_text:"The House With No Windows",
      text:"Has this house been unit tested?",
      h6:"37 minutes ago"

    }
  

  ]
  return(
  <div className="col-sm-12">
    <h2 className="section-title">Activity</h2>
    <ul className="activity">
      {side2.map((sideItem2,index)=>(
        <li className="col-lg-12" key={index}>
        <a href="#"
          ><img src={sideItem2.image} alt=""
        /></a>
        <div className="info">
          <h5>
            {sideItem2.h5}{sideItem2.h5_link}{sideItem2.h5_link_text}
          </h5>
          <p>{sideItem2.text}</p>
          <h6>{sideItem2.h6}</h6>
        </div>
      </li>
      ))}
      
      
    </ul>
  </div>
  );
  
}
  
  







function MainContent(){
  return(

<div className="content">
  <div className="container">
    <div className="row">
      <div className="main col-sm-8">
              <h1 className="section-title">Featured Properties</h1>

              <div className="grid-style1 clearfix">
                <Contents />
                </div>
              <div className="row">
              <div className="col-sm-12">
                 <h1 className="section-title">Popular Regions</h1>
              <div id="regions">
                <Content2 />
              </div>
            </div>
          </div>
          <MainContent3 />
          </div>
          <div className="sidebar col-sm-4">
            <SideBar1 />
            <SideBar2 />
          </div>       
    </div>
    </div>
  </div>


  );
}
