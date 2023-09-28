import { useEffect, useState } from "react";
import { InputWithLabel } from "../elements/InputWithLabel";
import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8000/api/tickets/'

const price = 12;
export function FormState() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [companions, setCompanions] = useState(0);
  const [companionsList, setCompanionsList] = useState(Array.from({ length: companions }, () => ""));  const [totalPrice, setTotalPrice] = useState(12);

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(BASE_URL, {
      titular: name,
      email: email,
      number: number,
      companions: companionsList
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(companionsList);

  };

  const handleCompanionNameChange = (index, value) => {
    const updatedCompanionsList = [...companionsList];
    updatedCompanionsList[index] = value;
    setCompanionsList(updatedCompanionsList);
  };

  useEffect(() => {
    setTotalPrice(companions * price + price);
  }, [companions]);
  return (
    <form
      method="POST"
      onSubmit={handleSubmit}
      className="flex flex-col gap-5  mx-auto w-full items-center py-8"
    >
      <InputWithLabel
        label="Nombre"
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
        placeHolder="Juan Carlos"
      />
      <InputWithLabel
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
        placeHolder="juan@gmail.com"
      />
      <InputWithLabel
        label="teléfono"
        type="text"
        name="tf-number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        required
        placeHolder="660 331 241"
      />

      <InputWithLabel
        label="Acompañantes"
        type="number"
        name="companions"
        required
        value={companions}
        onChange={(e) => {
          const companions = parseInt(e.target.value);
          if (companions < 0 || isNaN(companions)) return;
          setCompanions(companions);
        }}
      />
      {Array.from({ length: companions }).map((_, index) => (
        <InputWithLabel
          key={index}
          label={`Nombre del acompañante ${index + 1}`}
          type="text"
          placeHolder="Nombre"
          name={`companion-${index}`}
          required
          value={companionsList[index]}
          onChange={(e) => handleCompanionNameChange(index, e.target.value)}
        />
      ))}
      <InputWithLabel
      label="Total"
      value={`${1 + companions} x ${price} = ${totalPrice}€`}
      readonly
      className={`text-4xl text-right bg-transparent  px-0 border-0 font-bold`}
      ></InputWithLabel>
            


      <button
        className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554]
                    text-primary   hover:after:scale-[2.5] w-full sm:w-1/2`}
      >
        Enviar
      </button>
    </form>
  );
}
