import Head from 'next/head';
import React from 'react';
import EventPageExtended from "@/components/event-page-extended";

export default function Home() {
  return (
    <>
      <Head>
        <title>Copetona</title>
        <meta property="og:title" content="Copetona aniversario" />
        <meta property="og:description" content="Tarjeta de invitacion" />
        <meta property="og:image" content="https://photos.fife.usercontent.google.com/pw/AP1GczMX5hKhGqQFphfBxuu3ON2tqR5QkqcF3Fh7wWhPoUMBsTEQUIJwDAHy=w1440-h648-s-no-gm?authuser=0" />
        <meta property="og:url" content="https://entradita.com/LaCopetona" />
        <meta property="og:type" content="website" />
      </Head>
      <EventPageExtended/>
    </>
  );
}
