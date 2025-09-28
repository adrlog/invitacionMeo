import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import familia from "./assets/meo.png";
import "./InvitacionFamiliar.css";

export default function InvitacionFormal({ isActive }) {
  const mensajeRefs = useRef([]);
  const imagenRef = useRef(null);

  const mensajes = [
    "Con todo nuestro amor,",
    "María de los Ángeles Hernández Torres y Benjamín Balam",
    "te invitan a celebrar el primer año y bautizo de",
    "nuestro amado Ethan Romeo 💖",
  ];

  // Limpiar array de refs
  mensajeRefs.current = [];

  // Efecto para animaciones basado en isActive
  useEffect(() => {
    if (isActive) {
      // Mostrar imagen
      if (imagenRef.current) imagenRef.current.classList.add("visible");

      // Mostrar mensajes con delay
      mensajeRefs.current.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add("visible");
        }, i * 500);
      });
    } else {
      // Resetear animaciones al desactivar
      if (imagenRef.current) imagenRef.current.classList.remove("visible");
      mensajeRefs.current.forEach((el) => el.classList.remove("visible"));
    }
  }, [isActive]);

  return (
    <Box
      sx={{
        width: "90%",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #e0f7fa, #fff0f5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        padding: 2,
      }}
    >
      {/* Globos dispersos */}
      {[...Array(10)].map((_, i) => (
        <Box
          key={i}
          className={`globo globo-${i}`}
          sx={{
            position: "absolute",
            width: `${30 + Math.random() * 50}px`,
            height: `${40 + Math.random() * 60}px`,
            borderRadius: "50%",
            background: `hsl(${Math.random() * 360}, 70%, 80%)`,
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 90}%`,
            zIndex: 1,
            opacity: 0.6,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Contenedor principal */}
      <Box
        sx={{
          width: { xs: "95%", sm: "450px" },
          position: "relative",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Imagen familiar grande */}
        <Box
          ref={imagenRef}
          className="imagen-familiar"
          sx={{
            width: "100%",
            height: { xs: "200px", sm: "280px" },
            borderRadius: "25px",
            overflow: "hidden",
            mb: 4,
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            opacity: 0,
            transform: "scale(0.95)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <img
            src={familia}
            alt="Familia completa"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        {/* Mensajes animados */}
        {mensajes.map((msg, i) => (
          <Box
            key={i}
            ref={(el) => el && mensajeRefs.current.push(el)}
            className="mensaje"
            sx={{
              mb: 2,
              px: 3,
              py: 2,
              borderRadius: "15px",
              background: "rgba(255,255,255,0.3)",
              backdropFilter: "blur(6px)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              maxWidth: "100%",
              opacity: 0,
              transform: "translateY(40px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: { xs: "16px", sm: "18px" },
                color: "#4b3c2a",
                textAlign: "center",
              }}
            >
              {msg}
            </Typography>
          </Box>
        ))}

        {/* Detalles del evento */}
        <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography sx={{ color: "#4b3c2a", fontWeight: "bold" }}>
            📅 Fecha: [Agregar fecha aquí]
          </Typography>
          <Typography sx={{ color: "#4b3c2a", fontWeight: "bold" }}>
            🕒 Hora: [Agregar hora aquí]
          </Typography>
          <Typography sx={{ color: "#4b3c2a", fontWeight: "bold" }}>
            📍 Lugar: [Agregar lugar aquí]
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
