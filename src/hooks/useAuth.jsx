import React from 'react';
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function useAuth(code) {
    //GOAL IS TO RETURN THE ACCESS TOKEN USING CODE IN THE URL
    let navigate = useNavigate()

    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    const fetchToken = async () => {
        try {
            const res = await axios.post(`http://localhost:7000/users/spotify`, {code})
            setAccessToken(res.data.access_token)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            navigate("/recs", { replace: true })
        } catch (error) {
            alert("Error")
        }
    }

    useEffect(() => {
        fetchToken()
    })
    return accessToken
}

export default useAuth;