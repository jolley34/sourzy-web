// src/utils/fetchMedia.ts
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { db, storage } from "../config/firebase";

export const fetchFirestoreData = async <T>(
  collection: string,
  docId: string,
  defaultData: T
): Promise<T> => {
  try {
    const docRef = doc(db, collection, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { ...defaultData, ...docSnap.data() };
    } else {
      console.warn(`No document found in ${collection}/${docId}`);
      return defaultData;
    }
  } catch (error) {
    console.error(
      `Error fetching Firestore data for ${collection}/${docId}:`,
      error
    );
    return defaultData;
  }
};

export const fetchMedia = async (
  folder: string
): Promise<{ mediaType: "image" | "video"; mediaSrc: string }> => {
  try {
    const folderRef = ref(storage, folder);
    const listResult = await listAll(folderRef);

    let mediaSrc = "";
    let mediaType: "image" | "video" = "image";

    if (listResult.items.length > 0) {
      const videoFile = listResult.items.find((item) =>
        /\.(mp4|mov|webm)$/i.test(item.name)
      );
      const imageFile = listResult.items.find((item) =>
        /\.(png|jpg|jpeg|gif)$/i.test(item.name)
      );

      const file = videoFile || imageFile;

      if (file) {
        mediaSrc = await getDownloadURL(file);
        mediaType = videoFile ? "video" : "image";
      }
    }

    return { mediaType, mediaSrc };
  } catch (error) {
    console.error(`Error fetching media from ${folder}:`, error);
    return { mediaType: "image", mediaSrc: "" };
  }
};
