import { DocumentData, collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { ObjectToJson } from "./string.helper";

export const getCollectionData = async (collectionName: string, documentName?: string) => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    if (!!querySnapshot) {
        if (!!documentName) {
            let document: DocumentData[] = [];
            querySnapshot.forEach(doc => {
                let content = ObjectToJson(doc.data());
                doc.id === documentName && document.push(content)
            });
            return document[0];
        }
        return querySnapshot;
    }
}