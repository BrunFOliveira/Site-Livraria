<template>
  <footer class="bg-(--cor_base_verde) shadow-sm py-3">
    <div class="flex flex-col md:flex-row justify-between px-[10%] py-3 gap-6">
      <div class="flex items-end gap-3 flex-col md:items-start">
        <p class="text-white text-lg font-bold">IFbooks</p>
        <div class="flex justify-center gap-2">
          <img src="/instagram.svg" alt="Instagram" />
          <img src="/facebook.svg" alt="Facebook" />
          <img src="/twitter.svg" alt="Twitter" />
        </div>
      </div>
      <div class="flex items-start gap-3 flex-col">
        <div class="gap-2 flex flex-col">
          <p class="text-white text-lg font-bold">Contato</p>
          <p class="text-white flex gap-2 flex-col">
            <span class="flex gap-0.5"><img src="/Phone.svg" alt="Telefone" />+55 47 40045263 </span>
            <span class="flex gap-0.5"><img src="/Clock.svg" alt="Horário" />8h às 23h - Seg a Sex </span>
            <span class="flex gap-0.5"><img src="/Mail.svg" alt="Email" />contato@ifbooks.com.br </span>
          </p>
        </div>
        <div class="flex justify-center gap-2 my-2 flex-wrap">
          <img src="/mastercard.png" alt="MasterCard" class="w-12 p-0.5" />
          <img src="/visa.png" alt="Visa" class="w-12 p-0.5" />
          <img src="/paypal.jpg" alt="PayPal" class="w-12 p-0.5" />
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 py-2 text-center text-sm text-white border-t-2 border-white mt-3">
      &copy; Alguns direitos reservados. IFbooks 2025-2026.
    </div>
  </footer>
</template>