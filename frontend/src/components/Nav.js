import React from 'react';

const Nav = () => {
  return (
    <div>
    	<ul className='flex bg-stone-100 cursor-pointer'>
    		<li className='mx-3 my-4 text-2xl text-slate-900 hover:text-slate-700 transition'>Test Portfolio</li>
    		<li className='mx-3 my-5 text-slate-900 hover:text-slate-700 transition'>Education</li>
    		<li className='mx-3 my-5 text-slate-900 hover:text-slate-700 transition'>Work Experience</li>
    		<li className='mx-3 my-5 text-slate-900 hover:text-slate-700 transition'>Portfolio</li>
    	</ul>
    </div>
  )
}

export default Nav;