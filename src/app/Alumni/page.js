import backgroundSize from 'tailwind.config.js'
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillInstagram, AiFillFacebook} from 'react-icons/ai'



export default function Alumni() {
  return (
    <div>
      <main class=" text-white">
        {/* Navbar */}
        <section class="flex flex-col">
          <nav class="fixed left-0 right-0 bg-black backdrop-filter backdrop-blur-md bg-opacity-30 ">
            <div class="max-w-5xl mx-auto px-6">
              <div class="flex items-center justify-between h-16">
                <span class="text-2xl text-white hover:text-green-500 transition-colors, transition duration-500 ease-in-out font-semibold">
                  <a href="/">IXP//Archives</a>
                </span>
                <div class="flex space-x-4 text-white pl-10">
                  <a href="/#About">About</a>
                  <a href="/#Members">Members</a>
                </div>
              </div>
            </div>
          </nav>
        </section>


          <section>
            <div class="flex justify-center items-center mx-2 mt-24 ">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Alpha Eta (2022)</h2>
                  <ul class="list-disc ml-6">
                    <li>Kj Ghast</li>
                    <li>Josh Anaya</li>
                    <li>Tucker Craft</li>
                    <li>Hues Gibbson</li>
                    <li>Richard Grau </li>
                    <li>Max Hightower</li>
                    <li>William Hinson </li>
                    <li>Nathan Koehler</li>
                    <li>Andrew Phillips </li>
                    <li>Elliot Schein</li>
                    <li>Meyer Stellmen</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Alpha Zeta (2021)</h2>
                  <ul class="list-disc ml-6">
                    <li>Preston Rhea</li>
                    <li>Moses Horne</li>
                    <li>Gozer Knecht</li>
                    <li>Vaughn Kohl</li>
                    <li>Travis Mewborne</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Alpha Epsilon (2020)</h2>
                  <ul class="list-disc ml-6">
                    <li>Preston Rhea</li>
                    <li>Moses Horne</li>
                    <li>Gozer Knecht</li>
                    <li>Vaughn Kohl</li>
                    <li>Travis Mewborne</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Alpha Delta (2019)</h2>
                  <ul class="list-disc ml-6">
                    <li>Oliver Chapin-Eiserloh</li>
                    <li>Nathan Glancy</li>
                    <li>Kareem Hinedi</li>
                    <li>Michael Leonard</li>
                    <li>Benjamin Malik</li>
                    <li>Ian Nielsen</li>
                    <li>Quinn Owyang</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Alpha Gamma (2018)</h2>
                  <ul class="list-disc ml-6">
                    <li>Lamonte Brooks</li>
                    <li>Joel Campbell</li>
                    <li>Ethan Courtman</li>
                    <li>Austin Davidson</li>
                    <li>Alex Hicks</li>
                    <li>Andrew Ladd</li>
                    <li>Ethan Thomas</li>
                    <li>Sam Turner</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Alpha Beta (2017)</h2>
                  <ul class="list-disc ml-6">
                    <li>Quinn Butterfield</li>
                    <li>Evan Johnson</li>
                    <li>Nick Smetzer</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Alpha Alpha (2016)</h2>
                  <ul class="list-disc ml-6">
                    <li>Dalton Flood</li>
                    <li>Tyler Herron</li>
                    <li>Akira Kumahata</li>
                    <li>Karl Menzel</li>
                    <li>Cheyne Minto</li>
                    <li>Marcus Whitten</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Psi (2014)</h2>
                  <ul class="list-disc ml-6">
                    <li>Alec Barnett</li>
                    <li>Alejandro Cabezut</li>
                    <li>Ron Dendy</li>
                    <li>Shree Deshpande</li>
                    <li>Ryan Diller</li>
                    <li>Daniel Garrick</li>
                    <li>Josh Humphries</li>
                    <li>Andrew Miner</li>
                    <li>Akil Udawala</li>
                    <li>Carl Warren</li>
                    <li>Austen Yorko</li>
                    <li>Conor Young</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Chi (2013)</h2>
                  <ul class="list-disc ml-6">
                    <li>Will Freeman</li>
                    <li>Stephen Sedia</li>
                    <li>Mac Sowers</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Phi (2012)</h2>
                  <ul class="list-disc ml-6">
                    <li>Evan Brooks</li>
                    <li>Alex Holmes</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Upsilon (2011)</h2>
                  <ul class="list-disc ml-6">
                    <li>Kevin Britt</li>
                    <li>Alex Butler</li>
                    <li>Steven Defreitas</li>
                    <li>Sam Elder</li>
                    <li>Matt Hawley</li>
                    <li>Zach Lucas</li>
                    <li>Ryan Rabat</li>
                    <li>Reggie Sanders</li>
                    <li>Stephen Sissons</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Tau (2010)</h2>
                  <ul class="list-disc ml-6">
                    <li>Wilson Dang</li>
                    <li>Neal Galloway</li>
                    <li>Josh Latto</li>
                    <li>Chance Raymond</li>
                    <li>Scott Riggle</li>
                    <li>Judson Rose</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Sigma (2009)</h2>
                  <ul class="list-disc ml-6">
                    <li>David McDonald</li>
                    <li>Thomas Outzen</li>
                    <li>Ulises Pastran</li>
                    <li>Phil Repsher</li>
                    <li>Erik Stendebach</li>
                    <li>Allen Trang</li>
                    <li>Eric Zipf</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Rho (2008)</h2>
                  <ul class="list-disc ml-6">
                    <li>Brad Sheppard</li>
                    <li>Jeremy Sherby</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Pi (2007)</h2>
                  <ul class="list-disc ml-6">
                    <li>Ben Bachus</li>
                    <li>Adam Sanchez-Guerrero</li>
                    <li>Cameron Hill</li>
                    <li>Cameron Meyer</li>
                    <li>Austin Murr</li>
                    <li>Brian Rusk</li>
                    <li>Patrick Spence</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Omicron (2006)</h2>
                  <ul class="list-disc ml-6">
                    <li>Graeme Baxter</li>
                    <li>Mike Hall</li>
                    <li>Andrew Thompson</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Xi (2005)</h2>
                  <ul class="list-disc ml-6">
                    <li>Kellan Caldwell</li>
                    <li>John Davis</li>
                    <li>Alex Goren</li>
                    <li>Brian Halbert</li>
                    <li>Brandon Hoerl</li>
                    <li>Hunter Mabrey</li>
                    <li>Ross Rocketto</li>
                    <li>Ryan Thorpe</li>
                    <li>Bobby Whitlow</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Nu (2004)</h2>
                  <ul class="list-disc ml-6">
                    <li>Chris DeFelice</li>
                    <li>Scott LaPlante</li>
                    <li>Cody Sparks</li>
                    <li>Ryan Wilbraham</li>
                    <li>Andrew Winklemann</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Mu (2003)</h2>
                  <ul class="list-disc ml-6">
                    <li>Will Clark</li>
                    <li>David Hobson</li>
                    <li>Zach McGaugh</li>
                    <li>Ben McMullen</li>
                    <li>Randy Shoup</li>
                    <li>Brad Sides</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Lambda (2002)</h2>
                  <ul class="list-disc ml-6">
                    <li>Jason Atkinson</li>
                    <li>Matt Brodie</li>
                    <li>Brandon Fitzgerald</li>
                    <li>Chris Foglesong</li>
                    <li>Justin Linick</li>
                    <li>Matt McAuliff</li>
                    <li>Matthew Pilon</li>
                    <li>Evan Pounds</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Kappa (2001)</h2>
                  <ul class="list-disc ml-6">
                    <li>Grayson Pool</li>
                    <li>John Talamantez</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Iota (2000)</h2>
                  <ul class="list-disc ml-6">
                    <li>John Cooper</li>
                    <li>Jay Madhani</li>
                    <li>Robert Markley</li>
                    <li>Ryan McKenna</li>
                    <li>Howard Wilen</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Theta (1999)</h2>
                  <ul class="list-disc ml-6">
                    <li>Jack Bonner</li>
                    <li>Alan Crane</li>
                    <li>Benjamin Deaver</li>
                    <li>Adam Egly</li>
                    <li>Ben Gurwitz</li>
                    <li>Robert Pate</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Eta (1998)</h2>
                  <ul class="list-disc ml-6">
                    <li>Adam Bunch</li>
                    <li>Eric Cline</li>
                    <li>Jeffery Fancher</li>
                    <li>Mike Hobson</li>
                    <li>Jeff Holy</li>
                    <li>Benji Hyland</li>
                    <li>Brian Lowenberg</li>
                    <li>Adam Muffett</li>
                    <li>Jay Rumisek</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Zeta (1997)</h2>
                  <ul class="list-disc ml-6">
                    <li>Robert Cowart</li>
                    <li>Marty Miller</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Epsilon (1996)</h2>
                  <ul class="list-disc ml-6">
                    <li>Seth Green</li>
                    <li>Kendall Hollrah</li>
                    <li>Matt Lonesk</li>
                    <li>Nathan Roach</li>
                    <li>Ben Thompson</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Delta (1995)</h2>
                  <ul class="list-disc ml-6">
                    <li>Mike Clark</li>
                    <li>Ethan Cohen</li>
                    <li>Randall Lahann</li>
                    <li>Kalan McEuen</li>
                    <li>Chris O'Neal</li>
                    <li>Mike Rugh</li>
                    <li>Matt Zimmerman</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Gamma (1994)</h2>
                  <ul class="list-disc ml-6">
                    <li>Andy Arana</li>
                    <li>Dan Bauer</li>
                    <li>Johnathan Clay</li>
                    <li>Steve Cline</li>
                    <li>Russ Clinton</li>
                    <li>Doug Conyers</li>
                    <li>Jason Cooper</li>
                    <li>Eric Dutcher</li>
                    <li>Sean Elfstrom</li>
                    <li>Dan Hadad</li>
                    <li>Jason Klein</li>
                    <li>Mark Langsdorf</li>
                    <li>Nate Lepley</li>
                    <li>Brian McNichols</li>
                    <li>Joe Robledo</li>
                    <li>Mike Walloch</li>
                    <li>Chris White</li>
                    <li>Scott Wilson</li>
                    <li>Jason Wolford</li>
                    <li>Charles Youngson</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Beta (1993)</h2>
                  <ul class="list-disc ml-6">
                    <li>Alex Blosser</li>
                    <li>Scott Clausen</li>
                    <li>David Cuellar</li>
                    <li>Grady English</li>
                    <li>Cody Jones</li>
                    <li>Jason Kapp</li>
                    <li>Graham Karlin</li>
                    <li>Dave Molloy</li>
                    <li>Greg Poulter</li>
                    <li>Chris Villa</li>
                  </ul>
                </div>

                <div class="w-full">
                  <h2 class="text-2xl font-bold">Alpha (1992)</h2>
                  <ul class="list-disc ml-6">
                    <li>John Antioco</li>
                    <li>Steve Bark</li>
                    <li>Doug Black</li>
                    <li>Steve Gotts</li>
                    <li>Jeff Haggard</li>
                    <li>Aaron Huffman</li>
                    <li>Justin Lombard</li>
                    <li>Jason Meyers</li>
                    <li>Steve Obrey</li>
                    <li>James Patrick</li>
                    <li>Patrick Sims</li>
                    <li>Ray Slanina</li>
                    <li>Bryan Smith</li>
                    <li>Corey Snipes</li>
                    <li>Ronald Stephens</li>
                    <li>Jim Taylor</li>
                    <li>Dan Tedford</li>
                    <li>Dave Timberger</li>
                    <li>Wayne Walker</li>
                    <li>Brian Weyant</li>
                    <li>Matt Wheelock</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          


          
        {/*Footer*/}
        <section class="p-20">
          
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