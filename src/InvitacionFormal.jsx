import { useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import familia from "./assets/meo.png";
import "./InvitacionFamiliar.css";

export default function InvitacionFormal({ isActive }) {
  const mensajeRefs = useRef([]);
  const imagenRef = useRef(null);
  const eventDetails = useRef(null);
  const timeoutsRef = useRef([]);

  const mensajes = [
    "Con todo nuestro amor,",
    "Ángeles Hernández y Benjamín Balam",
    "te invitan a celebrar el primer año y bautizo de",
    "nuestro amado Eithan Romeo 💖",
  ];

  // Mantener índices estables (evita push/reseeds)
  mensajeRefs.current = mensajeRefs.current.slice(0, mensajes.length);

  useEffect(() => {
    // Limpia timeouts previos cada vez que cambia isActive
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];

    if (isActive) {
      // Mostrar imagen con pequeño delay
      const tImg = setTimeout(() => imagenRef.current?.classList.add("visible"), 150);
      timeoutsRef.current.push(tImg);

      // Mostrar mensajes con delay escalonado
      mensajeRefs.current.forEach((el, i) => {
        const t = setTimeout(() => {
          el?.classList.add("visible");
        }, i * 500);
        timeoutsRef.current.push(t);
      });

      // Mostrar eventDetails al final
      const tEvent = setTimeout(() => eventDetails.current?.classList.add("visible"), 2000);
      timeoutsRef.current.push(tEvent);
    } else {
      // Remover clases (inmediato) — y ya no volverán a aparecer porque limpiamos timeouts arriba
      imagenRef.current?.classList.remove("visible");
      mensajeRefs.current.forEach((el) => el?.classList.remove("visible"));
      eventDetails.current?.classList.remove("visible");
    }

    // Cleanup (por si el componente se desmonta)
    return () => {
      timeoutsRef.current.forEach((id) => clearTimeout(id));
      timeoutsRef.current = [];
    };
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
            ref={(el) => (mensajeRefs.current[i] = el)} // índice estable
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

        {/* 📌 Detalles del evento */}
        <Box
          ref={eventDetails}
          className="animar-box"
          sx={{
            mt: 4,
            p: { xs: 2.5, sm: 3 },
            borderRadius: "20px",
            background: "linear-gradient(145deg, #e3f2fd, #ffffff)",
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            width: "100%",
            opacity: 0,
          }}
        >
          <Typography
            sx={{
              color: "#4b3c2a",
              fontWeight: "bold",
              fontFamily: "'Dancing Script', cursive",
              fontSize: { xs: "20px", sm: "22px" },
              textAlign: "center",
            }}
          >
            📅 Sábado, 22 de Noviembre 2025
          </Typography>

          <Typography
            sx={{
              color: "#4b3c2a",
              fontWeight: "bold",
              fontFamily: "'Dancing Script', cursive",
              fontSize: { xs: "18px", sm: "20px" },
              textAlign: "center",
            }}
          >
            🕒 Ceremonia: 6:00 pm <br /> 🥂 Recepción: 7:00 pm
          </Typography>
          <Box sx={{ display: "flex", gap: 10, mt: 1 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#90caf9",
                color: "#fff",
                fontWeight: "bold",
                textTransform: "none",
                fontFamily: "'Dancing Script', cursive",
                fontSize: "16px",
                borderRadius: "10px",
                px: 2,
                py: 0.5,
                "&:hover": { backgroundColor: "#64b5f6" },
              }}
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Parroquia+de+San+Luis+Obispo+de+Huexotla/@19.4795076,-98.8724788,17.5z/data=!4m15!1m8!3m7!1s0x85d1e712333e6aa5:0x4e63eb22d648b05b!2sSan+Luis+Huexotla,+M%C3%A9x.!3b1!8m2!3d19.4806477!4d-98.8652244!16s%2Fg%2F1tp27mcv!3m5!1s0x85d1e71baa762d5b:0xefccef906ff793e2!8m2!3d19.478896!4d-98.8724125!16s%2Fg%2F11b70_w18g?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D",
                  "_blank"
                )
              }
            >
              ⛪ Misa
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#a5d6a7",
                color: "#fff",
                fontWeight: "bold",
                textTransform: "none",
                fontFamily: "'Dancing Script', cursive",
                fontSize: "16px",
                borderRadius: "10px",
                px: 2,
                py: 0.5,
                "&:hover": { backgroundColor: "#81c784" },
              }}
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Salon%2FJard%C3%ADn+El+viejo+pirul/@19.4791982,-98.8741156,19z/data=!4m15!1m8!3m7!1s0x85d1e712333e6aa5:0x4e63eb22d648b05b!2sSan+Luis+Huexotla,+M%C3%A9x.!3b1!8m2!3d19.4806477!4d-98.8652244!16s%2Fg%2F1tp27mcv!3m5!1s0x85d1e71b6f2f13c3:0xb411dcd497c49a52!8m2!3d19.4794228!4d-98.8739484!16s%2Fg%2F11fy_1_4p5?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D",
                  "_blank"
                )
              }
            >
              🥂 Recepción
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
