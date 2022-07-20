// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, getDocs} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-oinVWQZJvKukC446jXO-UlpNjqh9bOg",
  authDomain: "reactnh.firebaseapp.com",
  projectId: "reactnh",
  storageBucket: "reactnh.appspot.com",
  messagingSenderId: "644717460663",
  appId: "1:644717460663:web:98012c0bb84d6566b3a132"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Funcion para el listado de productos
export async function getData(){
    // Referencia la coleccion
    const itemsCollectionRef = collection(db,"items");

    // Leemos el snapshot de los documentos actuales con getDocs
    const docSnapshot = await getDocs(itemsCollectionRef);

    // Recibimos array Docs dentro del snapshot
    const dataDocs = docSnapshot.docs.map(item => {
        const products = {
          ...item.data(),
          id : item.id
        }
        return products;
    })
    return dataDocs;
}


// Funcion para mostar detalle del producto
export async function getDataProduct(id){
  // Referencia la coleccion
  const itemsCollectionRef = collection(db,"items");

  const docRef = doc(itemsCollectionRef, id);

  const docSnapshot = await getDoc(docRef)

  // const data = docSnapshot.data();

  // Objeto donde agregamos el id del Firebase
  const product = {
    ...docSnapshot.data(),
    id:docSnapshot.id
  }
  return product;
}

// export default db;





