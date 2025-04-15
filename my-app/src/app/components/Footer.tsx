import React from 'react'

const Footer = () => {
  return (
    <div className=''>
       <footer className="bg-gradient-to-r from-black via-red-950 to-black text-red-600 w-screen items-center">
      <div className="container mx-auto px-6 py-10">
       
        
        <div className="flex flex-wrap justify-between items-start space-y-6 md:space-y-0">
        
          
          <div>
            <h1 className="text-4xl font-bold text-red-600">NETFLIX</h1>
          
          </div>

          <div className='mr-11'>
            <h3 className=" text-sm text-white ml-24">Ready to watch? Enter your email to create or restart your membership.</h3>
            <form className="mt-4">
              <div className="flex ">
                <input
                  type="email"
                  placeholder="Email address"
                  className="p-2 w-full border text-white bg-transparent rounded-sm focus:ring-red-900 focus:ring "
                />
                <button
                  type="submit"
                  className="bg-dark-100 ml-2 text-white rounded-sm font-semibold  px-4 py-2 rounded-r-md border  hover:bg-red-700"
                >
                  Subscribe
                </button>
              </div>
             
              
          <div className="flex flex-wrap mt-20 space-x-16">

      
            <div className=''>
              <h3 className=" text-white text-xl">Company Info</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-white ">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Investor Relations</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Speed Test</a></li>
              </ul>
            </div>
           
       
            <div>
              <h3 className=" text-white text-xl">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Jobs</a></li>
                <li><a href="#" className="hover:text-white">Cookie Preferences</a></li>
                <li><a href="#" className="hover:text-white">Legal Notices</a></li>
              </ul>
            </div>
          
            <div>
              <h3 className=" text-white text-xl">Features</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-white">Account</a></li>
                <li><a href="#" className="hover:text-white">Ways to Watch</a></li>
                <li><a href="#" className="hover:text-white">Corporate Information</a></li>
                <li><a href="#" className="hover:text-white">Only on Netflix</a></li>
              </ul>
            </div>
      
         
            <div>
              <h3 className=" text-white text-xl">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-white">Media Center</a></li>
                <li><a href="#" className="hover:text-white">Term of Use</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">We are Hiring</a></li>
              </ul>
            </div>
          </div>

         
        
              
            </form>
          </div>
        </div>
        <div className="mt-10  pt-4 text-center -mb-2   text-lg text-white">
          All Right Reserved@
        </div>
        <div className="  pt-4 text-center    text-lg text-white">
          Netflix Pakistan
        </div>
      </div>
    </footer>
    </div>
  )
}
export default Footer