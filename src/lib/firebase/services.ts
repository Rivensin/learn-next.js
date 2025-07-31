import app from "./init";
import { collection, getDocs, doc, getDoc, addDoc, getFirestore, query, where, updateDoc, Timestamp } from "firebase/firestore";
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

export async function retriveDataByCategory(collectionName: string, category: string){
  const q = query(collection(firestore, collectionName), where('category','==',category))
  
  const snapshot = await getDocs(q)

  const result = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }))

  return result
}

export async function retriveDataByEmail(collectionName: string, email: string){
  const q = query(collection(firestore, collectionName), where('email','==',email))
  
  const snapshot = await getDocs(q)

  return !snapshot.empty
}

export async function addReview(data: {name: string, review: string, rating: number,image: string})
  {
    const q = query(collection(firestore,'review'), where('name','==',data.name))
    
    const snapshot = await getDocs(q)
    
    const review = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
    
    if(review.length === 0) {
      await addDoc(collection(firestore, 'review'),{
      ...data,
      tanggal: new Date().toISOString(),
      image: data.image 
      })
      return {status: true, message: 'Review submitted', statusCode: 200}
    } else {
      return {status: false, message: 'You already submit a review', statusCode: 400}
    }
  }

export async function register(data: {fullname: string, email:string, password: string, role?:string}){
  const q = query(collection(firestore,'users'), where('email','==',data.email))
  
  const snapshot = await getDocs(q)
  
  const users = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }))

  if(users.length > 0){
    return {status:false, message:'email already exist', statusCode: 401}
  } else {
    data.password = await bcrypt.hash(data.password,10)
    
    try {
      await addDoc(collection(firestore,'users'),data)
      return {status: true, message: 'register success', statusCode: 200}
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

export async function loginWithGoogle(data : any, callback: any){
  const q = query(collection(firestore,'users'), where('email','==',data.email))
  const snapshot = await getDocs(q)

  const user: any = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))

  if(user.length > 0){
    //data.role = user[0].role
    await updateDoc(doc(firestore,'users',user[0].id),data).then(() => {
      callback({status: true, data: data})
    })
  } else {
    //data.role = 'member'
    await addDoc(collection(firestore,'users'), data).then (() => {
      callback({status: true, data: data})
    })
  }
}
