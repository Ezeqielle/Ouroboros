var BnetStrategy = require('passport-bnet').Strategy;
var BNET_ID = process.env.BNET_ID;
var BNET_SECRET = process.env.BNET_SECRET;
var passport = require('passport');

passport.use(new BnetStrategy({
    clientID: BNET_ID,
    clientSecret: BNET_SECRET,
    callbackURL: "https://localhost/auth/bnet/callback",
    region: "eu"
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));