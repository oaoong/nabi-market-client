import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import koLocale from 'date-fns/locale/ko'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Badge from '@/components/ui/badge'
import AppPath from '@/config/appPath'
import { CATEGORY_OBJS, TRADE_STATUS_OBJS } from '@/constants/card'
import { useAuth } from '@/contexts/AuthProvider'
import { TYPOGRAPHY } from '@/styles/sizes'
import { CardDetail } from '@/types/card'
import { cn } from '@/utils'
import { getQueryParams } from '@/utils/getQueryParams'
import { getValueByKey } from '@/utils/getValueByKey'
import Dibs from './Dibs'
import MoreButton from './MoreButton'

type DescriptionSectionProps = {
  cardData: CardDetail
  authorId: number
}

type TradeStateMap = {
  [key: string]: {
    style: 'primary' | 'secondary' | 'gradation' | 'information'
  }
}

const DescriptionSection = ({
  cardData: {
    status,
    cardTitle,
    category,
    createdAt,
    dibCount,
    isMyDib,
    content,
    cardId,
  },
  authorId,
}: DescriptionSectionProps) => {
  const { isLoggedIn } = useAuth()
  const { currentUser } = useAuth()
  const router = useRouter()

  const isMyItem = currentUser?.userId === authorId

  const tradeStateMap: TradeStateMap = {
    TRADE_AVAILABLE: {
      style: 'primary',
    },
    RESERVED: {
      style: 'secondary',
    },
    TRADE_COMPLETE: {
      style: 'gradation',
    },
  }
  return (
    <article className="flex flex-col w-full pt-4 pb-8  border-b-[1px] gap-4">
      <div className="flex flex-row items-center">
        <Badge variant={tradeStateMap[status].style}>
          {getValueByKey(TRADE_STATUS_OBJS, status)}
        </Badge>
        <h3 className={cn('ml-2', TYPOGRAPHY.title)}>{cardTitle}</h3>
        {isLoggedIn && isMyItem && (
          <MoreButton cardId={cardId} status={status} />
        )}
      </div>
      <div className="flex flex-row items-center">
        <p
          className={cn(
            'mr-2 text-text-secondary-color',
            TYPOGRAPHY.description,
          )}
        >
          <Link href={`${AppPath.cards()}?${getQueryParams({ category })}`}>
            <u className="cursor-pointer">
              {getValueByKey(CATEGORY_OBJS, category)}
            </u>
          </Link>
        </p>
        <p className={cn('text-text-secondary-color', TYPOGRAPHY.description)}>
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: koLocale,
          })}
        </p>
        {isLoggedIn && (
          <Dibs
            cardId={cardId}
            dibCount={dibCount}
            isMyDib={isMyDib}
            isMyCard={isMyItem}
          />
        )}
      </div>
      <p>{content}</p>
    </article>
  )
}

export default DescriptionSection
