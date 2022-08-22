import React from 'react'
import { useTranslation } from 'react-i18next'

export default function InputSearch() {
    const { t } = useTranslation('whitepaper')

    return (
      <div>
        <label htmlFor="search" className="block text-sm font-medium text-gray-700">
          {t('search')}
        </label>
        <div className="mt-1 relative flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            placeholder='Search'
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
    )
  }
  