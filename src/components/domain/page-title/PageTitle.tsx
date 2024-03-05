'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/button'
import Assets from '@/config/assets'

const PageTitle = ({ title }: { title: string }) => {
  const router = useRouter()
  return (
    <div className="grid items-center justify-between w-full h-8 grid-cols-3 my-4">
      <Button variant={null} size={'icon'}>
        <Image
          src={Assets.arrowLeftIcon}
          alt="이전 아이콘"
          className="flex items-center justify-start cursor-pointer"
          onClick={() => router.back()}
        />
      </Button>
      <h2 className="flex items-center justify-center text-xl font-bold whitespace-nowrap">
        {title}
      </h2>
      <div />
    </div>
  )
}
export default PageTitle
