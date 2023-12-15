import React from 'react'
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loading from '../../components/loading';
import './index.css'
import { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../ApiClient/axiosConfig';
function UnSubscribe() {
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true)
    const user_id = searchParams.get('user_id')
    console.log("id user __________________", searchParams.get('user_id'));
    const [error, setError] = useState('')
    const unsubscribe = async () => {
        try {
            setLoading(true)
            setError('')
            const res = await axios.post(API_URL + 'user/disable-email?user_id=' + user_id)
            console.log(res.data)
            setLoading(false)
        } catch (error) {
            if(error?.response?.data){
                setError(error?.response?.data.message)
            }else{
                setError(error.message)
            }
            setLoading(false)
        }
    }

    useEffect(() => {
        unsubscribe()
    },[user_id])
    return (
        <div className='unsubscribe-page'>
            {loading ? <Loading /> : (
                error ? <p>{error}</p> : <p>You are successfully unsubscribed</p>
            )}
            
        </div>
    )
}

export default UnSubscribe