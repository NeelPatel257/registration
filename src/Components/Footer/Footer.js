import "./Footer.css";
function Footer() {
     
      return(
        <div className="foot">
                <div className="foot1">
                    <div className="foot11">
                     <p className="p1"><b>Company Name</b></p>
                      <ul className="s1">
                        <li>Endel Digital</li>
                        <li>Honeycomb</li>
                        <li>Linear Loop</li>
                      </ul>
                    </div>
                    <div className="foot12">
                   <p className="p2"><b>Product</b></p>
                   <ul className="s1">
                        <li>Angular</li>
                        <li>React</li>
                        <li>Python</li>
                        <li>Flutter</li>
                      </ul>
                    </div>
                    <div className="foot13">
                   <p className="p3"><b>Useful Links</b></p>
                     <ul className="s1">
                        <li>Pricing</li>
                        <li>Setting</li>
                        <li>Order</li>
                        <li>Home</li>
                        </ul>
                    </div>
                    <div className="foot14">
                   <p className="p4"><b>Contact</b></p>
                   <ul className="s1">
                    <li><i className="fa-solid fa-house">New York,NY 10012,US</i></li>
                    <li><i className="fa-solid fa-envelope">info@example.com</i></li>
                    <li><i className="fa-solid fa-phone"></i>+01 234 567</li>
                   </ul>
                    </div>

                </div>
              </div>
      )
  }

  export default Footer;