export default class UserRepository {
  constructor (dao) {
    this.dao = dao
  }
  getAll = () => {
    return this.dao.getAll();
  }
  getByUsername = (username) => {
    return this.dao.findByUsername(username);
  }
  save = (user) => {
    return this.dao.save(user);
  }
  update = (filter, value) => {
    return this.dao.update(filter, value);
  }
}