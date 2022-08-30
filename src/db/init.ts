require('dotenv').config()

import { Properties, Users, Feeds, SetRules, FeedProperties, Rules } from './models'

const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV !== 'test'

const dbInit =  async () => Promise.all([
  await Users.sync({ alter: isDev || isTest }),
  await Properties.sync({ alter: isDev || isTest }),
  await Feeds.sync({ alter: isDev || isTest }),
  await FeedProperties.sync({ alter: isDev || isTest }),
  await SetRules.sync({ alter: isDev || isTest }),
  await Rules.sync({ alter: isDev || isTest }),
])

export default dbInit 
