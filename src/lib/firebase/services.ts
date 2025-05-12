import app from "./init";
import { collection, getDocs, doc, getDoc, addDoc, getFirestore, query, where } from "firebase/firestore";
import bcrypt from 'bcrypt'

const firestore =  getFirestore(app)

export async function retriveData(collectionName: string){
  const snapshot = await getDocs(collection(firestore, collectionName))
  const data = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) 

  return data
}

export async function retriveDataById(collectionName: string, id: string){
  const snapshot = await getDoc(doc(firestore,collectionName, id))
  const data = snapshot.data()
  return data
}

export async function register(data: {fullname: string, email:string, password: string, role?:string}){
  const q = query(collection(firestore,'users'), where('email','==',data.email),)

  const snapshot = await getDocs(q)

  const users = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }))

  if(users.length > 0){
    return {status:false, message:'email already exist', statusCode: 400}
  } else {
    data.role = 'admin'
    data.password = await bcrypt.hash(data.password,10)
    
    try {
      await addDoc(collection(firestore,'users'),data)
      return {status: true,message: 'register success', statusCode: 200}
    } catch (error) {
      return {status: false, message: 'register failed', statusCode: 400}
    }  
  }

}

export async function login(data:{email: string}){
  const q = query(collection(firestore,'users'), where('email','==',data.email))

  const snapshot = await getDocs(q)

  const user = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }))

  if(user){
    return user[0]
  } else {
    return null
  }


}