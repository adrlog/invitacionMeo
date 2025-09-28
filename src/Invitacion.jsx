import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Box } from "@mui/material";
import meo from "./assets/meo.png"

export default function Invitacion({isActive}) {
  const globosRef = useRef([]);
  const flameRef = useRef(null);
  const letrasRef = useRef([]);

  useEffect(() => {
    document.body.style.overflow = "hidden"; // deshabilita scroll global
    return () => {
      document.body.style.overflow = "auto"; // restaura al desmontar
    };
  }, []);


  useEffect(() => {
    // Animación flotante de globos
    globosRef.current.forEach((globo, i) => {
      gsap.to(globo, {
        y: "-=20",
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });
    });

    // Flama de la vela
    if (flameRef.current) {
      gsap.to(flameRef.current, {
        scale: 1.1,
        duration: 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Animación de entrada para cada letra
    letrasRef.current.forEach((letra, i) => {
      gsap.from(letra, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: "bounce.out",
      });
    });
  }, [isActive]);

  const mensaje = "Mi primer";
  const mensaje2 = "añito";
  const mensaje3 = "y bautizo";


  return (
    <Box
      sx={{
        width: "100%",
        height: "150vh",
        background: "linear-gradient(to bottom, #e3f2fd, #ffffff)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        fontFamily: "'Poppins', sans-serif",
        overflowY: "hidden"
      }}
    >
      {/* Globos flotando en el fondo */}
      {[...Array(30)].map((_, i) => {
        const size = 60 + Math.random() * 40;
        return (
          <div
            key={i}
            ref={(el) => (globosRef.current[i] = el)}
            style={{
              position: "absolute",
              top: `${5 + Math.random() * 60}%`,
              left: `${Math.random() * 90}%`,
              width: `${size}px`,
              height: `${size * 1.3}px`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            <div
              style={{
                width: `${size}px`,
                height: `${size * 1.2}px`,
                borderRadius: "50%",
                background: "radial-gradient(circle at 30% 30%, #ffffff, #90caf9)",
                boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
              }}
            />
            <div
              style={{
                width: "2px",
                height: "40px",
                background: "linear-gradient(to bottom, #dfe4ea, #a4b0be)",
                marginTop: "2px",
                borderRadius: "2px",
                transform: "rotate(5deg)",
              }}
            />
          </div>
        );
      })}

      {/* Contenido principal al centro */}
      <Box
        sx={{
          position: "absolute",
          top:80,
          zIndex: 2,
          height: "88vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Mensaje en tira de letras */}
        <Box
          sx={{
            display: "flex",
            gap: "6px",
            flexWrap: "wrap",
            justifyContent: "center",
            mb: 3,
          }}
        >
          {mensaje.split("").map((char, i) => (
            <Box
              key={i}
              ref={(el) => (letrasRef.current[i] = el)}
              sx={{
                background: "#90caf9",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
                borderRadius: "6px",
                padding: "8px 6px",
                minWidth: "20px",
                textAlign: "center",
                boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
                fontFamily: "'Dancing Script', cursive",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "6px",
            flexWrap: "wrap",
            justifyContent: "center",
            mb: 3,
          }}
        >
          {mensaje2.split("").map((char, i) => (
            <Box
              key={i}
              ref={(el) => (letrasRef.current[i] = el)}
              sx={{
                background: "#90caf9",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
                borderRadius: "6px",
                padding: "8px 6px",
                minWidth: "20px",
                textAlign: "center",
                boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
                fontFamily: "'Dancing Script', cursive",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "6px",
            flexWrap: "wrap",
            justifyContent: "center",
            mb: 3,
          }}
        >
          {mensaje3.split("").map((char, i) => (
            <Box
              key={i}
              ref={(el) => (letrasRef.current[i] = el)}
              sx={{
                background: "#90caf9",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
                borderRadius: "6px",
                padding: "8px 6px",
                minWidth: "20px",
                textAlign: "center",
                boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
                fontFamily: "'Dancing Script', cursive",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </Box>
          ))}
        </Box>

        {/* Imagen central */}
      <Box
        sx={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "5px solid #90caf9",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          zIndex: 3,
          background: "#fff",
        }}
      >
        <img
          src={meo} // 🔹 aquí reemplaza por la foto real
          alt="Eithan"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>

        {/* Nombre destacado */}
        <Box
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#1565c0",
            fontFamily: "'Dancing Script', cursive",
            textAlign: "center",
            px: 2,
          }}
        >
          ✨ Eithan Romeo Balam Hernandez ✨
        </Box>

        {/* Pastel con vela */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            ref={flameRef}
            style={{
              width: "14px",
              height: "20px",
              background: "radial-gradient(circle at 30% 30%, #ffeb3b, #ff9800)",
              borderRadius: "50%",
              marginBottom: "-4px",
            }}
          />
          <div
            style={{
              width: "6px",
              height: "30px",
              background: "#d7ccc8",
            }}
          />
          <div
            style={{
              width: "80px",
              height: "50px",
              background: "#ffccbc",
              borderRadius: "6px",
              position: "relative",
              marginTop: "-2px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "15px",
                background: "#ff8a65",
                borderBottomLeftRadius: "6px",
                borderBottomRightRadius: "6px",
              }}
            />
          </div>
        </Box>
      </Box>
    </Box>
  );
}
