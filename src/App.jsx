import { AnimatePresence, motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import BootSplash from './components/brand/BootSplash'
import ChatWidget from './components/chat/ChatWidget'
import Footer from './components/layout/Footer'
import DestinationSkeleton from './components/skeletons/DestinationSkeleton'
import HomeSkeleton from './components/skeletons/HomeSkeleton'
import PageSkeleton from './components/skeletons/PageSkeleton'

const Home = lazy(() => import('./pages/Home'))
const Destination = lazy(() => import('./pages/Destination'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  const location = useLocation()

  return (
    <>
      <BootSplash />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          <Routes location={location}>
            <Route
              path="/"
              element={
                <Suspense fallback={<HomeSkeleton />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/destinations/:slug"
              element={
                <Suspense fallback={<DestinationSkeleton />}>
                  <Destination />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<PageSkeleton />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<PageSkeleton />}>
                  <Contact />
                </Suspense>
              }
            />
          </Routes>
          <Footer />
        </motion.div>
      </AnimatePresence>
      <ChatWidget />
    </>
  )
}

export default App
