import constants from '../constants'
import {YouTubeService} from '../services/youtubeService.service'

const YOUTUBE_API_KEY = constants.YOUTUBE_API_KEY
const YOUTUBE_API_URL = constants.YOUTUBE_API_URL

export const YoutubeServiceInjectables: Array<any> = [
  {provide: YouTubeService, useClass: YouTubeService},
  {provide: YOUTUBE_API_KEY, useValue: constants.YOUTUBE_API_KEY},
  {provide: YOUTUBE_API_URL, useValue: constants.YOUTUBE_API_URL}
]
