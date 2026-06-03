import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from '../../assets/basket-full-vegetables.png'

const Values = () => {

    const leftValues = value.slice(0, 2).map(item => {
        return(
            <div key={item.id} className='flex md:flex-row-reverse items-center gap-7'>
                <div>
                    <span className=' flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to bg-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>

                <div className='md:text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })

    const rightValues = value.slice(2).map(item => {
        return(
            <div key={item.id} className='flex items-center gap-7'>
                <div>
                    <span className=' flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to bg-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>

                <div>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })


  return (
   <section>
    <div className='mx-w-[1400px] mx-auto px-10 py-20'>
        <Heading highlight = "Our" heading = "Value" />

        <div className='flex md:flex-row flex-col gap-15 md:gap-5 mt-15'>

            {/* Left Values */}

            <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                {leftValues}
            </div>

            <div className='md:flex w-1/2 hidden'>
                <img src={Basket} />
            </div>

            {/* Right Values */}

            <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                {rightValues}
            </div>
            
        </div>

    </div>
   </section>
  )
}

export default Values

const value = [
    {
        id: 1,
        title: 'Quality You Can Count On',
        para: 'From farm-fresh produce to daily essentials, we bring premium quality products directly to your doorstep.',
        icon: <FaHeart />
    }, 

    {
        id: 2,
        title: 'Premium Quality',
        para: 'Every item is carefully selected and quality-checked to bring you the best shopping experience.',
        icon: <FaLeaf />
    },

    {
        id: 3,
        title: 'Healthy Choices',
        para: 'Discover a wide selection of nutritious foods and wholesome ingredients for a healthier lifestyle.',
        icon: <FaShieldAlt />
    },

    {
        id: 4,
        title: '100% Organic',
        para: 'Carefully sourced from certified organic farms, ensuring wholesome, nutritious, and environmentally friendly products.',
        icon: <FaSeedling />
    },
]
