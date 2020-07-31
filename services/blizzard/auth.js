const BnetStrategy = require('passport-bnet').Strategy;
const BNET_ID = process.env.BNET_ID;
const BNET_SECRET = process.env.BNET_SECRET;
const passport = require('passport');

// Use the BnetStrategy within Passport.
passport.use(
    new BnetStrategy({
        clientID: BNET_ID,
        clientSecret: BNET_SECRET,
        scope: "wow.profile sc2.profile",
        callbackURL: "https://localhost/auth/bnet/callback"
    }, (accessToken, refreshToken, profile, done) => {
        process.nextTick(() => {
            return done(null, profile);
        });
    })
);