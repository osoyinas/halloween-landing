import { useEffect, useState } from "react";
import { InputWithLabel } from "../elements/InputWithLabel";

const price = 12
export function FormState() {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [companions, setCompanions] = useState(0)
  const [totalPrice, setTotalPrice] = useState(12)

  const handleSubmit = (event) => {
    console.log(event);
  }

  useEffect(()=>{
    setTotalPrice(companions*price + price)
  },[companions])
  return (
    <form method="POST" className="flex flex-col gap-5  mx-auto w-full items-center py-8">

      <InputWithLabel
        label="Nombre"
        type="text"
        name="name"
        value={name}
        onChange={(e) => { setName(e.target.value) }}
        required
        placeHolder="Juan Carlos"
      />
      <InputWithLabel
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        required
        placeHolder="juan@gmail.com" />
      <InputWithLabel
        label="teléfono"
        type="text"
        name="tf-number"
        value={number}
        onChange={(e) => { setNumber(e.target.value) }}
        required
        placeHolder="660 331 241" />

      <InputWithLabel
        label="Acompañantes"
        type="number"

        name="companions"
        required
        value={companions}
        onChange={(e) => {
          const companions = parseInt(e.target.value);
          if (companions < 0 || isNaN(companions)) return
          setCompanions(companions);
        }} />
      <div className="text-white flex justify-between items-center w-full md:w-1/2 gap-4">
        <p className={`md:text-lg text-heading-3`}>Total </p>
        <p className={`md:text-lg text-heading-3`}>
          <span className="text-2xl">{totalPrice}€</span> </p>

      </div>

      <button onSubmit={handleSubmit} className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554]
                    text-primary   hover:after:scale-[2.5] w-full sm:w-1/2`}>
        Enviar
      </button>
    </form>)
}