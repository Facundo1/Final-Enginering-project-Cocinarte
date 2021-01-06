import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function PricingHome() {
  const [product] = React.useState({
    name: "|Cocinarte Premium|",
    price: 14,
    description: "LLeva la pasion por la cocina, a otro nivel.",
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "http://localhost:5000/api/checkout/cardPay",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("El pago fue realizado exitosamente", { type: "success" });
    } else {
      toast("Ocurrio un error durante la transaccion", { type: "error" });
    }
  }

  return (
    <div className="">
      <div className="d-flex justify-content-center productImg">
        <h1>{product.name}</h1>
      </div>
      <div className="d-flex justify-content-center">
        <h3>Oferta exclusiva: ${product.price}</h3>
      </div>

      <div className="d-flex justify-content-center container containerImg"></div>
      <div className="d-flex justify-content-center">
      <StripeCheckout
        className="mt-4 w-25"
        label="Tarjeta"
        stripeKey="pk_test_51I3ODJGL81eAF97DdCWXll6O0t5gJWkgaVCVhNStDn7B2qGRSVuYDsE4eJ45rHKGQCoFMxLHClXYHG3aPpGQfkRr00selbXucj"
        token={handleToken}
        amount={product.price * 100}
        name="|Cocinarte Premium|"
        billingAddress
      />
      </div>

      <div className="d-flex justify-content-center">
      <StripeCheckout
        className="mt-4 w-25"
        label="Mercado pago"
        stripeKey="pk_test_51I3ODJGL81eAF97DdCWXll6O0t5gJWkgaVCVhNStDn7B2qGRSVuYDsE4eJ45rHKGQCoFMxLHClXYHG3aPpGQfkRr00selbXucj"
        token={handleToken}
        amount={product.price * 100}
        name="|Cocinarte Premium|"
        billingAddress
      />
      </div>
    </div>
  );
}

export default PricingHome;
