import {
  createTuit,
  deleteTuit, findAllTuits,
  findTuitById, findTuitByUser
} from "../services/tuits-service";

describe('can create tuit with REST API', () => {
  /**const aliceTuit = {
    tuit: "this is a test tuit",
    user: "6209970291a4560bc63f1e0a"
  };

  test('can insert new tuit with REST API', async () => {
    const newTuit = await createTuit(aliceTuit);
    expect(newTuit.tuit).toEqual("this is a test tuit");
    expect(newTuit.user).toEqual("6209970291a4560bc63f1e0a");
  });
  */
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