import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import { ShowCard } from '../../components';

export default function Show() {
  const [show, setShow] = useState({image:{}, rating:{}});
  const { id } = useParams();

  useEffect(()=> {
    displayShow();
  },[])

  async function displayShow() {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const data = await response.json();
    setShow(data);
  }

  return (
    <ShowCard show={show}/>
  )
}
