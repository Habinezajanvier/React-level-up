import { storage, firestore } from "../firebase/config";

const fileAction = (file) => ({
  type: "ADD_FILE",
  payload: file,
});

const setProgress = (progress) => ({
  type: "SET_PROGRESS",
  payload: progress,
});

export const setDocs = (docs) => ({
  type: "SET_DOCS",
  payload: docs,
});

export const uploadError = (error) => ({
  type: "SET_ERROR",
  payload: error,
});

export const fileUpload = (file) => {
  const storageRef = storage.ref(file.name);
  const collectionRef = firestore.collection("images");
  return (dispatch) => {
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        dispatch(setProgress(percentage));
      },
      (error) => {
        dispatch(uploadError(error));
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const timeStamp = Date.now();
        await collectionRef.add({ url, timeStamp });
        dispatch(fileAction(url));
      }
    );
  };
};
