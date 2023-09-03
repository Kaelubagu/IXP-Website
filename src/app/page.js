import backgroundSize from 'tailwind.config.js'
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillInstagram, AiFillFacebook} from 'react-icons/ai'



export default function Home() {
  return (
    <div>
      <main class=" text-white">
        {/* Navbar */}
          <section class="flex flex-col min-h-screen" style={{backgroundImage: `url("/InRock.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: 'rgba(0,0,0, 0.5)'
    }}>
            <nav class="sticky top-0 z-10 bg-black backdrop-filter backdrop-blur-md bg-opacity-30 border-b border-white">
              <div class="max-w-5xl mx-auto px-6">
                <div class="flex items-center justify-between h-16">
                  <span class="text-2xl text-white hover:text-green-500 transition-colors, transition duration-500 ease-in-out font-semibold ">Iota Chi Rho</span>
                  <div class="flex space-x-3 text-white">
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
                <h1 class="text-7xl font-semibold text-white hover:text-green-500 transition-colors, transition duration-500 ease-in-out">The Alternative Fraternity.</h1>
              </div>
            </div>

          </section>
        
        {/* About */}
        
        <a id="About"></a>
        <section class="p-5 bg-white">
          <div class="text-center">
            <h1 class="text-7xl text-center mt-20 mb-10 text-green-500 font-semibold">About Us</h1>
            <img src="bros.jpg" width={450} height={450} class="rounded-lg mx-auto shadow-lg shadow-green-300"/>
            <h2 class="text-gray-500 mt-5 italic center-text text-sm">Some of the current class</h2>
            <div class="container mx-auto">
              <p class="text-gray-600 leading-9 p-10 text-md">
              Iota Chi Rho is a social fraternity founded April 1992 at Trinity University in San Antonio, Texas. We are a unique take on fraternity life, attracting folks with off-beat interests and passions that drive us to lead and participate. Our members come from all majors, and actively participate in a variety of organizations. You can find us serving in leadership roles, producing summer research in the humanities and sciences, or participating in the performing arts on campus.
              </p>
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
                <li>Andrew Phillips</li>
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