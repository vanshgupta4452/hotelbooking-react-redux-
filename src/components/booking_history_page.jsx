
function Booking_page({Info}) {
   
  return (
    <>
      <div className="card mb-3 booking" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{Info.hotel}</h5>
                <p className="card-text">{Info.price}</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Booking_page;