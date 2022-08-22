import { useState } from 'react'
import { Link } from 'react-router-dom';
import InputSearch from '../InputSearch';


const Header = () => {
  const [searchKey, setSearchKey] = useState('')
  return (
    <header className='container mx-auto fixed top-0 right-0 left-0 w-full z-50 px-2 md:px-12 '>
      <nav className="bg-white py-2.5 max-h-[76px] relative flex justify-between">
        <Link to={'/'}>
          <div className="logo">
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
              alt=""
            />
          </div>
        </Link>
        
        <div>
          <InputSearch />
        </div>
      </nav>
    </header>
  )
}

export default Header;
