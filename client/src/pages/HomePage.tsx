/***@jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useEffect } from 'react'
import MainStudylist from '../components/main/MainStudyList'
import { loadToken } from '../utils/authCheck'
import { useObserver } from 'mobx-react'
import { Carousel } from 'antd'

const HomePage = () => {
  useEffect(() => {
    loadToken()
  }, [])

  const images = [
    'images/1080_360_1.jpeg',
    'images/1080_360_2.jpg',
    'images/1080_360_3.jpg',
    'images/1080_360_4.jpg',
    'images/1080_360_5.jpg',
    'images/1080_360_6.jpg'
  ]
  return useObserver(() => (
    <div>
      <Carousel autoplay autoplaySpeed={3000}>
        {images.map((imageURL: string, index: number) => (
          <div>
            <img
              src={imageURL}
              alt={`people studying ${index}`}
              key={index}
              css={css`
                width: 100%;
              `}
            ></img>
          </div>
        ))}
      </Carousel>

      <MainStudylist />
    </div>
  ))
}

export default HomePage