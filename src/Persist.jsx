import { useState,useEffect } from "react";

export default function Persist (key, defaultValue){
    const [value, setValue] = useState(() => {
        //localstorageからkeyに設定された
        //valueの値をとる
        const jsonValue = window.localStorage.getItem(key);
        if (jsonValue !== null) return JSON.parse(jsonValue);
        return defaultValue
    })
    //valueが変化したら発火
    useEffect(() => {
        window.localStorage.setItem(key,JSON.stringify(value));
    }, [value, key])
    return [value,setValue]
}