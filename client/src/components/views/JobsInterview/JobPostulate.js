import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useSelector } from "react-redux";

const JobPostulate = (props) => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [studies, setStudy] = useState("");
  const [experience, setExperience] = useState("");
  const [objetives, setObjetives] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastNaame] = useState("");
  const [email, setEmail] = useState("");

  const [emailSent, setEmailSent] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const companyEmail = props.location.aboutProps.contactMail;
    const body = {
      name,
      lastname,
      address,
      phone,
      studies,
      email,
      experience,
      objetives,
      companyEmail,
    };

    axios
      .post("http://localhost:5000/api/axiosJobs/sendCurriculum", body)
      .then((res) => {
        if (res.success !== false) {
          console.log("Email enviado hacia la casilla de correo");
          setEmailSent(true);
        } else {
          alert("EMAIL NO COINCIDE CON LA BASE DE DATOS");
        }
      });
  };

  let body;

  if (emailSent) {
    body = (
      <div className="mt-5">
        <h5 className="d-flex justify-content-center">
          Usted se ha postulado, la empresa se contactará con usted a la
          brevedad. Gracias por utilizar la consultora de empleos de |Cocinarte|
        </h5>
      </div>
    );
  } else {
    body = (
      <form className="mt-5" onSubmit={submitHandler}>
        <div className="container titlePostulate">
          <h3 className="text-white text-center">
            Complete el formulario para postularse como candidato
          </h3>
        </div>

        <div className="container formInputs d-flex flex-column align-items-center mt-4">
          <input
            className="mt-3 text-center w-50 form-control form-control-sm "
            name="name"
            placeholder="Nombre Completo"
            type="text"
            size="30"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <input
            className="text-center w-50 form-control form-control-sm"
            name="Lastname"
            placeholder="Apellido"
            type="text"
            size="30"
            required
            value={lastname}
            onChange={(e) => setLastNaame(e.target.value)}
          />
          <br></br>
          <input
            className="text-center w-50 form-control form-control-sm"
            name="address"
            placeholder="Direccion"
            type="text"
            size="30"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br></br>
          <input
            className="text-center w-50 form-control form-control-sm"
            name="email"
            placeholder="Email"
            type="email"
            pattern='/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i'
            size="30"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <input
            className="text-center w-50 form-control form-control-sm"
            name="phone"
            placeholder="Telefono de contacto"
            type="text"
            size="30"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br></br>
          <textarea
            className="text-center w-50 form-control form-control-sm"
            name="Studies"
            placeholder="Estudios..."
            type="text"
            size="30"
            required
            value={studies}
            onChange={(e) => setStudy(e.target.value)}
          />
          <br></br>
          <textarea
            className="text-center w-50 form-control form-control-sm"
            name="experience"
            placeholder="Experiencia laboral..."
            type="text"
            size="30"
            required
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
          <br></br>
          <textarea
            className="mb-3 text-center w-50 form-control form-control-sm"
            name="objetives"
            placeholder="Objetivos..."
            type="text"
            size="30"
            required
            value={objetives}
            onChange={(e) => setObjetives(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button className="mt-3 btn btn-info">Enviar mis datos</button>
        </div>
      </form>
    );
  }
  return body;
};

export default JobPostulate;
