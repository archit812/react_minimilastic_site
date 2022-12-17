import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from 'mui-image';
import boy from "./photos/boy.webp";
import design from "./photos/design.png";
import code from "./photos/code.png";
import consulting from "./photos/consulting.png";
import web1 from "./photos/web1.png"
import web2 from "./photos/web2.png"
import web3 from "./photos/web3.png"
import web4 from "./photos/web4.png"
import web5 from "./photos/web5.png"
import web6 from "./photos/web6.png"
import { useState } from 'react';


export default function Home() {

  const [darkMode, setMode] = useState(false)
  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white px-10 font-burtons md:px-20 lg:px-40 dark:bg-gray-900 ">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between" >
            <h1 className="text-xl font-burtons dark:text-white">ArchBots.com</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={() => setMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white" /></li>
              <li><a className="bg-cyan-500 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Products</a></li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-bold md:text-6xl">Realtime responsive Bots</h2>
            <h3 className="text-2xl py-2 dark:text-white">Powered by Raspberry Pi and C++ Code</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl m-auto dark:text-white">Real Time Bots used for various purpose to fulfill your need</p>
          </div>
          <div className="text-5xl flex justify-center  gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle className=" dark:text-white" />
            <AiFillLinkedin className=" dark:text-white" />
            <AiFillYoutube className=" dark:text-white" />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96">
            <Image src={boy} layout="fill" objectFit="cover" />
          </div>
        </section>
        {/*  Another Section */}
        <section>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-3xl py-10 dark:text-white">Our <span className="text-teal-500">Ikigai</span> </h3>
            <p className="text-md py-2 text-center flex flex-col items-center justify-between leading-8 text-gray-800 dark:text-white">Since the beginning of this Company Our main <span className="text-teal-500 ">focus</span> was to develop something that is modern and useful for today's genration.Something that can easily handle you work and make your life <span className="text-teal-500">Easy.</span>
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center dark:bg-white  flex flex-col items-center  hover:scale-105 duration-300  cursor-pointer shadow-xl p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Minimilastic Body Frame</h3>
              <p>Creating elegant design that suits the <span className="text-teal-500">Control System</span> and <span className="text-teal-500">You</span>
              </p>
              &nbsp;
              &nbsp;
              <h4>Systems We Use</h4>
              <p className="text-teal-500">Manipulators</p>
              <p className="text-teal-500">Raspberry Pi</p>
              <p className="text-teal-500">End Effectors</p>
              <p className="text-teal-500">Controllers</p>
              <p className="text-teal-500">Locomotive devices</p>
            </div>
            <div className="text-center dark:bg-white flex flex-col hover:scale-105 items-center duration-300  cursor-pointer shadow-xl p-10 rounded-xl my-10">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Minimilastic Body Frame</h3>
              <p>Creating elegant design that suits the <span className="text-teal-500">Control System</span> and <span className="text-teal-500">You</span>
              </p>
              &nbsp;
              &nbsp;
              <h4>Systems We Use</h4>
              <p className="text-teal-500">Manipulators</p>
              <p className="text-teal-500">Raspberry Pi</p>
              <p className="text-teal-500">End Effectors</p>
              <p className="text-teal-500">Controllers</p>
              <p className="text-teal-500">Locomotive devices</p>
            </div>
            <div className="text-center dark:bg-white flex flex-col hover:scale-105 items-center duration-300  cursor-pointer shadow-xl p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Minimilastic Body Frame</h3>
              <p>Creating elegant design that suits the <span className="text-teal-500">Control System</span> and <span className="text-teal-500">You</span>
              </p>
              &nbsp;
              &nbsp;
              <h4>Systems We Use</h4>
              <p className="text-teal-500">Manipulators</p>
              <p className="text-teal-500">Raspberry Pi</p>
              <p className="text-teal-500">End Effectors</p>
              <p className="text-teal-500">Controllers</p>
              <p className="text-teal-500">Locomotive devices</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">PortFolio</h3>
            <p className="text-md py-2 dark:text-white leading-8 text-gray-800">Since the beginning of this Company Our main <span className="text-teal-500">focus</span> was to develop something that is modern and useful for today's genration.Something that can easily handle you work and make your life <span className="text-teal-500">Easy.</span>
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1" >
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} heigh={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} heigh={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} heigh={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} heigh={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} heigh={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} heigh={'100%'} layout="responsive" />
            </div>
          </div>

        </section>
      </main>
    </div >
  )
}
