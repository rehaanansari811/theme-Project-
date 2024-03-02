import React from 'react'
import useTheme from '../context/theme'

const Card = () => {
    const { themeMode, lightTheme, darkTheme } = useTheme()
    const onChangeBtn = (e)=>{
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkTheme()
        } 
        else{
            lightTheme()
        }
    }
    return (
        <div className='bg-white dark:bg-slate-700 dark:text-white  px-8 py-8 rounded-lg gap-4 flex flex-col'>
            <div className="heading flex justify-between">
                <h1 className='dark:text-white'>Added to Cart</h1>

                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                    onChange={onChangeBtn}
                    checked={themeMode === "dark"}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>


            </div>
            <div className="data flex items-end gap-3">
                <img className='rounded-md' src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww" alt="img" width={160} />
                <div className="info dark:text-white">
                    <h3>$ 20</h3>
                    <h3>Nike Show X3</h3>
                    <div className="detailed-info dark:text-white flex text-gray-500 text-sm gap-2 ">
                        <p>Size: 42</p>
                        <p>Qty: 4</p>
                        <p>Color: Gray</p>
                    </div>
                </div>
            </div>
            <div className="controls flex justify-between">
                <button className='uppercase rounded-md dark:text-white p-2 bg-blue-600 text-white dark:bg-red-600'>View cart</button>
                <button className='uppercase rounded-md dark:text-white p-2 bg-red-600 text-white dark:bg-blue-600'>checkout</button>
            </div>
        </div>
    )
}

export default Card