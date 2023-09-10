import backgroundSize from 'tailwind.config.js'
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillInstagram, AiFillFacebook} from 'react-icons/ai'



export default function Alumni() {
  return (
    <div>
      <main class=" text-white">
        {/* Navbar */}
          <section class="flex flex-col min-h-screen">
            <nav class="sticky top-10 mx-auto bg-black backdrop-filter backdrop-blur-md bg-opacity-30 border border-white">
              <div class="max-w-5xl mx-auto px-6">
                <div class="flex items-center justify-between h-16">
                  <span class="text-2xl text-white hover:text-green-500 transition-colors, transition duration-500 ease-in-out font-semibold "><a href="/">IXP//Archives</a></span>
                  <div class="flex space-x-4 text-white pl-10">
                    <a href="/#About">About</a>
                    <a href="/#Members">Members</a>
                    {/*maybe add a github*/}
                  </div>
                </div>
              </div>
            </nav>


                <span class="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative">
                    <div class="flex flex-wrap justify-center ">
                        <div class="mx-auto px-4">
                            <img src="/IMG_3170.jpg" class="shadow rounded max-w-full h-auto align-middle border-none" />
                        </div>
                    </div>
                </span>


          </section>



          
        {/*Footer*/}
        <section class="p-20">
          
            <div class="flex justify-center gap-5 text-gray-600 text-4xl"> {/*social media images*/}
              <div class="hover:drop-shadow-glow hover:transition-all ease-in-out duration-300">
                <a href="https://www.instagram.com/iotachirho/">
                  <AiFillInstagram/>
                </a>
              </div>
              <div class="hover:drop-shadow-glow hover:transition-all ease-in-out duration-300">
                <a href="https://www.facebook.com/ixptu/">
                  <AiFillFacebook/>
                </a>
              </div>
            </div>
          
        </section>
        

      </main>
    </div>
  );
}