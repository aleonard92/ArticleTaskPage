import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { initArticles } from '../../app/reducers/articleReducer'


export default function Card() {
  const { t } = useTranslation('whitepaper')
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles);
  const category = { name: 'Article', href: '#', color: 'bg-indigo-100 text-indigo-800' }

  useEffect(() => {
    dispatch(initArticles())
  }, [dispatch])

  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl sm:tracking-tight">
            {t('welcome')}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
           {t('titleWelcome')}
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {articles.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.urlToImage} alt="" loading='lazy'/>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {category.name}
                  </p>
                  <Link to={`/detail/${post.title}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900 hover:underline">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500 hover:underline">{post.description}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">{post.author}</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {post.author}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
