const boton = document.querySelector("button");
const musica = document.querySelector("#musica");

const fotos = [
    "fotos/foto1.jpeg",
    "fotos/foto2.jpeg",
    "fotos/foto3.jpeg",
    "fotos/foto4.jpeg",
    "fotos/foto5.jpeg",
    "fotos/foto6.jpeg",
    "fotos/foto7.jpeg",
    "fotos/foto8.jpeg",
    "fotos/foto9.jpeg",
    "fotos/foto10.jpeg",
    "fotos/foto11.jpeg",
    "fotos/foto12.jpeg",
    "fotos/foto13.jpeg",
    "fotos/foto14.jpeg"
];

const textos = [
    "De las primeras fotos que nos tomamos, todavía recuerdo aquel día que nos toco hacer ese proyecto de música. ❤️",

    "Una fotito del amor de mi vida, de la mujer más hermosa, preciosa, linda y guapa que conozco. 😍❤️",

    "Un bonito recuerdo de todas las veces que hemos ido a comer pizza, ese día fuimos a pizza caribe jeje. 🍕❤️",

    "Sin duda alguna la primera vez que comimos lasaña no podía faltar JAJAJA. 🍝",

    "Nuestro primer Año Nuevo juntos. Desde el 31 hasta el primero del 2026. ❤️",

    "Recuerdito de la cena de graduación. ❤️",

    "Fotito tomada después de graduarnos. ❤️",

    "Una foto del 31 de diciembre, justo antes de empezar juntos un nuevo año.",

    "Tres días después de que lo nuestro se hiciera oficial. ❤️",

    "Este día hicimos algo por tu cumple un día antes porque al día siguiente teniamos que ir a practica, asi que por eso lo hicimos antes jaja.",

    "Sin duda alguna, que mujer más hermosa tengo a mi lado, re contra bella mi amor. Una obra de arte 😍❤️",

    "Bueno, no podemos olvidar el día que toco el desayuno ejecutivo en aquella subarea de secre que no recuerdo el nombre XD",

    "He aquí otra fotito que nos tomamos en la cena de graduación. ❤️",

    "Otra vez vestidos formales por lo del desayuno ejecutivo. ❤️"
];

let indice = 0;


/* =========================
   INICIO
========================= */

boton.addEventListener("click", () => {

    musica.play();

    boton.style.display = "none";

    const recuerdo = document.createElement("div");
    recuerdo.classList.add("recuerdo");

    document.querySelector("main").appendChild(recuerdo);

    mostrarFoto(recuerdo);
});


/* =========================
   MOSTRAR FOTOS
========================= */

function mostrarFoto(recuerdo) {

    recuerdo.innerHTML = `
        <img src="${fotos[indice]}" alt="Nuestro recuerdo">
        <p>${textos[indice]}</p>
        <button id="siguiente">Siguiente ❤️</button>
    `;

    const siguiente = document.querySelector("#siguiente");

    siguiente.addEventListener("click", () => {

        indice++;

        if (indice < fotos.length) {

            recuerdo.classList.remove("recuerdo");

            void recuerdo.offsetWidth;

            recuerdo.classList.add("recuerdo");

            mostrarFoto(recuerdo);

        } else {

            mostrarTransicion(recuerdo);
        }
    });
}


/* =========================
   TRANSICIÓN
========================= */

function mostrarTransicion(recuerdo) {

    recuerdo.innerHTML = `
        <div class="transicion">
            <h2>Y ahora quiero decirte algo... ❤️</h2>

            <p>
                Porque después de recordar todos estos momentos,
                todavía hay algo que quiero decirte.
            </p>

            <button id="continuar">Continuar ❤️</button>
        </div>
    `;

    const continuar = document.querySelector("#continuar");

    continuar.addEventListener("click", () => {
        mostrarIntroduccionRazones(recuerdo);
    });
}


/* =========================
   INTRODUCCIÓN A LAS RAZONES
========================= */

function mostrarIntroduccionRazones(recuerdo) {

    recuerdo.innerHTML = `
        <div class="transicion">
            <h2>14 razones... ❤️</h2>

            <p>
                Aunque podría darte muchísimas más,
                quiero empezar por algunas de las cosas
                que más amo de ti.
            </p>

            <button id="razones">Verlas ❤️</button>
        </div>
    `;

    const razones = document.querySelector("#razones");

    razones.addEventListener("click", () => {
        mostrarRazones(recuerdo);
    });
}


/* =========================
   RAZONES
========================= */

function mostrarRazones(recuerdo) {

    const razonesAmor = [
        "Porque contigo puedo ser yo mismo. ❤️",

        "Porque siempre logras sacarme una sonrisa. ❤️",

        "Porque haces especiales hasta los días más normales. ❤️",

        "Porque me encanta la forma en que me miras. ❤️",

        "Porque tu sonrisa es de mis cosas favoritas. ❤️",

        "Porque contigo he vivido momentos que nunca voy a olvidar. ❤️",

        "Porque me haces sentir querido y acompañado. ❤️",

        "Porque admiro la persona que eres. ❤️",

        "Porque me encanta compartir mis días contigo. ❤️",

        "Porque incluso nuestras tonterías terminan siendo recuerdos bonitos. ❤️",

        "Porque contigo aprendí que el amor también está en los pequeños detalles. ❤️",

        "Porque quiero seguir creando recuerdos a tu lado. ❤️",

        "Porque eres una persona demasiado especial para mí. ❤️",

        "Y porque, simplemente, te amo. ❤️"
    ];

    let razonActual = 0;

    mostrarRazon();

    function mostrarRazon() {

        recuerdo.innerHTML = `
            <div class="razones">

                <h2>14 razones por las que te amo ❤️</h2>

                <div id="razonTexto">
                    ${razonesAmor[razonActual]}
                </div>

                <button id="siguienteRazon">
                    ${razonActual === razonesAmor.length - 1
                        ? "Continuar 💌"
                        : "Siguiente ❤️"}
                </button>

            </div>
        `;

        const siguienteRazon =
            document.querySelector("#siguienteRazon");

        siguienteRazon.addEventListener("click", () => {

            razonActual++;

            if (razonActual < razonesAmor.length) {

                mostrarRazon();

            } else {

                mostrarAntesDeLaCarta(recuerdo);
            }
        });
    }
}


/* =========================
   ANTES DE LA CARTA
========================= */

function mostrarAntesDeLaCarta(recuerdo) {

    recuerdo.innerHTML = `
        <div class="transicion">

            <h2>Y podría seguir... ❤️</h2>

            <p>
                Pero creo que necesitaríamos una página
                muchísimo más larga para decir todo.
            </p>

            <button id="carta">
                Ahora sí... 💌
            </button>

        </div>
    `;

    const carta = document.querySelector("#carta");

    carta.addEventListener("click", () => {

    recuerdo.innerHTML = `
        <div class="carta">

            <h2>Para el amor de mi vida ❤️</h2>

            <p>
                Mi amor,
            </p>

            <p>
                Sé que esto es algo que siempre te digo, pero
                de igual forma quiero volver a decirtelo
                en este día tan especial.
            </p>

            <p>
                Gracias por estar conmigo, por cada momento,
                cada risa, cada abrazo y cada recuerdo que
                hemos ido construyendo juntos. Gracias por todo
                lo que has hecho por mi, mi amor. De verdad eres
                la mejor mi niña. 🥺❤️
            </p>

            <p>
                Cuando miro todo lo que hemos vivido,
                me doy cuenta de que no cambiaría ninguno
                de esos momentos por nada. Cada momento 
                vivido junto a ti ha sido de lo mejor que 
                me pudo haber pasado en la vida. ❤️
            </p>

            <button id="continuarCarta">
                Seguir leyendo ❤️
            </button>

        </div>
    `;

    const continuarCarta =
        document.querySelector("#continuarCarta");

    continuarCarta.addEventListener("click", () => {

        recuerdo.innerHTML = `
            <div class="carta">

                <h2>Y todavía queda muchísimo por vivir... ❤️</h2>

                <p>
                    Quiero seguir compartiendo contigo días
                    buenos, días malos, momentos tranquilos,
                    momentos locos y todas esas pequeñas cosas
                    que terminan convirtiéndose en recuerdos.
                </p>

                <p>
                    Sé que nos espera un hermoso futuro juntos,
                    quién sabe qué recuerdos nuevos crearemos
                    mas lo que importa es que todos serán a tu lado.
                    Lo importante es que todo esto lo vivire contigo
                    y eso es lo único que quiero. ❤️
                </p>

                <p>
                    Gracias por ser tú.
                    Gracias por llegar a mi vida.
                    Y gracias por dejarme formar parte de la tuya.
                </p>

                <button id="finalCarta">
                    Una última cosa... ❤️
                </button>

            </div>
        `;

        const finalCarta =
            document.querySelector("#finalCarta");

        finalCarta.addEventListener("click", () => {

            // Aquí haremos el cierre definitivo.
            mostrarFinal(recuerdo);

        });

    });

});
}
function mostrarFinal(recuerdo) {

    recuerdo.innerHTML = `
        <div class="final">

            <h2>Y esto apenas comienza... ❤️</h2>

            <p>
                Gracias por cada momento,
                cada risa y cada recuerdo.
            </p>

            <p>
                Este es solo uno de los tantos aniversarios que
                viviremos, y no solo eso.
                Dentro de no mucho dejaran de ser aniversarios
                de novios y pasaran a ser aniversarios de esposos. 😍
            </p>

            <p>
                Feliz aniversario, mi amor.
                Te amo con todo mi ser. ❤️
            </p>

            <div class="corazones">
                ❤️ ❤️ ❤️
            </div>

        </div>
    `;
}