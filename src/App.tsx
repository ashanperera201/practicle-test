import React, { useRef, useEffect, useState } from 'react';
import { data } from './shared/data';
import WelcomeSection from './shared/components/Sections/WelcomeSection';
import SecondarySection from './shared/components/Sections/SecondarySection';


function App() {

  const sectionsRef: any = useRef([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.deltaY > 0) {
        // Scrolling down
        setCurrentSectionIndex((prevIndex) => Math.min(prevIndex + 1, sectionsRef.current.length - 1));
      } else {
        // Scrolling up
        setCurrentSectionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      }
    };

    document.addEventListener('wheel', handleKeyDown);

    return () => {
      document.removeEventListener('wheel', handleKeyDown);
    };
  }, []);

  const scrollToSection = (index: any) => {
    if (sectionsRef.current[index]) {
      sectionsRef.current[index].scrollIntoView();
    }
  };

  useEffect(() => {
    scrollToSection(currentSectionIndex);
  }, [currentSectionIndex]);

  const onSectionClickHandler = (): void => {
    setCurrentSectionIndex((prevIndex) => Math.min(prevIndex + 1, sectionsRef.current.length - 1));
  }

  return (
    <>
      <div>
        {
          data.map((el, index) => (
            <div key={el.id} className={`section ${index === currentSectionIndex ? 'active' : ''}`} ref={(el) => (sectionsRef.current[index] = el)}>
              {
                el.id === 0 ? (
                  <>
                    <WelcomeSection onClick={onSectionClickHandler} />
                  </>
                ) : (
                  <>
                    <SecondarySection onClick={onSectionClickHandler} descriptiveList={el.tiles} />
                  </>
                )
              }

              {

                <>
                  <div className='max-sm:hidden flex absolute right-0 flex-col gap-3 items-end'>
                    <>
                      {
                        data.map((el, i) => (
                          <>
                            <div className={`side-nav ${i === index ? 'side-nav__active' : 'side-nav__non-active'}`}></div>
                          </>
                        ))
                      }
                    </>
                  </div>
                </>
              }
            </div>
          ))
        }
      </div>
    </>
  );
}

export default App;
