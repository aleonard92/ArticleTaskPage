import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Footer = () => {
  const { t } = useTranslation('whitepaper')

  return (
    <div className="bg-gray-300 flex py-20 ">
      <div className="container mx-auto px-2 md:px-12 flex flex-col md:flex-row justify-between">
        <div className="mx-4  md:max-w-xs lg:max-w-sm">
          <div className=" my-7 mx-4">
            <img src="/logo.svg" alt="" />
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
          <h4 className="text-gray-900 font-bold" >{t('footer.help')}</h4>
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
        <div className="mx-4 lg:min-w-[200px] pt-20">
          <h4 className="text-gray-900 font-bold"  > {t('footer.whitepaper')}</h4>
          <Link className="text-blue-700 font-bold underline underline-offset-4" to='/'> {t('footer.download')}</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer