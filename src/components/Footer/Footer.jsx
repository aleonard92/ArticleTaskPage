import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LangSelector from './components/LangSelector'

const Footer = () => {
  const { t } = useTranslation('whitepaper')

  return (
    <div className="bg-gray-300 flex py-20 ">
      <div className="container mx-auto px-2 md:px-12 flex flex-col md:flex-row justify-between">
        <div className="mx-4  md:max-w-xs lg:max-w-sm">
          <div className=" my-7 mx-4">
            <img className='min-w-[180px] w-[180px]' src="/logo.svg" alt="" />
          </div>
          <div className="">
            <p>
              {t('footer.text')}
            </p>
          </div>
          <div className="mt-2 py-4">
            <ul className="flex flex-row flex-1">
              <Link to="https://www.facebook.com/fyselfcom" >
                <img className="social-icon" src="/images/social/facebook.png" alt="" />
              </Link>
              <Link to="https://twitter.com/fyselfcom" >
                <img className="social-icon" src="/images/social/twitter.png" alt="" />
              </Link>
              <Link to="https://www.instagram.com/findyourdigitalself" >
                <img className="social-icon" src="/images/social/instagram.png" alt="" />
              </Link>
              <Link to="https://www.linkedin.com/company/fyselfcom/" >
                <img className="social-icon" src="/images/social/linkedin.png" alt="" />
              </Link>
              <Link to="https://www.youtube.com/channel/UCE9gIWDDfwjvaKU-5t9uXmA" >
                <img className="social-icon" src="/images/social/youtube.png" alt="" />
              </Link>
              <Link to="https://t.me/fyselfcom" >
                <img className="social-icon" src="/images/social/telegram.png" alt="" />
              </Link>
            </ul>
          </div>
        </div>
        <div className="mx-4  pt-20">
          <h4 style={{color: ' #3f3d56 '}}>{t('footer.help')}</h4>
          <ul>
            <li className="text-gray-600">{t('footer.fyself')}</li>
            <li className="text-gray-600">{t('footer.fyself_business')}</li>
            <li className="text-gray-600">{t('footer.about')}</li>
            <li className="text-gray-600">{t('footer.partner')}</li>
            <li className="text-gray-600">{t('footer.legal')}</li>
            <li className="text-gray-600">{t('footer.patro')}</li>
            <li className="text-gray-600">{t('footer.cause')}</li>
            <li className="text-gray-600">{t('footer.blog')}</li>
            <li className="text-gray-600"> {t('footer.copy_r')}</li>
          </ul>
        </div>
        <div id='download' className="mx-4 lg:min-w-[200px] pt-20">
          <div>
            <h4 style={{ color: ' #3f3d56 ' }} > {t('footer.whitepaper')}</h4>
            <a data-aos="fade-up" data-aos-duration="1500" href="/AbstractLehtWhitePapperES.pdf" target="_blanck" className="text-blue-700 font-bold underline underline-offset-4"> {t('footer.download')} </a>
          </div>
          <div className='mt-2'>
            <a data-aos="fade-up" data-aos-duration="1500" href="/LehtWhitePapperES.pdf" target="_blanck" className="text-blue-700 font-bold underline underline-offset-4"> {t('footer.download2')} </a>
          </div>
        </div>
        <div className="mx-4  pt-20">
          <LangSelector/>
        </div>
      </div>
    </div>
  )
}

export default Footer