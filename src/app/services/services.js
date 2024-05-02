import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail,
  sendEmailVerification,
  db,
  doc,
  getDoc,
  getDocs,
  collection,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  query,
  where,
  onSnapshot,
} from "./api";

export const access = async (name) => {
  const colRef = collection(db, "users");
  const result = await getDocs(query(colRef, where("name", "==", name)));
  if (result.size === 0) {
    const a = await addDoc(colRef, { name });
    return a.id;
  }
  return result.docs[0].id;
};

export const getTasks = async (idUser) => {
  const colRef = collection(db, "users", idUser, "tasks");
  const result = await getDocs(query(colRef));
  return getArrayFromCollection(result);
};

const getArrayFromCollection = (collection) => {
  return collection.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};

export const createTask = async (userId, obj) => {
  console.log(userId, obj);
  const colRef = collection(db, "users", userId, "tasks");
  const data = await addDoc(colRef, obj);
  return data.id;
};
