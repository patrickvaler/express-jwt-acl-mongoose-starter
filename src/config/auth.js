import passport from 'passport';
import passportJwt from 'passport-jwt';
import User from '../api/user/user.model';
import config from './config';

export default {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt', { session: config.jwt.session }),
    setJwtStrategy
};

function setJwtStrategy() {
    const opts = {
        jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeader(),
        secretOrKey: config.jwt.secret,
        passReqToCallback: true
    };
    const strategy = new passportJwt.Strategy(opts, (req, jwtPayload, done) => {
        const _id = jwtPayload.id;

        User.findOne({ _id }, (err, user) => {
            if (err) done(err, false);
            done(null, user || false);
        });
    });

    passport.use(strategy);
}
