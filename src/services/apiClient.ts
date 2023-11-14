import { Environment } from '@/config/environment'
import FetchAPI from '@/lib/fetchAPI'

const apiClient = FetchAPI.getInstance()
apiClient.setDefaultHeader('Access-Control-Allow-Origin', '*')
apiClient.setDefaultHeader(
  'Access-Control-Allow-Methods',
  'GET, POST, PUT, DELETE, OPTIONS, HEAD',
)
apiClient.setDefaultHeader(
  'Access-Control-Allow-Headers',
  'Origin, X-Requested-With, Content-Type, Accept, Authorization',
)

export default apiClient
