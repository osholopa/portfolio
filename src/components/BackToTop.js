import React, { useState, useEffect } from 'react'
import { BiUpArrow } from 'react-icons/bi'
import styled from 'styled-components'

const Button = styled.div`
  cursor: pointer;
  padding: 0.8rem;
  position: fixed;
  font-size: 2rem;
  bottom: 20px;
  right: 20px;
  background-color: #4c4c4c1c;
  border-radius: 50%;
  color: 'black';
  z-index: 5;
`

export default function BackToTop() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let mounted = true
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 150
      if (mounted) {
        isTop !== true ? setScrolled(true) : setScrolled(false)
      }
    })
    return () => (mounted = false)
  }, [])

  const backToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div>
      {scrolled && (
        <Button onClick={() => backToTop()}>
          <BiUpArrow />
        </Button>
      )}
    </div>
  )
}
