'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'

const MenuButton = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="dark:bg-white" variant={null}>
          <Image className="w-7 h-7" src={Assets.menuIcon} alt="menu" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <Link href={AppPath.cards()}>
            <DropdownMenuItem>전체 물건 보기</DropdownMenuItem>
          </Link>
          {isLoggedIn && (
            <>
              <Link href={AppPath.myCards()}>
                <DropdownMenuItem>내 물건 목록</DropdownMenuItem>
              </Link>
              <Link href={AppPath.myDibs()}>
                <DropdownMenuItem>내 찜 목록</DropdownMenuItem>
              </Link>
              <Link href={AppPath.chatRooms()}>
                <DropdownMenuItem>채팅 목록</DropdownMenuItem>
              </Link>
            </>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MenuButton
