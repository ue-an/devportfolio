import React from "react";
import {AiFillGithub, AiFillFacebook, AiFillLinkedin} from "react-icons/ai";

const Contacts = () => {
 return (
  <div className="max-w-[1080-px]">
     <section>
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-[1080px] ">
          <div className="md:flex flex-col md:items-start">
           <h2 class="mb-4 text-2xl tracking-tight font-extrabold text-center text-white">Contact Me</h2>
           <div className="mb-4 flex gap-5 justify-center">
           <AiFillGithub className="hover:scale-150 duration-500 hover:text-accent text-white" size={20}/>
           <AiFillFacebook className="hover:scale-150 duration-500 hover:text-accent text-white" size={20}/>
           <AiFillLinkedin className="hover:scale-150 duration-500 hover:text-accent text-white" size={20}/>
          </div>
           <p class="mb-8 lg:mb-16 font-light md:text-left text-center text-gray-500 sm:text-xl">Got a project? Want to send feedback? Need details and want to inquire? Let me know.</p>
          </div>
          <form action="#" class="space-y-8">
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-accent">Your email</label>
                  <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email@sample.com" required />
              </div>
              <div>
                  <label for="subject" class="block mb-2 text-sm font-medium text-accent">Subject</label>
                  <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how I can help you" required />
              </div>
              <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-sm font-medium text-accent">Your message</label>
                  <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" class="py-3 px-5 text-sm font-semibold text-center text-primary rounded-lg bg-accent hover:opacity-50 duration-100">Send message</button>
          </form>
      </div>
     </section>
  </div>
 );
}

export default Contacts;