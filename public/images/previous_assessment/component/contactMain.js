let rootElement = document.getElementById("root");


function ContactMain(){

  let contact =[
    {
      label:"name",
      labelName:"Name:",
      type:"text",
      id:"name",
      name:"name",
      require:true
    },
    {
      label:"email",
      labelName:"Email:",
      type:"email",
      id:"email",
      name:"email",
      require:true
    },
    {
      label:"subject",
      labelName:"Subject:",
      type:"text",
      id:"subject",
      name:"subject",
      require:true
    },
  ];
  return(


<div className="content">
  <div className="container">
    <div className="row">
      <div className="main col-sm-12">
        <h1 className="section-title">Contact Us</h1>
        <div className="contact-form">
          <form action="contact.php" method="post">
              {contact.map((form,index)=>(
                 <div className="form-group" key={index}>
                 <label htmlFor={form.label}>{form.labelName}</label>
                 <input
                   type={form.type}
                   className="form-control"
                   id={form.id}
                   name={form.name}
                   required = {form.require}
                   />
                   </div>
              ))}
              
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>



  );
}

const root = ReactDOM.createRoot(rootElement);
root.render(<ContactMain />)




