import UserDa from '../user/user.da';
import aclStore from '../../helper/acl-store';


export default {
    login,
    signup
};

function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    UserDa.getByEmail(email)
        .then((user) => {
            user.authenticate(password, (isMatch) => {
                if (!isMatch) res.sendStatus(422);

                user.generateToken(user, (token) => {
                    res.status(201).json({ token });
                });
            });
        })
        .catch(() => res.sendStatus(422));
}

function signup(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    UserDa.create(email, password)
        .then((user) => {
            aclStore.acl.addUserRoles(user._id.toString(), user.role, (err) => {
                if (!err) {
                    res.sendStatus(204);
                }
            });
        })
        .catch(err => res.status(422).json(err));
}
