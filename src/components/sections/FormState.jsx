import { useState } from "react";

export function FormState() {
  return (
    <form method="POST" class="flex flex-col gap-5  mx-auto w-full items-center">
      <label class="text-white flex justify-between items-center w-full sm:w-1/2">
        <p class={`md:text-lg text-heading-3`}>Nombre: </p>
        <input
          class="p-2 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden"
          type="text"
          name="username"
          placeholder="Carolina Durante"
          required
        />
      </label>
      <label class="text-white flex justify-between items-center w-full sm:w-1/2">

        <p class={`md:text-lg text-heading-3`}>Email:</p>
        <input
          class="p-2 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden"
          type="email"
          name="email"
          placeholder="carolinadurante@gmail.com"
          required
        />
      </label>
      <label class="text-white flex justify-between items-center w-full sm:w-1/2">

        <p class={`md:text-lg text-heading-3`}>teléfono:</p>
        <input
          class="p-2 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden"
          type="text"
          name="phone-number"
          placeholder="646 658 814"
          required
          minlength="6"
        />
      </label>
      <label class="text-white flex justify-between items-center w-full sm:w-1/2">
        <p class={`md:text-lg text-heading-3`}>Acompañantes:</p>
        <input
          class="p-2 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden"
          type="number"
          step="1"
          name="phone-number"
          required
          minlength="6"
          value="0"
        />
      </label>
      <label class="text-white flex justify-between items-center w-full sm:w-1/2">

        <p class={`md:text-lg text-heading-3`}>Precio total:</p>
        <p class={`md:text-lg text-heading-3`}><span class="text-3xl">12€</span></p>
      </label>
      <button class={`px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554]
                    text-primary   hover:after:scale-[2.5] w-full sm:w-1/2`}>
                      Enviar
      </button>
    </form>)
}