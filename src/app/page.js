import backgroundSize from 'tailwind.config.js'
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillInstagram, AiFillFacebook} from 'react-icons/ai'




export default function Home() {
  return (
    <div>
      <main class=" text-white bg-black relative min-h-screen">
        {/* Navbar */}
          <section class="flex flex-col items-center min-h-screen bg-fade-in" style={{
          backgroundImage: `url("/DSCF7076.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
          }}>

            <nav class="sticky top-10 mx-auto bg-black backdrop-filter backdrop-blur-md bg-opacity-30 border border-white ">
              <div class="max-w-5xl mx-auto px-6">
                <div class="flex items-center justify-between h-16">
                  <span class="text-2xl text-white hover:text-green-500 transition-colors, transition duration-500 ease-in-out font-semibold pt--1"><a href="/">IXP//</a></span>
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
                <h1 class="pb-5 text-4xl font-semibold text-white hover:text-green-500 transition-colors, transition duration-500 ease-in-out">The Alternative Fraternity.</h1>
              </div>
            </div>

          </section>
        
        {/* About */}
        
        <a id="About"></a>
        <section class="p-5 bg-green-800 pb-20">
          
          <div class="text-center ">
            <h1 class="text-7xl text-center mt-20 mb-20 text-white font-semibold">About Us</h1>
              
              {/*cards */}


              <div class="p-3 scale-110 transition-all ease-in-out duration-300 max-w-md mx-auto bg-black rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                  <div class="md:flex ">
                    <div class="md:shrink-0">
                      <img src="DSCF7078.jpg" class="h-48 w-full object-cover md:h-full md:w-48 rounded-lg mx-auto"/>
                    </div>
                    <div class="p-8">
                      <div class="uppercase tracking-wide text-lg text-green-500 font-semibold italic">History</div>
                      <p class="mt-2 text-white">Iota Chi Rho is a social fraternity founded April 1992 at Trinity University in San Antonio, Texas. We are a unique take on fraternity life, attracting folks with off-beat interests and passions that drive us to lead and participate. Our members come from all majors, and actively participate in a variety of organizations. You can find us serving in leadership roles, producing summer research in the humanities and sciences, or participating in the performing arts on campus.</p>
                    </div>
                  </div>
              </div>

              <section class="p-8"></section>
              

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
            <h1 class="font-semibold italic text-center mt-20 mb-10 text-white text-2xl">Current Active Class:</h1>
          </div>

            {/*table of names*/}

            <table class="text-center mx-auto border-separate border-spacing-y-3 table-fixed">

              <thead>
                <tr>
                  <th>Person</th>
                  <th>PC</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Andrew Phillips</td>
                  <td class=" text-green-600">Alpha Kappa</td>
                  <td>
                    <div class="ml-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                          President
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Marcos Morales</td>
                  <td class=" text-blue-600">Alpha iota</td>
                  <td>
                    <div class="ml-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                          Vice-President
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Tucker Craft</td>
                  <td class=" text-green-600">Alpha Kappa</td>
                  <td>
                    <div class="ml-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-yellow-200 text-yellow-700 rounded-full">
                            Treasurer & Judicial
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Josh O.D.P</td>
                  <td class=" text-blue-600">Alpha Iota</td>
                  <td>
                    <div class="ml-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
                            Standards
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Julian Santovena</td>
                  <td class=" text-red-600">Alpha Zeta</td>
                  <td>
                    <div class="ml-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
                            Standards
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Ashwin Ramesh</td>
                  <td class=" text-blue-600">Alpha Iota</td>
                  <td>
                    <div class="ml-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
                            Alumni
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Hues Gibson</td>
                  <td class=" text-green-600">Alpha Kappa</td>
                  <td>
                    <div class="ml-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-900 text-gray-400 rounded-full">
                            Secretary
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Richard Grau</td>
                  <td class=" text-green-600">Alpha Kappa</td>
                  <td>
                    <div class="ml-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-900 text-gray-400 rounded-full">
                            PR
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Max Hightower</td>
                  <td class=" text-green-600">Alpha Kappa</td>
                  <td>
                    <div class="ml-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-900 text-gray-400 rounded-full">
                            Mixer & Social Chair
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Joey Mattingly</td>
                  <td class=" text-blue-600">Alpha Iota</td>
                  <td>
                    <div class="ml-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-900 text-gray-400 rounded-full">
                            Informal Rush
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Echo Stellman</td>
                  <td class=" text-blue-600">Alpha Iota</td>
                  <td>
                    <div class="ml-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-900 text-gray-400 rounded-full">
                            Historian
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Meyer Stellman</td>
                  <td class=" text-green-600">Alpha Kappa</td>
                  <td>
                    <div class="ml-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-900 text-gray-400 rounded-full">
                            Scholarship
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Jacob "JP" Palmer</td>
                  <td class=" text-blue-600">Alpha Iota</td>
                  <td>
                    <div class="ml-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-gray-900 text-gray-400 rounded-full">
                            Service
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Jake Borawski</td>
                  <td class=" text-blue-600">Alpha Iota</td>
                </tr>
                <tr>
                  <td>Nathan Koehler</td>
                  <td class=" text-green-600">Alpha Kappa</td>
                </tr>
                <tr>
                  <td>Elliot Schien</td>
                  <td class=" text-green-600">Alpha Kappa</td>
                </tr>


                <tr>
                  <td>Caleb Griffin</td>
                  <td class=" text-blue-600">Alpha Iota</td>
                </tr>
                <tr>
                  <td>Henry Hafner</td>
                  <td class=" text-blue-600">Alpha Iota</td>
                </tr>
                <tr>
                  <td>Preston Rhea</td>
                  <td class=" text-purple-600">Alpha Epsilon</td>
                </tr>
              </tbody>
            </table>

            <div class="text-center pt-5">
              <button class="mt-10 transition-all px-4 ease-in-out hover:bg-green-500 duration-300 backdrop-filter backdrop-blur-md bg-opacity-30 border border-white">
                <a href="/Alumni">Alumni Archive</a>
              </button>
            </div>
            
          
        </section>
          
        {/*Footer*/}
        <section class="p-10 bg-black">

        <hr class="my-12 h-0.5 border-t-0 bg-white opacity-100 dark:opacity-50" />
          
            <div class="flex justify-center gap-5 text-white text-4xl"> {/*social media images*/}
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
            <div class=" flex justify-center text-white text-sm flex-col text-center mt-5">
              <div>
                <small>Programmed by Caleb Aguiar</small>
              </div>
              <div>
                <small>@ Trinity University</small>
              </div>
            </div>
          
        </section>
        

      </main>
    </div>
  );
}