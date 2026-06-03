import React from 'react';
import Heading from '../Heading/Heading'; // Assuming Heading component exists
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from 'react-icons/tb';
import { PiFactory, PiPlant } from 'react-icons/pi';
import { SlBadge } from 'react-icons/sl';
import { BsTruck } from 'react-icons/bs';

const steps = [
    {
        id: 1,
        numberIcon: <TbCircleNumber1Filled />,
        title: 'Sourcing',
        para: 'We carefully select the best raw materials, ensuring sustainable and ethical practices from the start.',
        icon: <PiPlant />,
    },
    {
        id: 2,
        numberIcon: <TbCircleNumber2Filled />,
        title: 'Manufacturing',
        para: 'Our state-of-the-art manufacturing facilities use advanced techniques to produce high-quality goods efficiently.',
        icon: <PiFactory />,
    },
    {
        id: 3,
        numberIcon: <TbCircleNumber3Filled />,
        title: 'Quality Control',
        para: 'Rigorous quality checks are performed at every stage to guarantee that each product meets our exacting standards.',
        icon: <SlBadge />,
    },
    {
        id: 4,
        numberIcon: <TbCircleNumber4Filled />,
        title: 'Logistics',
        para: 'Our optimized supply chain and robust logistics ensure timely and secure delivery of products to our customers worldwide.',
        icon: <BsTruck />,
    },
];

const ProcessStep = ({ step }) => (
    <div className={`flex-1 basis-[300px] flex flex-col items-center text-center px-4 ${step.id % 2 === 0 ? 'lg:mt-20' : ''}`}>
        {/* Step Number */}
        <span className='flex justify-center items-center w-24 h-24 text-6xl text-zinc-800 border-2 border-zinc-400 rounded-full bg-transparent p-2'>
            {step.numberIcon}
        </span>

        {/* Step Details */}
        <div className='flex flex-col items-center mt-8'>
            <span className='flex justify-center items-center text-3xl bg-gradient-to-br from-orange-400 to-orange-600 text-white w-14 h-14 rounded-full shadow-lg'>
                {step.icon}
            </span>

            <h4 className='text-zinc-800 text-2xl font-bold mt-4'>{step.title}</h4>
            <p className='text-zinc-600 mt-2 max-w-sm'>{step.para}</p>
        </div>
    </div>
);

const Process = () => {
    return (
        <div className='max-w-[1400px] mx-auto px-6 py-20'>
            {/* Heading Section */}
            <div className='mb-16 text-center'>
                <Heading highlight='Our' heading='Process' />
            </div>

            {/* Steps Section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 justify-items-center'>
                {steps.map((step) => (
                    <ProcessStep key={step.id} step={step} />
                ))}
            </div>
        </div>
    );
};

export default Process;