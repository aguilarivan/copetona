"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Music,
  Utensils,
  Gift,
  Camera,
  // DollarSign,
  AudioLines
} from "lucide-react";

interface CountdownProps {
  targetDate: string; // O puedes usar Date si prefieres trabajar directamente con objetos de tipo Date
}
const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>(
    calculateTimeLeft()
  );

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex justify-center space-x-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="text-4xl font-bold">{value}</div>
          <div className="text-sm">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default function EventPageExtended() {
  const [confirmed, setConfirmed] = useState(false);
  // const [showBankDetails, setShowBankDetails] = useState(false);

  return (
    <div className="max-w-md mx-auto p-4 space-y-6" >
      {/* Bloque de imagen principal */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/logo.png"
          alt="Imagen del evento"
          width={400}
          height={200}
          layout="responsive"
        />
      </div>

      {/* Bloque de título del evento */}
      <div className="bg-primary text-primary-foreground p-6 rounded-lg shadow text-center" style={{ backgroundColor: "#5E3D4A" }}>
        <h1 className="text-3xl font-bold mb-2">¡Nuestro aniversario!</h1>
        {/* <p className=text-xl>¡Porque bailando se vive mejor!</p> */}
      </div>

      {/* Bloque de cuenta regresiva */}
      <div className="p-4 rounded-lg shadow text-primary-foreground" style={{ backgroundColor: "#000000" }}>
        <h2 className="text-xl font-bold mb-2 text-center flex items-center justify-center">
          <Clock className="mr-2" /> Cuenta regresiva
        </h2>
        <Countdown targetDate="2024-10-05T12:00:00" />
      </div>

      {/* Bloque de localización */}
      <div className="bg-muted text-accent-foreground p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2 flex items-center">
          <MapPin className="mr-2" /> Localización
        </h2>
        <p className="mb-4">Finca Don Roque</p>
        <button
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-2 px-4 rounded"
          onClick={() =>
            (window.location.href = "https://maps.app.goo.gl/S2hRonxMNXkxES1z6")
          }
        >
          UBICACION
        </button>
      </div>

      {/* Bloque de confirmación */}
      <div className="bg-muted text-secondary-foreground p-4 rounded-lg shadow ">
        <h2 className="text-xl font-bold mb-2">Confirmá tu asistencia</h2>
        <p className="mb-4">
          Esperamos que seas parte de esta gran celebración. Si todavía no lo hiciste, confirmanos tu asistencia!
        </p>
        <button
          onClick={() => window.open("https://wa.me/+543482625657?text=Hola,%20quiero%20confirmar%20mi%20asistencia%20al%20evento.", "_blank")}
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-2 px-4 rounded"
        >
          CONFIRMAR AQUÍ
        </button>
      </div>

      {/* Bloque de entretenimiento */}
      <div className="bg-secondary text-secondary-foreground p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2 flex items-center">
          <Music className="mr-2" /> Entretenimiento
        </h2>
        <p>DJ y Bandas en Vivo</p>
        <ul className="list-disc list-inside mt-2">
          {/* <li>DJ Ritmo Loco</li> */}
          {/* <li>Banda Los Inoxidables</li> */}
          {/* <li>Grupo de Baile Pies de Fuego</li> */}
        </ul>
      </div>

      {/* Bloque de menú */}
      <div className="bg-muted p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2 flex items-center">
          <Utensils className="mr-2" /> Menú
        </h2>
        <p>Entrada con empanadas y vino rosado</p>
        <p>Asado 2 Fuegos, Pollo, Chorizo, Ensaladas.</p>
        <p className="mt-2">(Sin bebida)</p>
        <p className="font-bold mt-2">¡Habrá venta de bebidas!</p>
      </div>

      {/* Bloque de precio y pago */}
      {/* <div className="bg-primary text-primary-foreground p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2 flex items-center">
          <DollarSign className="mr-2" /> Valor y Forma de Pago
        </h2>
        <p className="mb-2">Valor: $10.000, efectivo o transferencia</p>
        <button
          onClick={() => setShowBankDetails(!showBankDetails)}
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold py-2 px-4 rounded"
        >
          {showBankDetails ? 'Ocultar datos bancarios' : 'Ver datos bancarios'}
        </button>
        {showBankDetails && (
          <div className="mt-2">
            <p>Banco: Banco Nacional</p>
            <p>Cuenta: 1234-5678-90</p>
            <p>Titular: Juan Pérez</p>
          </div>
        )}
      </div> */}

      {/* Bloque de código de vestimenta */}
      <div className="bg-secondary text-secondary-foreground p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">Código de Vestimenta</h2>
        <p>
          Como te sientas a gusto! <br /> Prepárate para bailar toda la noche!
        </p>
      </div>

      {/* Bloque de regalos */}
      <div className="bg-accent text-accent-foreground p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2 flex items-center">
          <Gift className="mr-2" /> Regalos
        </h2>
        <p>
          Tu presencia es el mejor regalo, pero si deseas obsequiar algo,
          sugerimos:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Libros</li>
          <li>Plantas</li>
        </ul>
      </div>

      {/* Bloque de hashtag para redes sociales */}
      <div className="bg-primary text-primary-foreground p-4 rounded-lg shadow text-center">
        <h2 className="text-xl font-bold mb-2 flex items-center justify-center">
          <Camera className="mr-2" /> Comparte tus fotos
        </h2>
        <p className="text-2xl font-bold">#Copetona1Año</p>
      </div>

      {/* Bloque de playlist */}
      <div className="bg-green-400 text-green-foreground p-4 rounded-lg shadow ">
      <h2 className="text-xl font-bold mb-2 flex items-center">
          <AudioLines className="mr-2" /> Hagamos previa
        </h2>
        <p className="mb-4">
          Se parte del tiempo de espera, compartiendo tus canciones favoritas.
        </p>
        {!confirmed ? (
          <button
            onClick={() => setConfirmed(true)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-2 px-4 rounded"
          >
            Link playlist
          </button>
        ) : (
          <p className="text-green-400 font-semibold">
            ¡Asistencia confirmada!
          </p>
        )}
      </div>

      {/* Bloque de información adicional */}
      <div className="bg-primary text-primary-foreground p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">Información adicional</h2>
        <p>
          Habrá estacionamiento disponible. Si necesitas o
          tienes alguna restricción alimentaria, por favor contáctanos.
        </p>
      </div>
    </div>
  );
}
