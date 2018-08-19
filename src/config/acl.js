import Acl from 'acl';
import aclStore from '../helper/acl-store';

const MongodbBackend = Acl.mongodbBackend;

export default dbConnection => {
  const backend = new MongodbBackend(dbConnection, 'acl_');
  const acl = new Acl(backend);

  // Set roles
  acl.allow([
    {
      roles: 'admin',
      allows: [{ resources: '/api/adminonly', permissions: '*' }]
    },
    {
      roles: 'user',
      allows: []
    }
  ]);

  aclStore.acl = acl;
};
