export type Category =
  | '전체보기'
  | '남성의류'
  | '여성의류'
  | '잡화ㆍ액세서리'
  | '신발'
  | '스포츠'
  | '도서'
  | '전자기기ㆍ디지털'
  | '가구ㆍ인테리어'
  | '가전'
  | '기타'

export type Status = 'TRADE_AVAILABLE' | 'RESERVED' | 'TRADE_COMPLETE'

export type PriceRange =
  | '전체보기'
  | '~ 1만원'
  | '1만원 ~ 5만원'
  | '5만원 ~ 10만원'
  | '10만원대'
  | '20만원대'
  | '30만원대'
  | '40만원대'
  | '50만원 이상'
