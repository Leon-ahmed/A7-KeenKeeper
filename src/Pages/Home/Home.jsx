import { Suspense } from 'react'
import Banner from '../../Components/Banner/Banner'
import Friends from '../../Components/Friends/Friends'
import { friendDataPromise } from '../../data/friendData'

const Home = () => {
  return (
    <main>
      <Banner />
      <Suspense fallback={<span className="loading loading-spinner text-accent"></span>}>
        <Friends friendData={friendDataPromise} />
      </Suspense>
    </main>
  )
}

export default Home