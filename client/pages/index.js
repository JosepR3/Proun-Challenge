import Head from 'next/head';

import Header from '../components/Header/header';
import SearchSection from '../components/SearchSection/searchSection';
import AdvantagesSection from '../components/AdvantagesSection/advantagesSection';
import ToSellSection from '../components/toSellSection/toSellSection';
import ToPricesSection from '../components/toPricesSection/toPricesSection';
import ClientImgSection from '../components/ClientImgSection/clientImgSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="d-flex flex-column align-items-center">
        <SearchSection />
        <AdvantagesSection />
        <ToSellSection />
        <ClientImgSection />
        <ToPricesSection />
      </main>
    </div>
  )
}
