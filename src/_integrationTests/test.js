import moxios from "moxios";
import { testStore } from "./../utils";
import { fetchPosts } from "./../actions";

describe("fetchPosts action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("store is updated correctly", () => {
    const expectedState = [
      {
        title: "Example title 1",
        body: "Some text",
      },
      {
        title: "Example title 2",
        body: "Some text",
      },
      {
        title: "Example title 3",
        body: "Some text",
      },
    ];

    const store = testStore();

    //testing with moxios
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: expectedState });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
