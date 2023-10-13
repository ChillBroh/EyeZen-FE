import React from 'react'
import { Link } from "react-router-dom";


const NearSightedTestInstructions = () => {
  return (
    <div className='flex flex-col items-center h-screen p-24 px-48 pt-48'>
        <div className='items-center'>
            <h1 className='text-4xl pb-9 text-center'>Cover your one eye at a time and do the test by going <b>10 feet distance</b> from the Screen.</h1>
            <Link to={`/near-test-view`}>
            <button className="bg-[#004AAD] text-white rounded-md font-medium py-2 w-full  items-center lg:mt-0" >
                        Start Test
            </button>
            </Link>
        </div>
    </div>
  )
}

export default NearSightedTestInstructions