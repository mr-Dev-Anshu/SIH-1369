import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deletDoc,
  doc,
} from "firebase/firestore";
  const ProjectCollectionRef = collection(db,"Projects");

   class ProjectDataService {
        addProject = (newProject)=>{
               return addDoc(ProjectCollectionRef,newProject);
        }
        getAllProjects=()=>{
              return getDocs(ProjectCollectionRef);
        }
   }

   export default new ProjectDataService();