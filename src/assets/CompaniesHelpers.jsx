import {useState, useEffect} from 'react'

import {auth, db} from "../firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {getDoc,getDocs,setDoc,query,where , doc, collection, count, getCountFromServer } from "firebase/firestore"

const companiesRef = collection(db,"companies")
// const authUser = auth.currentUser?.uid;
// console.log('authUser above is :',authUser)
const AllCompaniesDocs = [] 
let CompanyDocByName = ""
const CompanyDocByOwnerID = ""
const CompaniesCount = 0


const getAllCompaniesDocs = async () => {

	try {
		const results = await getDocs(companiesRef)

		results.forEach((doc) => {
			// console.log(doc.id , doc.data().name)
			AllCompaniesDocs.push(doc.data())
		})

		console.log("Auth is :",authUser)

	} catch (err) {
		console.log(err)
		return false
	}
	
	return true
}

export const getAllCompanies = () => {
	if(getAllCompaniesDocs())
		return AllCompaniesDocs
}


export const beginReadingCompanyDocByName = async (authUser , name) => {

    const q = query(companiesRef , where("name","==",name) )

    const results = await getDocs(q)

    	
	results.forEach((doc) => {
		
		let docUserId = doc.data().uID
		// console.log("owner is : ",docUserId)
		if(docUserId == authUser) {
			
			CompanyDocByName = doc.data().name
			// return
		} else {
			CompanyDocByName = "errrrrror"
			
			return
			
		}
	})
	
}

export const getCompanyByName = () => {
	// console.log("CompanyDocByName",CompanyDocByName)
	// getCompanyDocByName(authUser,name)

	// setTimeout(()=>{
	// 	console.log("CompanyDocByName",CompanyDocByName)
	// 	return CompanyDocByName
	// },2000)
	
	return CompanyDocByName 
}

export const getCompanyDocByOwnerID = async (id) => {

	const q = query(companiesRef , where("uID","==",id) )

    const results = await getDocs(q)

	results.forEach((doc) => {
		console.log(doc.id , doc.data().name)
	})
	
}

export const getCompanyByOwnerID = async (id) => {

	const q = query(companiesRef , where("uID","==",id) )

    const results = await getDocs(q)

	results.forEach((doc) => {
		console.log(doc.id , doc.data().name)
	})
	
}

export const getAllCompaniesCount = async () => {
      const snapshot = await getCountFromServer(companiesRef);
      // console.log((snapshot.data().count))
      // return (snapshot.data().count);
      const count = snapshot.data().count
      // return number(count)
}

const CompaniesHelpers = () => {

	const getMessage = () => {
		console.log('this is message from helpers')
	}

	return (
		<></>
	)
}

export default CompaniesHelpers
