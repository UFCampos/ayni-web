'use client'
import dynamic from 'next/dynamic'

// import { Dividends } from '@/components/Dividends'
import { Fractional } from '@/components/Fractional'
// import { Ecosystem } from '@/components/Ecosystem'
// import { InfoCard } from '@/components/InfonCard'
// import CardTeamWorkList from '@/components/CardTeamWorkList'
// import PresaleCountdown from '@/components/PresaleCountdown'
// import InfoPhase from '@/components/functionsContract/InfoPhase'
// import BuyInfo from '@/components/BuyInfo'
import ClaimSteps from '@/components/ClaimSteps'
import BinanceWidget from '../components/BinanceWidget'
import InfoPresale from '@/components/InfoPresale'
import InfoContent from '@/components/InfoConten'
import { Passport } from '@/components/Passport'
import { Roadmap } from '@/components/Roadmap'
import { Tokenomics } from '@/components/Tokenomics'
import { Marketplace } from '@/components/Marketplace'
import { saleEnded } from '@/utils/endSale'
import Video from '@/components/Video'
import Diagram from '@/components/Diagram'
import Sectors from '@/components/Sectors'
import Partners from '@/components/Partners'
import Projects from '@/components/Projects'
import Sales from '@/components/Sales'

const PresaleCountdown = dynamic(async () => await import('@/components/PresaleCountdown'))
const InfoPhase = dynamic(async () => await import('@/components/functionsContract/InfoPhase'))
const BuyInfo = dynamic(async () => await import('@/components/BuyInfo'))

// const currentDate = new Date()
// const stopRenderingDate = new Date('2024-04-01')

// const shouldRenderProgressBar = currentDate < stopRenderingDate

const Home = (): React.JSX.Element => {
  const endsale = saleEnded()
  return (
    <main className='flex flex-col gap-64 pt-8 mt-10 px-8 justify-center items-center w-screen overflow-x-hidden '>
      <section className='p-2 my-4 z-10 w-full '>
        <div className='flex xl:grid grid-cols-3 flex-col place-items-start items-center gap-4 w-full' >
          <InfoPresale />
          {endsale ? <ClaimSteps /> : (
            <section className='bg-background/50 self-center border border-border-secondary rounded-3xl xl:-ml-20 flex flex-col mx-0 w-full md:w-[500px] xl:w-11/12 py-4'>
              <PresaleCountdown />
              <InfoPhase />
              <BuyInfo />
            </section>
          )}
        </div>
      </section>
      <BinanceWidget />
      <Diagram />
      <Sectors />
      {/* <InfoCard/> */}
      {/* <ItemCarousel/> */}
      {/* <Ecosystem/> */}
      <Projects />
      <Marketplace />
      <Sales />
      <Fractional />
      <Passport />
      <Tokenomics />
      <Roadmap />
      <Video />
      <Partners />
      <InfoContent />
      {/* <Dividends/> */}
      {/* <CardTeamWorkList /> */}
    </main>
  )
}

export default Home
