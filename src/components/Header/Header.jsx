import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Link from './Link';

const Header = () => {
  const { t } = useTranslation('whitepaper')
  const [showMenu, setShowMenu] = useState(false);

  let section = document.querySelectorAll('section');
  let lists = document.querySelectorAll('.list');

  const activeLink = useCallback((aLink) => {
    let links = document.querySelectorAll('.list');
    links.forEach((item) => item.classList.remove('header-nav-active'));
    aLink.classList.add('header-nav-active');
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', function () {
      section.forEach(sec => {
        let top = window.scrollY + 200;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          const target = document.querySelector(`[href='/#${id}']`);
          if (target) {
            activeLink(target);
          }
        }
      })
    });
  }, [activeLink, lists, section])

  function toElement(id) {
    const element = document.querySelector(`#${id}`);
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  const Li = ({ children }) => <li className={`${showMenu ? ' mr-4 py-1' : ''} md:mx-2 `}>{children}</li>

  return (
    <header className='container mx-auto fixed top-0 right-0 left-0 w-full z-50 px-2 md:px-12 '>
      <nav className="bg-white py-2.5 max-h-[76px] relative flex justify-between">
        <div className="logo">
          <img className='min-w-[180px] w-[180px]' src='/logo.svg' alt="" />
        </div>
        <div className={`${showMenu ? 'w-full absolute top-14 left-0 right-0 ' : 'hidden '}  md:flex pr-0 py-3 mx-auto  md:pl-6 flex-1 justify-end items-center`}>
          <ul className={`flex ${showMenu ? 'flex-col bg-white px-4' : ''} py-4 flex-row mt-0  text-sm font-medium`}>
            <Li >
              <Link id="l_leht" to="#leht" onClick={() => toElement('leht')}>
                {t('header.leht')}
              </Link>
            </Li>
            <Li >
              <Link id="l_value" to="#value" onClick={() => toElement('value')}>
                {t('header.value')}
              </Link>
            </Li>
            <Li >
              <Link id="l_eco" to="#eco" onClick={() => toElement('eco')}>
                {t('header.eco')}
              </Link>
            </Li>
            <Li >
              <Link id="l_mining" to="#mining" onClick={() => toElement('mining')}>
                {t('header.mining')}
              </Link>
            </Li>
            <Li >
              <Link id="l_advantages" to="#advantages" onClick={() => toElement('advantages')}>
                {t('header.advantages')}
              </Link>
            </Li>
            <Li >
              <Link id="l_download" to="#download" onClick={() => toElement('download')}>
                {t('header.download')}
              </Link>
            </Li>
            <Li >
              <a className='text-white px-4 py-1.5 rounded-2xl' href="http://fyself.com" target="_blanck" style={{backgroundColor: '#1112c0'}}> FySelf</a>
            </Li>

          </ul>
        </div>
        <div className="flex md:order-2">
          <button
            onClick={() => setShowMenu(!showMenu)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header;
