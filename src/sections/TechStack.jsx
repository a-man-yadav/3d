import React from 'react'
import AnimatedHeader from '../components/AnimatedHeader'
import Horizontal from '../components/technologies/Horizontal'
import Vertical from '../components/technologies/Vertical'
import { database, frontend, other, tools, backend } from '../constants/index'

const TechStack = () => {

  const text = `The technologies that power my
   applications from idea to deployment.`


  return (
    <section className='min-h-screen'>
      <AnimatedHeader
        subtitle={""}
        title={"Technologies"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />

      <div className=''>
        <div className='grid grid-cols-3 grid-rows-3 gap-2 h-[80vh] px-12 pb-10 '>
          <div className='col-span-2'>
            <Horizontal
              bgText={"Frontend"}
              textSize={"text-9xl"}
              list={frontend}
            />

          </div>
          <div className='col-span-1 row-span-2 '>
            <Vertical
              list={backend}
              bgText={"Backend"}
              textSize={"text-8xl"} />
          </div>
          <div className='col-span-1 row-span-2'>
            <Vertical
              list={tools}
              bgText={"Tools"}
              textSize={"text-8xl"} />
          </div>
          <div >
            <Horizontal
              bgText={"Database"}
              textSize={"text-7xl"}
              list={database}
            />
          </div>
          <div className='col-span-2 rounded-3xl'>
            <Horizontal
              bgText={"Others"}
              textSize={"text-9xl"}
              list={other}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
