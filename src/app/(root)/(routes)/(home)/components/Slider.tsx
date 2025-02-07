'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { PRICE_RANGE_OBJS } from '@/constants/card'
import { PopularCardsRes } from '@/services/card/card'
import { TYPOGRAPHY } from '@/styles/sizes'
import { getValueByKey } from '@/utils/getValueByKey'
import './index.css'

type PopularCardSliderProps = {
  cardData: PopularCardsRes['data']
}

const PopularCardSlider = ({ cardData }: PopularCardSliderProps) => {
  SwiperCore.use([Navigation, Autoplay])

  return (
    <div className="popular-card-slider">
      <Swiper
        navigation
        loop={true}
        spaceBetween={24}
        slidesPerView={2}
        centeredSlides={true}
      >
        {cardData.cardList.map((v) => (
          <SwiperSlide key={v.cardId}>
            <Link href={`/cards/${v.cardId}`}>
              <Image
                width={0}
                height={0}
                alt="sliderImage"
                src={v.thumbnail}
                style={{ width: '100%' }}
                quality={75}
                layout="responsive"
                loading="eager"
                sizes="(max-width: 640px) 50vw, 480px"
              />
            </Link>
            <div className="flex flex-col items-start p-2 justify-center opacity-40 bg-black rounded-b-[5px] text-white w-full absolute inset-x-0 bottom-0 max-w-[240px] left-2/4 translate-x-[-50%] ">
              <p className={`${TYPOGRAPHY.title}`}>{v.itemName}</p>
              <p className={`${TYPOGRAPHY.description}`}>
                {getValueByKey(PRICE_RANGE_OBJS, v.priceRange)}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default PopularCardSlider
