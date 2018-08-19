import Q from 'q';
import User from './user.model';

export default {
  getByEmail,
  create,
  remove
};

function getByEmail(email) {
  const deferred = Q.defer();
  User.findOne({ email }, (err, user) => {
    if (err) deferred.reject(err);

    deferred.resolve(user);
  });

  return deferred.promise;
}

function create(email, password, role) {
  const deferred = Q.defer();

  const newUser = new User({
    email,
    password,
    role
  });

  newUser.save((err, user) => {
    if (err) deferred.reject(err);

    deferred.resolve(user);
  });

  return deferred.promise;
}

function remove(id) {
  const deferred = Q.defer();
  User.remove({ _id: id }, (err, user) => {
    if (err) deferred.reject(err);

    deferred.resolve(user);
  });

  return deferred.promise;
}
