const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
      
    } else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");
            lanzarChispas();

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);
            envoltura.classList.add("desactivar-sobre")
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta")
            }, 500);
        }

    } 
})

/* ---------------------------------------------------------
   Decoración: pequeñas chispas/corazones que brotan del
   sobre en el instante en que la carta empieza a abrirse.
   Esto es puramente visual y no afecta la lógica de arriba.
--------------------------------------------------------- */
function lanzarChispas() {
    const simbolos = ["✦", "❤", "✧", "💐"];
    const rect = envoltura.getBoundingClientRect();

    for (let i = 0; i < 10; i++) {
        const chispa = document.createElement("span");
        chispa.className = "chispa";
        chispa.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];

        const x = rect.left + rect.width / 2 + (Math.random() - 0.5) * rect.width * 0.8;
        const y = rect.top + rect.height * 0.35;

        chispa.style.left = `${x}px`;
        chispa.style.top = `${y}px`;
        chispa.style.animationDelay = `${Math.random() * 0.3}s`;

        document.body.appendChild(chispa);

        setTimeout(() => chispa.remove(), 1500);
    }
}
