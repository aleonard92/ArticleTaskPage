import { useEffect, useState } from "react";

function BackToTop() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.onscroll = function () { scrollFunction() };
  }, [scrollFunction])

  function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }

    // const el = document.getElementById('value')

    // if (isInViewport(el)) {
    //   console.log('esta :', el)
    // }



  }

  function isInViewport(elem) {
    var distance = elem.getBoundingClientRect();
    return (
      distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0
    );
  }

  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div id="top" className={`back-to-top fixed right-14 bottom-14 w-11 ${showButton ? 'block' : 'hidden'}`}>
      <button className="" onClick={topFunction}>
        <img src="/images/up.svg" alt="" />
      </button>
    </div>
  )

}

export default BackToTop;
