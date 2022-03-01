import {
  createTuit,
  deleteTuit, findAllTuits,
  findTuitById, findTuitByUser
} from "../services/tuits-service";

import {createUser} from "../services/users-service"

describe('can create tuit with REST API', () => {
  const xena = {
    username = 'xena',
    password = 'gabrielle',
    email = 'xena@wp.com'
  };

  test('testing new user insert from tuits service', async () => {
    // insert new user in the database
    const newUser = await createUser(xena);

    // verify inserted user's properties match parameter user
    expect(newUser.username).toEqual(xena.username);
    expect(newUser.password).toEqual(xena.password);
    expect(newUser.email).toEqual(xena.email);
  });
});

describe('can delete tuit wtih REST API', () => {
  // TODO: implement this
});

describe('can retrieve a tuit by their primary key with REST API', () => {
  // TODO: implement this
  test('can retrieve tuits by user', async () => {
    const existingTuits = await findTuitByUser("6209970291a4560bc63f1e0a")
  })
});

describe('can retrieve all tuits with REST API', () => {
  // TODO: implement this
});