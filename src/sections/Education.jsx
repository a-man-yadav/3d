import React from 'react'
import AnimatedHeader from '../components/AnimatedHeader'

const Education = () => {
  const text="Academic Qualifications";
  return (
    <section id='education' className='min-h-screen bg-black mt-10'>
      <AnimatedHeader
        subtitle={"Academic Qualifications"}
        title={"Education"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      <div>
        
      </div>

    </section>
  )
}

export default Education
