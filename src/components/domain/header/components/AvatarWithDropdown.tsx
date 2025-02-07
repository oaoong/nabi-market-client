'use client'

import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import Button from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import AppPath from '@/config/appPath'
import { Environment } from '@/config/environment'
import { DEFAULT_PROFILE_IMG } from '@/constants/image'
import apiClient from '@/services/apiClient'

const AvatarWithDropdown = ({ imageUrl }: { imageUrl?: string }) => {
  const onClickLogout = () => {
    Cookies.remove(Environment.tokenName())
    Cookies.remove(Environment.refreshTokenName())
    apiClient.setDefaultHeader('Authorization', '')
    location.reload()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={null}>
          <Avatar size="md">
            <AvatarImage
              alt="profile"
              imgUrl={imageUrl ?? DEFAULT_PROFILE_IMG}
            />
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute -right-5">
        <DropdownMenuGroup>
          <Link href={AppPath.mypage()}>
            <DropdownMenuItem>마이페이지</DropdownMenuItem>
          </Link>
          <Link href={AppPath.newCard()}>
            <DropdownMenuItem>새 물건 등록하기</DropdownMenuItem>
          </Link>
          <DropdownMenuItem onClick={onClickLogout} tabIndex={0}>
            로그아웃
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AvatarWithDropdown
