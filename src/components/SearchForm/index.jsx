import React, {useState, useEffect} from 'react';
import ShowList from '../ShowList';
import {useShow} from '../../contexts';

export default function SearchForm() {
    const [inputText, setInputText] =useState("");
    const [searchString, setSearchString] = useState("Gossip Girl")
    const {setShowData} = useShow();

    function handleInput(e){
        const inputValue=e.target.value;
        setInputText(inputValue);
    }
    function handleSubmit(e){
        e.preventDefault();
        setSearchString(inputText);
        setInputText("");
    }
    async function searchAPI(){
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`);
        const data = await response.json();
        const show = data.map(s=>s.show);
        setShowData(show);
    }
    useEffect(()=>{
        searchAPI();
    },[searchString])
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type= "text" onChange={handleInput} value={inputText} placeholder={searchString}/>
                <button type="submit">Search</button>
            </form>
            <ShowList />
        </>
    )
}
