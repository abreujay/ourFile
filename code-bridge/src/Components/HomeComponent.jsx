import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './HomeComponent.css'

const HomeComponent = () => {

    const [file, setFile] = useState(null)
    const [downloadLink, setDownloadLink] = useState(null)

    const handleFileChange = (e) => {

        setFile(e.target.files[0])

    }

    const submitFile = async (e) => {

        // lógica da api aqui

        if(!file){

        console.error("Nenhum arquivo selecionado...")
        return;

        }

        const formData = new FormData()
        formData.append('file', file)

        try {
            
            const response = await axios.post('https://file.io', formData)
            setDownloadLink(response.data.link)
            console.log(response)

        } catch (error) {
            
            console.error('Ocorreu um erro...')

        }
    }

  return (
    <div className='home-container'>
        <div className="home-header">
            <h2>Upload your file</h2>
        </div>
        <div className="home-body">
            <label htmlFor="file"></label>
            <input type="file" onChange={handleFileChange}/>
            <button onClick={submitFile}>Upload</button>
        </div> 
        <div className="link-container">
            {downloadLink && (
                    <>
                        <p>Share</p>
                        <input type="text" value={downloadLink} readOnly/>
                    </>)}
        </div>
    </div>
  )
}

export default HomeComponent