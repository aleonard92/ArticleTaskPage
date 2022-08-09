import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Aos from "aos";

import ArticleWrapper from "./components/ArticleWrapper/ArticleWrapper";
import Header from "./components/Header";
import Heading from "./components/Heading";
import SectionWrapper from "./components/SectionWrapper/SectionWrapper";
import Advantage from "./components/Advantage/Advantage";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop";


function App() {
  const { t } = useTranslation('whitepaper')

  const heading = {
    title: t('heading.title'),
    text: t('heading.text')
  }
  const information = [
    {
      id: 'value',
      image: { type: 'animate', path: '/images/value/value.json' },
      title: t('information.value.title'),
      text: t('information.value.text'),
      head: t('information.value.head')
    },
    {
      id: 'eco',
      image: '/images/coins.jpg',
      title: t('information.ecom.title'),
      text: t('information.ecom.text')
    },
    {
      id: 'mining',
      image: { type: 'animate', path: '/images/miner/miner.json' },
      title: t('information.mining.title'),
      text: t('information.mining.text')
    },
  ]
  const advantages = [
    {
      image: '/images/cards/1.svg',
      title: t('advantages.environment.title'),
      text: t('advantages.environment.text')
    },
    {
      image: '/images/cards/2.svg',
      title: t('advantages.decentralized.title'),
      text: t('advantages.decentralized.text')
    },
    {
      image: '/images/cards/3.svg',
      title: t('advantages.energy.title'),
      text: t('advantages.energy.text')
    },

  ]
  const ecoM =
  {
    id: 'reg',
    image: { type: 'animate', path: '/images/crear_cuenta/crear_cuenta.json' },
    title: t('join'),
    btn: t('signup')
  }


  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <main className="container mx-auto mt-14 pt-6 overflow-hidden px-2 md:px-12">
          <Heading heading={heading} />

          {
            information.map((article, index) => (
              <SectionWrapper key={index} id={article.id}>
                <ArticleWrapper
                  image={article.image}
                  title={article.title}
                  text={article.text}
                  head={article.head ? article.head : ''}
                  i={index}
                />
              </SectionWrapper>
            ))
          }
          <Advantage advantages={advantages} />
          <SectionWrapper id={ecoM.id}  >
            <ArticleWrapper image={ecoM.image} title={ecoM.title} text={ecoM.text} i={1} btn={ecoM.btn} />
          </SectionWrapper>
          <div id="toend"></div>
          <BackToTop />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
