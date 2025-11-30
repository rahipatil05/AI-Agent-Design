// import React from 'react'
import React, { useState } from 'react'




function demo() {


    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }


    return (
        <>

            <div className="body items-center justify-center text-white bg-black min-h-screen flex flex-col gap-8">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-7 px-6 rounded w-auto h-auto" onClick={increment}>
                    Increment
                </button>

                <h1>Count : {count} </h1>

                <button
                    className="bg-red-400 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
                    onClick={decrement}
                >
                    Decrement
                </button>




            </div>
        </>
    )
}

export default demo