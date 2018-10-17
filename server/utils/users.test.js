const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }];
  });

  it('should add new users', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Cees',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var julie = users.removeUser('3');

    expect(julie.id).toEqual('3');
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var nobody = users.removeUser('4');

    expect(nobody).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var jen = users.getUser('2');

    expect(jen.id).toEqual('2');
  });

  it('should not find user', () => {
    var nobody = users.getUser('420');

    expect(nobody).toNotExist();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });
});
