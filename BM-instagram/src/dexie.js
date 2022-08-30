import Dexie from "dexie";

export const db = new Dexie("myInsta");
db.version(3).stores({
  bio: ",name, about",
  gallery: "++id, url",
});
