const rootElement = document.getElementById("root");

function MainNews(){

  let news = [
    {
      link: "#",
      image:"http://placehold.it/766x515",
      tag:"fa fa-file-text",
      title: "New Rental Regulations Announced",
      text: "The government has announced new rental regulationseffective from next month. Find out how this impacts you.",
      author: "admin",
      date: "2024-08-08"


    },

    {
      link: "#",
      image:"http://placehold.it/766x515",
      tag:"fa fa-file-text",
      title: "Top 10 Rental Properties in Sydney",
      text: "Explore our list of the top 10 rental properties in Sydney for the month of August.",
      author: "admin",
      date: "2024-08-07"
    },

    {
      link: "#",
      image:"http://placehold.it/766x515",
      tag:"fa fa-file-text",
      title: "Customer Stories: Finding the Perfect Home",
      text: "Read our customer stories about their journey to finding the perfect home through One Ring Rentals.",
      author: "admin",
      date: "2024-08-06"
    }




  ];



  return(
    <div className="content">
        <div className="container">
          <div className="row">
            <div className="main col-sm-12">
              <h1 className="section-title">Latest News</h1>
              <div className="grid-style1 clearfix">
                {news.map((items,index)=>(
                  <div className="item col-md-4" key={index}>
                  <div className="image">
                    <a href={items.link}>
                      <span className="btn btn-default"
                        ><i className="fa fa-file-o"></i> Read More</span >
                    </a>
                    <img src={items.image} alt="" />
                  </div>
                  <div className="tag"><i className={items.tag}></i></div>
                  <div className="info-blog">
                    <span className="title">{items.title}</span>
                    <span className="text">{items.text}</span>
                    <span className="meta">
                      <span className="author"><i className="fa fa-user"></i>{items.author}</span>
                      <span className="date"><i className="fa fa-clock-o"></i> {items.date}</span>
                    </span>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
  
    
  
}


const root = ReactDOM.createRoot(rootElement);
root.render(<MainNews />)

