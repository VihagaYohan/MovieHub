import React, { Component } from 'react'
import axios from 'axios'
import {API_URL,TOKEN} from '@env'

const App = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    headers:{
        "Authorization": `Bearer ${TOKEN}`
    }
  });

export default App
