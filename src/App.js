import React,{useEffect, useState} from 'react';

import {useDispatch} from 'react-redux';

import{English,Spanish,italian,german} from './Action/Action';

import store from './Store/Store';

import { useTranslation } from "react-i18next";
import i18n from "i18next";


// Nav
import Nav from './Nav/Nav';

const App = () => {
  
  // console.log(Output);
// Data from Store
const [language_Selection,setLanguage_Selection]=useState("EN");
const dispatch = useDispatch()
// Store has Subscribe method to get data
const { t } = useTranslation();

useEffect(()=>{
  // alert("Testing the useeffect hoock")
  // Getting data from local storage
  let CurrentLanguag=localStorage.getItem("Language")
  i18n.changeLanguage(CurrentLanguag)
},[])
store.subscribe(()=>{
  const data=store.getState( )
  setLanguage_Selection(data.ChangeLenguage.change)})
  return (
    <div>   
    <div>
    <button onClick={()=> dispatch(English())} className='btn m-1 bg-primary text-light'>English</button> 
       <button onClick={()=> dispatch(Spanish())} className='btn m-1 bg-primary text-light'>Spanish</button>
       <button onClick={()=> dispatch(italian())} className='btn m-1 bg-primary text-light'>Italian</button>
       <button onClick={()=> dispatch(german())} className='btn m-1 bg-primary text-light'>German</button>
    </div>
    {/* <div className="card-header">{language_Selection}</div> */}
    {/* <h1>{t('Welcome')}</h1> */}
    <Nav/>  
    </div>
  )
}

export default App