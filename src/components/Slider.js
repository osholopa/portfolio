import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import './Slider.css'
import { icons } from '../data/icons' //eslint-disable-line
import ButtonLink from './ButtonLink'

export default function Slider({ slides }) {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) return null

  return (
    <section className="slider">
      <IoIosArrowBack className="left-arrow" onClick={prevSlide} />
      <IoIosArrowForward className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide-active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div className="slide-img-container">
                <img src={slide.img} alt="slide" className="image" />
                <ButtonLink
                  anchor
                  className="slide-btn"
                  text="Read more"
                  href={`/projects#${slide.title.replace(/\s+/g, '-').toLowerCase()}`}
                  endIcon={<IoIosArrowForward/>}
                />
                <div className="icons">
                  {slide.tech.map((tech, index) => {
                    const iconObject = icons.find(
                      iconObject => iconObject.label === tech
                    )
                    return (
                      <div style={{margin: '0px 10px'}} key={index}>
                        {iconObject.icon}
                        <p style={{ display: 'inline' }}>{iconObject.label}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </section>
  )
}
