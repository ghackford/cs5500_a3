import Tuit from "../components/tuits";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits} from "../services/tuits-service";
import axios from "axios";

jest.mock('axios');

const tuitTesterA = "6229842538f323b59cbcb994"
const tuitTesterB = "6229843638f323b59cbcb996"
const tuitA = "6229890938f323b59cbcb9a4"
const tuitB = "62298a2138f323b59cbcb9a6"
const MOCKED_TUITS = [
  {_id: tuitA, tuit: "testerA's tuit", postedBy: tuitTesterA, postedOn: "2022-03-10T05:13:45.178+00:00"},
  {_id: tuitB, tuit: "testerB's tuit", postedBy: tuitTesterB, postedOn: "2022-03-10T05:18:25.967+00:00"}
];

test('tuit list renders static tuit array', () => {
  render(
    <HashRouter>
      <Tuit tuits={MOCKED_TUITS}/>
    </HashRouter>);
  const linkElement = screen.getByText(/testerA/i);
  expect(linkElement).toBeInTheDocument();
});

// tuit list renders async test in /src/tests/tuit-list-mock.test.js

test('tuit list renders mocked', async () => {
  axios.get.mockImplementation(() =>
    Promise.resolve({data: {tuits: MOCKED_TUITS} }));
  const response = await findAllTuits();
  const tuits = response.tuits;

  render(
    <HashRouter>
      <Tuit tuits={tuits}/>
    </HashRouter>);
  
  const tuit = screen.getByText(/testerB/i);
  expect(tuit).toBeInTheDocument();
});
