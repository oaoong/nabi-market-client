import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { usePathname } from 'next/navigation'
import { Environment } from '@/config/environment'
import { getValidateUser } from '@/services/auth/auth'

const useValidate = () => {
  const token = Cookies.get(Environment.tokenName())
  const pathname = usePathname()

  const [isLoggedIn, setIsLoggedIn] = useState(!!token)
  const [currentUser, setCurrentUser] = useState(undefined)

  const { data, isError } = useQuery({
    queryKey: ['validate', token],
    queryFn: async () => await getValidateUser(token),
    enabled: !!token,
  })

  useEffect(() => {
    if (isError) {
      Cookies.remove(Environment.tokenName())
      setIsLoggedIn(() => false)
      setCurrentUser(() => undefined)
    }
    if (data) {
      setIsLoggedIn(() => true)
      setCurrentUser(() => data.data)
    }
    console.log('validate', isLoggedIn, currentUser)
  }, [data, isError, pathname, token])

  return { isLoggedIn, currentUser }
}

export default useValidate
