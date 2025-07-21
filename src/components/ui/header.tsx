"use client"; // Directive Next.js : ce composant est rendu côté client

import { useEffect, useRef } from "react";
import Link from "next/link";

// Définition des identifiants possibles pour les rubriques
type RubriqueId =
  | "projets"
  | "formations"
  | "competences"
  | "experiences"
  | "apropos"
  | "contact";

// Tableau contenant les données de chaque rubrique du header
const rubriques: {
  id: RubriqueId;
  label: string;
  img: string;
  initialPos: number;
}[] = [
  { id: "projets", label: "Projets", img: "/code.jpg", initialPos: 0 },
  {
    id: "formations",
    label: "Formations",
    img: "/formation.jpg",
    initialPos: 10,
  },
  {
    id: "competences",
    label: "Compétences",
    img: "/competence.jpg",
    initialPos: 20,
  },
  { id: "experiences", label: "Expériences", img: "/XP.jpg", initialPos: 30 },
  { id: "apropos", label: "A propos", img: "/chemin.jpg", initialPos: 40 },
  { id: "contact", label: "Contact", img: "/reseaux.jpg", initialPos: 50 },
];

export default function Header() {
  // Réfs des éléments DOM des liens, un par rubrique
  const refs = useRef<Record<RubriqueId, HTMLAnchorElement | null>>({
    projets: null,
    formations: null,
    competences: null,
    experiences: null,
    apropos: null,
    contact: null,
  });

  // Positions verticales actuelles de chaque lien
  const pos = useRef<Record<RubriqueId, number>>(
    Object.fromEntries(
      rubriques.map(({ id, initialPos }) => [id, initialPos])
    ) as Record<RubriqueId, number>
  );

  // Direction du mouvement (1 = vers le bas, -1 = vers le haut)
  const dir = useRef<Record<RubriqueId, 1 | -1>>(
    Object.fromEntries(rubriques.map(({ id }) => [id, 1])) as Record<
      RubriqueId,
      1 | -1
    >
  );

  // Pause pour chaque lien (quand la souris est dessus)
  const pause = useRef<Record<RubriqueId, boolean>>(
    Object.fromEntries(rubriques.map(({ id }) => [id, false])) as Record<
      RubriqueId,
      boolean
    >
  );

  useEffect(() => {
    let lastTime = performance.now(); // timestamp initial

    // Fonction de boucle d'animation
    function animateRubriques(now: number) {
      const dt = now - lastTime; // calcul du temps écoulé
      lastTime = now;
      const speed = 0.01; // vitesse de déplacement

      rubriques.forEach(({ id }) => {
        // Si l’élément existe et qu’il n’est pas en pause
        if (refs.current[id] && !pause.current[id]) {
          // mise à jour de la position
          pos.current[id] += dir.current[id] * speed * dt;

          // rebond en haut ou bas
          if (pos.current[id] > 40) dir.current[id] = -1;
          if (pos.current[id] < 0) dir.current[id] = 1;

          // application du transform sur l’élément
          refs.current[
            id
          ]!.style.transform = `translateY(${pos.current[id]}px)`;
        }
      });

      // boucle continue via RAF
      requestAnimationFrame(animateRubriques);
    }

    // Lancement de l’animation une première fois
    requestAnimationFrame(animateRubriques);

    // Nettoyage en cas de démontage
    return () => {
      rubriques.forEach(({ id }) => {
        if (refs.current[id]) refs.current[id]!.style.transform = "";
      });
    };
  }, []);

  return (
    <div>
      <div className="h-[20px]"></div>
      <header>
        {/* Grid principale avec colonnes customisées */}
        <div className="grid [grid-template-columns:min-content_2fr_repeat(6,_1fr)_min-content] gap-[16px]">
          <div className="w-[px] h-20"></div>

          {/* Bloc titre "Bienvenue sur le portfolio de Keziah SAMBA" */}
          <div className="col-span-1 relative h-30 flex items-center justify-center font-bold text-[2em] bg-cover bg-center">
            <div className="invisible"></div>
            <span className="relative z-10 flex flex-col gap-1 text-white">
              <div className="relative group inline-block">
                <div>
                  <p
                    className="font-montserrat text-white text-[16px] font-light"
                    style={{ fontWeight: 300 }}
                  >
                    Bienvenu sur le portfolio de
                  </p>
                  <p
                    className="font-montserrat text-white text-[30px] font-semibold"
                    style={{ fontWeight: 600 }}
                  >
                    Keziah SAMBA
                  </p>
                </div>
                {/* Effets de soulignement animé au hover */}
                <span className="absolute top-0 left-0 h-[2px] w-[92%] bg-gradient-to-r from-red-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-400" />
                <span className="absolute bottom-0 left-0 h-[2px] w-[102%] bg-gradient-to-r from-red-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
              </div>
            </span>
          </div>

          {/* Mapping des liens vers les rubriques avec effet flip + animation */}
          {rubriques.map(({ id, label, img }) => {
            // Référence DOM pour chaque lien
            const setRef: React.RefCallback<HTMLAnchorElement> = (el) => {
              refs.current[id] = el;
            };

            return (
              <Link
                key={id}
                href="/" // Tu peux mettre un href dynamique ici plus tard
                ref={setRef}
                className="group relative h-20 w-full flex items-center justify-center cursor-pointer"
                onMouseEnter={(e) => {
                  pause.current[id] = true; // Pause l’animation
                  // Style visuel survol
                  e.currentTarget.style.outline = "4px solid #fff";
                  e.currentTarget.style.outlineOffset = "1px";
                }}
                onMouseLeave={(e) => {
                  pause.current[id] = false; // Reprend l’animation
                  // Reset du style
                  e.currentTarget.style.outline = "0px solid transparent";
                  e.currentTarget.style.outlineOffset = "0px";
                }}
                style={{
                  outline: "0px solid transparent",
                  outlineOffset: "0px",
                  transition: "outline 0.3s, outline-offset 0.3s",
                }}
              >
                {/* Conteneur avec effet flip 3D */}
                <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:rotate-y-180">
                  {/* Face avant */}
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-cover bg-center overflow-hidden [backface-visibility:hidden]"
                    style={{ backgroundImage: `url('${img}')` }}
                  >
                    <div className="absolute inset-0 bg-black/40 z-0" />
                    <span className="relative z-10 text-white text-lg font-medium">
                      {label}
                    </span>
                  </div>

                  {/* Face arrière (effet au hover) */}
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-cover bg-center overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]"
                    style={{ backgroundImage: `url('${img}')` }}
                  >
                    <div className="absolute inset-0 bg-white/40 z-0" />
                    <span className="relative z-10 text-black text-lg font-medium">
                      {label}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </header>
      <div className="h-[32px]"></div> {/* Espacement bas */}
    </div>
  );
}
