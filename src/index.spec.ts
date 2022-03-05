import * as Feature from "./index";

describe("feature", () => {
  describe("getUser", () => {
    it("when input id, then return user who matched user's id", () => {
      const params: Parameters<typeof Feature.getUser>[0] = {
        id: "2ECD91BB-F062-4EF5-ACA7-94808EB48150",
        users: [
          {
            name: "田中太郎",
            age: 30,
            id: "2ECD91BB-F062-4EF5-ACA7-94808EB48150",
          },
          {
            name: "田中二郎",
            age: 20,
            id: "0EB34E81-7F5C-4405-A98B-B67EFD3D6B2F",
          },
        ],
      };

      const result = Feature.getUser(params);

      expect(result).toStrictEqual({
        age: 30,
        id: "2ECD91BB-F062-4EF5-ACA7-94808EB48150",
        name: "田中太郎",
      });
    });
  });
});
