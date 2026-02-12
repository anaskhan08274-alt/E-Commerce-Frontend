import { QRCodeCanvas } from "qrcode.react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function BuyNow() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/form");
    } else {
      setCheckingAuth(false);
    }
  }, [navigate]);

  if (checkingAuth) {
    return <h3>Checking authentication...</h3>;
  }

  if (!product) {
    return (
      <div>
        <h2>Invalid Purchase</h2>
        <h2>No Product selected from products route</h2>
      </div>
    );
  }

  const upiID = "9116244250@ptaxis";
  const upiAmount = product.price;
  const upiPayeeName = "Mohd Anas";

  const upiURL = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(
    upiPayeeName
  )}&am=${upiAmount}&cu=INR`;

  return (
  <div style={{justifyItems: "center", width: "500px", marginLeft: "450px"}}>
      <h3 style={{marginTop: "80px"}}>{product.title}</h3>
      <p style={{marginTop: "20px"}}>
        <strong>Price:</strong> ₹{product.price}
      </p>
      <div style={{justifyContent:"center", marginTop: "20px"}}>
      <QRCodeCanvas value={upiURL} size={200}/>
      </div>
    </div>
  );
}
