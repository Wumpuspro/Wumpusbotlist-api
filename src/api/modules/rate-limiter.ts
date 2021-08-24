import rateLimit from 'express-rate-limit';
import RateLimitStore from 'rate-limit-mongo';

export default rateLimit({
  max: 300,
  message: 'You are being rate limited.',
  store: new RateLimitStore({
    uri: process.env.MONGO_URI || 'mongodb+srv://beta-test:NePaL123@classic.as7wj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  }),
  windowMs: 60 * 1000
});
