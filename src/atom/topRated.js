import { atom } from "recoil";

export const topRated = atom({
  key: "topRatedKey",
  default: "",
  effects: [
    ({ setSelf, onSet }) => {
      const movieKey = "movieid";
      const savedValue = localStorage.getItem(movieKey);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(movieKey)
          : localStorage.setItem(movieKey, JSON.stringify(newValue));
      });
    },
  ],
});
