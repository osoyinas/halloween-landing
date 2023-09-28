import { useEffect, useState } from "react";
import { InputWithLabel } from "../elements/InputWithLabel";
import axios from "axios";
import { BASE_URL } from "../shared/constants";
import Container from "../shared/Container.astro";
import Paragraph from "../shared/Paragraph.astro";

const price = 12;
export function FormState() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [companions, setCompanions] = useState(0);
  const [companionsList, setCompanionsList] = useState(
    Array.from({ length: companions }, () => "")
  );
  const [totalPrice, setTotalPrice] = useState(12);
  const [send, setSend] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(BASE_URL, {
        titular: name,
        email: email,
        number: number,
        companions: companionsList,
      })
      .then(function (response) {
        setSend(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCompanionNameChange = (index, value) => {
    const updatedCompanionsList = [...companionsList];
    updatedCompanionsList[index] = value;
    setCompanionsList(updatedCompanionsList);
  };

  useEffect(() => {
    setTotalPrice(companions * price + price);
  }, [companions]);
  return !send ? (
    <>
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl">
          Datos de contacto
        </h1>
      </div>
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
        <p className="md:text-lg text-heading-3 text-center w-full sm:w-1/2 mx-auto">
          Esta información la utilizaremos para contactar contigo y comprobar tu
          identidad el día del evento. Al completar el formulario te llegará un
          correo con la entrada. Es importante poner correctamente los nombres
          de tus acompañantes. Se puede comprar las entradas por separado.
        </p>
      </form>
    </>
  ) : (
    <>
      <h1 className="text-heading-1 font-semibold text-2xl text-center sm:text-3xl md:text-4xl">
        ¡Felicidades!
      </h1>
      <p className="md:text-lg text-heading-3 text-center w-full sm:w-1/2 mx-auto my-8">
        La reserva ha sido procesada correctamente. En su buzón de correo
        electrónico ({email}) debe haber recibido un correo con la entrada. Ante
        cualquier duda o sugerencia contacte a +34 646 65 88 14.
      </p>
    </>
  );
}
