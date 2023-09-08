import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Row,Form } from "react-bootstrap";
import Field from "../form/field";
import FieldRequied from "../form/field_required";
// import FieldDropDown from "../form/field_drop_down";
import NextButton from "../utils/button_next"

export default function PersonalInfo(props) {
  const date = new Date();
  const [firstName, setFirstName] = useState("");
  const [middleInitial, setMiddleInitial] = useState("");
  const [lastName, setLastName] = useState("");
  const [stAddress, setStAddress] = useState("");
  const [aptNumber, setAptNumber] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  let id = "";

  let query1 =
    "mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id: 4766802308, item_name:$myItemName, column_values:$columnVals) { id } }";

  let newItem = {
    myItemName: `${date.toJSON().slice(0, 10)}`,
    columnVals: JSON.stringify({
      text: firstName,
      text5: middleInitial,
      text9: lastName,
      text8: stAddress,
      text7: aptNumber,
      text54: city,
      zip: zipCode,
      phone: { phone: `+1${phone}`, countryShortName: "US" },
      email: {
        email: email,
        text: email,
      },
    }),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://api.monday.com/v2", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          process.env.REACT_APP_MONDAY_API_KEY,
      },
      body: JSON.stringify({
        query: query1,
        variables: JSON.stringify(newItem),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(JSON.stringify(res, null, 2));
        id = res.data.create_item;
        console.log(id);
        localStorage.setItem("id", id.id);
      });

    navigate("/citizenship");
  };

  const autoFormatPhoneNumber = (phoneNumberString) => {
    try {
      let cleaned = ("" + phoneNumberString).replace(/\D/g, "");
      let match = cleaned.match(/^(1|)?(\d{0,3})?(\d{0,3})?(\d{0,4})?$/);
      let intlCode = match[1] ? "+1 " : "";
      return [
        intlCode,
        match[2] ? "(" : "",
        match[2],
        match[3] ? ") " : "",
        match[3],
        match[4] ? "-" : "",
        match[4],
      ].join("");
    } catch (err) {
      return "";
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row>
          <FieldRequied
            md={{ span: 4, offset: 1 }}
            label="Frist Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Field
            md="2"
            label="M.I."
            type="text"
            value={middleInitial}
            maxLength="1"
            onChange={(e) => setMiddleInitial(e.target.value)}
          />
          <FieldRequied
            md="4"
            label="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Row>
        <Row>
          <FieldRequied
            md={{ span: 8, offset: 1 }}
            label="Street Address"
            type="text"
            value={stAddress}
            onChange={(e) => setStAddress(e.target.value)}
          />
          <Field
            md="2"
            label="APT/Unit"
            type="text"
            value={aptNumber}
            onChange={(e) => setAptNumber(e.target.value)}
          />
        </Row>
        <Row>
          <FieldRequied
            md={{ span: 4, offset: 1 }}
            label="City"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <FieldRequied
            md="4"
            label="Zip Code"
            type="text"
            pattern="[0-9]*"
            value={zipCode}
            onChange={(e) =>
              setZipCode((v) => (e.target.validity.valid ? e.target.value : v))
            }
          />
        </Row>
        <Row>
          <FieldRequied
            md={{ span: 4, offset: 2 }}
            label="Phone Number"
            type="tel"
            value={autoFormatPhoneNumber(phone)}
            onChange={(e) => setPhone(e.target.value)}
          />
          <FieldRequied
            md="4"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Row>

        <Row>
          <NextButton />
        </Row>
      </Form>
    </>
  );
}
