import backgroundSize from 'tailwind.config.js'
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillInstagram, AiFillFacebook} from 'react-icons/ai'




export default function Home() {
  return (
    <div>
      <main class=" text-white">
        {/* Navbar */}
          <section class="flex flex-col items-center min-h-screen backdrop-opacity-50" style={{backgroundImage: `url("/DSCF7076.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: 'rgba(0,0,0, 0.5)',
          opacity: '5'
          }}>

            <nav class="sticky top-10 mx-auto bg-black backdrop-filter backdrop-blur-md bg-opacity-30 border border-white ">
              <div class="max-w-5xl mx-auto px-6">
                <div class="flex items-center justify-between h-16">
                  <span class="text-2xl text-white hover:text-green-500 transition-colors, transition duration-500 ease-in-out font-semibold "><a href="/">Iota Chi Rho</a></span>
                  <div class="flex space-x-4 text-white pl-10">
                    <a href="#About">About</a>
                    <a href="#Members">Members</a>
                    {/*maybe add a github*/}
                  </div>
                </div>
              </div>
            </nav>

        {/* Hero section */}  

            <div class="flex-1 flex items-center ">
              <div class="text-center mx-auto">
                <h1 class="pb-5 text-5xl font-semibold text-white hover:text-green-500 transition-colors, transition duration-500 ease-in-out">The Alternative Fraternity.</h1>
              </div>
            </div>

          </section>
        
        {/* About */}
        
        <a id="About"></a>
        <section class="p-5 bg-green-800 pb-20">
          
          <div class="text-center ">
            <h1 class="text-7xl text-center mt-20 mb-20 text-white font-semibold">About Us</h1>
              
              {/*cards */}


              <div class="p-3 hover:scale-105 transition-all ease-in-out duration-300 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                  <div class="md:flex ">
                    <div class="md:shrink-0">
                      <img src="DSCF7078.jpg" class="h-48 w-full object-cover md:h-full md:w-48 rounded-lg mx-auto shadow-lg shadow-green-300"/>
                    </div>
                    <div class="p-8">
                      <div class="uppercase tracking-wide text-sm text-green-500 font-semibold">History</div>
                      <p class="mt-2 text-slate-500">In a room full of people, we may be the weird ones, but we have a story to tell! The entire fraternity constists of many different majors, ranging from Comptuer Science, Theater, Business, and many more. The brotherhood stays strong despite the differences.</p>
                    </div>
                  </div>
              </div>

              <section class="p-5"></section>

              <div class="p-3 hover:scale-105 transition-all ease-in-out duration-300 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                  <div class="md:flex ">
                    <div class="md:shrink-0">
                      <img src="IMG_2739.jpg" class="h-48 w-full object-cover md:h-full md:w-48 rounded-lg mx-auto shadow-lg shadow-green-300"/>
                    </div>
                    <div class="p-8">
                      <div class="uppercase tracking-wide text-sm text-green-500 font-semibold">Harmony</div>
                      <p class="mt-2 text-slate-500">In a room full of people, we may be the weird ones, but we have a story to tell! The entire fraternity constists of many different majors, ranging from Comptuer Science, Theater, Business, and many more. The brotherhood stays strong despite the differences.</p>
                    </div>
                  </div>
              </div>

              <section class="p-5"></section>

              <div class="p-3 hover:scale-105 transition-all ease-in-out duration-300 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                  <div class="md:flex ">
                    <div class="md:shrink-0">
                      <img src="/1.jpg" class="h-48 w-full object-cover md:h-full md:w-48 rounded-lg mx-auto shadow-lg shadow-green-300"/>
                    </div>
                    <div class="p-8">
                      <div class="uppercase tracking-wide text-sm text-green-500 font-semibold">Inclusivity</div>
                      <p class="mt-2 text-slate-500">We are committed to fostering an inclusive and diverse community that welcomes individuals of all identities. We firmly believe that fraternity is about more than tradition; it's about creating a space where everyone can thrive.</p>
                    </div>
                  </div>
              </div>

              <section class="p-5"></section>

              <div class="p-3 hover:scale-105 transition-all ease-in-out duration-300 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                  <div class="md:flex ">
                    <div class="md:shrink-0">
                      <img src="IMG_6279.jpg" class="h-48 w-full object-cover md:h-full md:w-48 rounded-lg mx-auto shadow-lg shadow-green-300"/>
                    </div>
                    <div class="p-8">
                      <div class="uppercase tracking-wide text-sm text-green-500 font-semibold">Charity</div>
                      <p class="mt-2 text-slate-500">We believe in making a positive impact not only within our fraternity but also within the broader community. One of the ways we do this is by actively participating in charitable initiatives and giving back to those in need. One of our favorite and most fun charitable traditions is the 'Pie to the Face for Charity' event.</p>
                    </div>
                  </div>
              </div>

          </div>
        </section>

        {/*Active Members List*/}
        <a id="Members"></a>
        <section class="bg-black container: mx-auto" >
          <div class="text-center">
            <h1 class="italic text-center mt-20 text-white text-2xl">Current Active Class:</h1>
          </div>
            <div class="text-center px-20">
              <ul class="text-white text-md mt-4">
                <li>Tucker Craft</li>
                <li>Hues Gibson</li>
                <li>Richard Grau</li>
                <li>Max Hightower</li>
                <li>Nathan Koehler</li>
                <li>Elliot Schien</li>
                <li>
                  Andrew Phillips
                  <span
                    class="inline-block whitespace-nowrap rounded-[0.27rem] bg-success-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-success-700">
                    President
                  </span>
                </li>
                <li>Meyer Stellman</li>
                <li>Jacob "JP" Palmer</li>
              </ul>
            </div>
            <div class="text-center px-20 ">
              <ul>
              <li>Jake Borawski</li>
              <li>Caleb Griffin</li>
              <li>Henry Hafner</li>
              <li>Joey Mattingly</li>
              <li>Marcos Morales</li>
              <li>Joshua O'Donnell-Paccione</li>
              <li>Ashwin Ramesh</li>
              <li>Echo Stellman</li>
              <li>Preston Rhea</li>
              <li>Julian Santovena</li>
              </ul>


            </div>
            <div class="text-center pt-5">
              <button class="transition-all px-4 ease-in-out hover:bg-green-500 duration-300 backdrop-filter backdrop-blur-md bg-opacity-30 border border-white">
                <a href="/Alumni">Alumni Archive</a>
              </button>
            </div>
            
          
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