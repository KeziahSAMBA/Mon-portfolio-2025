"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import Link from "next/link";

export default function Header() {
  // Un ref, position, direction, pause pour chaque rubrique
  const refProjets = useRef<HTMLAnchorElement | null>(null);
  const posProjets = useRef(0);
  const dirProjets = useRef(1);
  const pauseProjets = useRef(false);

  const refFormations = useRef<HTMLAnchorElement | null>(null);
  const posFormations = useRef(10);
  const dirFormations = useRef(1);
  const pauseFormations = useRef(false);

  const refCompetences = useRef<HTMLAnchorElement | null>(null);
  const posCompetences = useRef(20);
  const dirCompetences = useRef(1);
  const pauseCompetences = useRef(false);

  const refExperiences = useRef<HTMLAnchorElement | null>(null);
  const posExperiences = useRef(30);
  const dirExperiences = useRef(1);
  const pauseExperiences = useRef(false);

  const refApropos = useRef<HTMLAnchorElement | null>(null);
  const posApropos = useRef(40);
  const dirApropos = useRef(1);
  const pauseApropos = useRef(false);

  const refContact = useRef<HTMLAnchorElement | null>(null);
  const posContact = useRef(50);
  const dirContact = useRef(1);
  const pauseContact = useRef(false);

  useEffect(() => {
    let lastTime = performance.now();
    function animateRubriques(now: number) {
      const dt = now - lastTime;
      lastTime = now;
      const speed = 0.01; // Vitesse divisée par 2 (au lieu de 0.08)

      // Projets
      if (refProjets.current && !pauseProjets.current) {
        posProjets.current += dirProjets.current * speed * dt;
        if (posProjets.current > 40) dirProjets.current = -1;
        if (posProjets.current < 0) dirProjets.current = 1;
        refProjets.current.style.transform = `translateY(${posProjets.current}px)`;
      }
      // Formations
      if (refFormations.current && !pauseFormations.current) {
        posFormations.current += dirFormations.current * speed * dt;
        if (posFormations.current > 40) dirFormations.current = -1;
        if (posFormations.current < 0) dirFormations.current = 1;
        refFormations.current.style.transform = `translateY(${posFormations.current}px)`;
      }
      // Compétences
      if (refCompetences.current && !pauseCompetences.current) {
        posCompetences.current += dirCompetences.current * speed * dt;
        if (posCompetences.current > 40) dirCompetences.current = -1;
        if (posCompetences.current < 0) dirCompetences.current = 1;
        refCompetences.current.style.transform = `translateY(${posCompetences.current}px)`;
      }
      // Expériences
      if (refExperiences.current && !pauseExperiences.current) {
        posExperiences.current += dirExperiences.current * speed * dt;
        if (posExperiences.current > 40) dirExperiences.current = -1;
        if (posExperiences.current < 0) dirExperiences.current = 1;
        refExperiences.current.style.transform = `translateY(${posExperiences.current}px)`;
      }
      // A propos
      if (refApropos.current && !pauseApropos.current) {
        posApropos.current += dirApropos.current * speed * dt;
        if (posApropos.current > 40) dirApropos.current = -1;
        if (posApropos.current < 0) dirApropos.current = 1;
        refApropos.current.style.transform = `translateY(${posApropos.current}px)`;
      }
      // Contact
      if (refContact.current && !pauseContact.current) {
        posContact.current += dirContact.current * speed * dt;
        if (posContact.current > 40) dirContact.current = -1;
        if (posContact.current < 0) dirContact.current = 1;
        refContact.current.style.transform = `translateY(${posContact.current}px)`;
      }

      requestAnimationFrame(animateRubriques);
    }
    requestAnimationFrame(animateRubriques);
    return () => {
      if (refProjets.current) refProjets.current.style.transform = "";
      if (refFormations.current) refFormations.current.style.transform = "";
      if (refCompetences.current) refCompetences.current.style.transform = "";
      if (refExperiences.current) refExperiences.current.style.transform = "";
      if (refApropos.current) refApropos.current.style.transform = "";
      if (refContact.current) refContact.current.style.transform = "";
    };
  }, []);

  return (
    <div>
      <div className="h-[20px]"></div>
      <header>
        <div className="grid [grid-template-columns:min-content_2fr_repeat(6,_1fr)_min-content] gap-[16px]">
          <div className="w-[px] h-20"></div>
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

                {/* ligne du haut */}
                <span
                  className="absolute top-0 left-0 h-[2px] w-[92%]
               bg-gradient-to-r from-red-500 to-cyan-400
               scale-x-0 group-hover:scale-x-100
               origin-right
               transition-transform duration-400"
                ></span>

                {/* ligne du bas */}
                <span
                  className="absolute bottom-0 left-0 h-[2px] w-[102%]
               bg-gradient-to-r from-red-500 to-cyan-400
               scale-x-0 group-hover:scale-x-100
               origin-left
               transition-transform duration-400"
                ></span>
              </div>
            </span>
          </div>
          <Link
            href="/"
            ref={refProjets}
            className="group relative h-20 w-full flex items-center justify-center cursor-pointer"
            onMouseEnter={(e) => {
              pauseProjets.current = true;
              e.currentTarget.style.outline = "4px solid #fff";
              e.currentTarget.style.outlineOffset = "1px";
            }}
            onMouseLeave={(e) => {
              pauseProjets.current = false;
              e.currentTarget.style.outline = "0px solid transparent";
              e.currentTarget.style.outlineOffset = "0px";
            }}
            style={{
              outline: "0px solid transparent",
              outlineOffset: "0px",
              transition: "outline 0.3s, outline-offset 0.3s",
            }}
          >
            <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:rotate-y-180">
              <div
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center overflow-hidden [backface-visibility:hidden]"
                style={{ backgroundImage: "url('/code.jpg')" }}
              >
                <div className="absolute inset-0 bg-black/40 z-0" />
                <span className="relative z-10 text-white text-lg font-medium">
                  Projets
                </span>
              </div>
              <div
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]"
                style={{ backgroundImage: "url('/code.jpg')" }}
              >
                <div className="absolute inset-0 bg-white/40 z-0" />
                <span className="relative z-10 text-black text-lg font-medium">
                  Projets
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/"
            ref={refCompetences}
            className="group relative h-20 w-full flex items-center justify-center cursor-pointer"
            onMouseEnter={(e) => {
              pauseCompetences.current = true;
              e.currentTarget.style.outline = "4px solid #fff";
              e.currentTarget.style.outlineOffset = "1px";
            }}
            onMouseLeave={(e) => {
              pauseCompetences.current = false;
              e.currentTarget.style.outline = "0px solid transparent";
              e.currentTarget.style.outlineOffset = "0px";
            }}
            style={{
              outline: "0px solid transparent",
              outlineOffset: "0px",
              transition: "outline 0.3s, outline-offset 0.3s",
            }}
          >
            <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:rotate-y-180">
              <div
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center overflow-hidden [backface-visibility:hidden]"
                style={{ backgroundImage: "url('/competence.jpg')" }}
              >
                <div className="absolute inset-0 bg-black/40 z-0" />
                <span className="relative z-10 text-white text-lg font-medium">
                  Compétences
                </span>
              </div>
              <div
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]"
                style={{ backgroundImage: "url('/competence.jpg')" }}
              >
                <div className="absolute inset-0 bg-white/40 z-0" />
                <span className="relative z-10 text-black text-lg font-medium">
                  Compétences
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/"
            ref={refExperiences}
            className="group relative h-20 w-full flex items-center justify-center cursor-pointer"
            onMouseEnter={(e) => {
              pauseExperiences.current = true;
              e.currentTarget.style.outline = "4px solid #fff";
              e.currentTarget.style.outlineOffset = "1px";
            }}
            onMouseLeave={(e) => {
              pauseExperiences.current = false;
              e.currentTarget.style.outline = "0px solid transparent";
              e.currentTarget.style.outlineOffset = "0px";
            }}
            style={{
              outline: "0px solid transparent",
              outlineOffset: "0px",
              transition: "outline 0.3s, outline-offset 0.3s",
            }}
          >
            <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:rotate-y-180">
              <div
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center overflow-hidden [backface-visibility:hidden]"
                style={{ backgroundImage: "url('/XP.jpg')" }}
              >
                <div className="absolute inset-0 bg-black/40 z-0" />
                <span className="relative z-10 text-white text-lg font-medium">
                  Expériences
                </span>
              </div>
              <div
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]"
                style={{ backgroundImage: "url('/XP.jpg')" }}
              >
                <div className="absolute inset-0 bg-white/40 z-0" />
                <span className="relative z-10 text-black text-lg font-medium">
                  Expériences
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/"
            ref={refFormations}
            className="group relative h-20 w-full flex items-center justify-center cursor-pointer"
            onMouseEnter={(e) => {
              pauseFormations.current = true;
              e.currentTarget.style.outline = "4px solid #fff";
              e.currentTarget.style.outlineOffset = "1px";
            }}
            onMouseLeave={(e) => {
              pauseFormations.current = false;
              e.currentTarget.style.outline = "0px solid transparent";
              e.currentTarget.style.outlineOffset = "0px";
            }}
            style={{
              outline: "0px solid transparent",
              outlineOffset: "0px",
              transition: "outline 0.3s, outline-offset 0.3s",
            }}
          >
            <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:rotate-y-180">
              <div
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center overflow-hidden [backface-visibility:hidden]"
                style={{ backgroundImage: "url('/formation.jpg')" }}
              >
                <div className="absolute inset-0 bg-black/40 z-0" />
                <span className="relative z-10 text-white text-lg font-medium">
                  Formations
                </span>
              </div>
              <div
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]"
                style={{ backgroundImage: "url('/formation.jpg')" }}
              >
                <div className="absolute inset-0 bg-white/40 z-0" />
                <span className="relative z-10 text-black text-lg font-medium">
                  Formations
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/"
            ref={refApropos}
            className="group relative h-20 w-full flex items-center justify-center cursor-pointer"
            onMouseEnter={(e) => {
              pauseApropos.current = true;
              e.currentTarget.style.outline = "4px solid #fff";
              e.currentTarget.style.outlineOffset = "1px";
            }}
            onMouseLeave={(e) => {
              pauseApropos.current = false;
              e.currentTarget.style.outline = "0px solid transparent";
              e.currentTarget.style.outlineOffset = "0px";
            }}
            style={{
              outline: "0px solid transparent",
              outlineOffset: "0px",
              transition: "outline 0.3s, outline-offset 0.3s",
            }}
          >
            <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:rotate-y-180">
              <div
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center overflow-hidden [backface-visibility:hidden]"
                style={{ backgroundImage: "url('/chemin.jpg')" }}
              >
                <div className="absolute inset-0 bg-black/40 z-0" />
                <span className="relative z-10 text-white text-lg font-medium">
                  A propos
                </span>
              </div>
              <div
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]"
                style={{ backgroundImage: "url('/chemin.jpg')" }}
              >
                <div className="absolute inset-0 bg-white/40 z-0" />
                <span className="relative z-10 text-black text-lg font-medium">
                  A propos
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/"
            ref={refContact}
            className="group relative h-20 w-full flex items-center justify-center cursor-pointer"
            onMouseEnter={(e) => {
              pauseContact.current = true;
              e.currentTarget.style.outline = "4px solid #fff";
              e.currentTarget.style.outlineOffset = "1px";
            }}
            onMouseLeave={(e) => {
              pauseContact.current = false;
              e.currentTarget.style.outline = "0px solid transparent";
              e.currentTarget.style.outlineOffset = "0px";
            }}
            style={{
              outline: "0px solid transparent",
              outlineOffset: "0px",
              transition: "outline 0.3s, outline-offset 0.3s",
            }}
          >
            <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:rotate-y-180">
              <div
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center overflow-hidden [backface-visibility:hidden]"
                style={{ backgroundImage: "url('/reseaux.jpg')" }}
              >
                <div className="absolute inset-0 bg-black/40 z-0" />
                <span className="relative z-10 text-white text-lg font-medium">
                  Contact
                </span>
              </div>
              <div
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]"
                style={{ backgroundImage: "url('/reseaux.jpg')" }}
              >
                <div className="absolute inset-0 bg-white/40 z-0" />
                <span className="relative z-10 text-black text-lg font-medium">
                  Contact
                </span>
              </div>
            </div>
          </Link>
        </div>
      </header>
      <div className="h-[32px]"></div>
    </div>
  );
}
