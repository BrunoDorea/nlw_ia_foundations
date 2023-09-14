import ytdl from 'ytdl-core'
import fs from 'fs'
import { resolve } from 'path'

export const download = (videoId) => new Promise((resolve, reject) => {
    // const videoURLShort = "https://www.youtube.com/shorts/" + videoId // video short
    const videoURL = "https://www.youtube.com/watch?v=" + videoId // video normal
    console.log('Realizando o download do video...', videoId)
    
    // ytdl(videoURL, { quality: "lowest", filter: "videoandaudio" }) // baixar o video completo
    ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
        // // validação se o video é um short ou não (menor que 60 segundos)
        // .on("info", (info) => {
        //     const seconds = info.formats[0].approxDurationMs / 1000
        //     if(seconds > 60) {
        //         throw new Error("A duração desse vídeo é maior que 60 segundos.")
        //     }
        // })
        .on("end", () => {
            console.log('Download do vídeo finalizado.')
            resolve()
        })
        .on("error", (error) => {
            console.log("Não foi possível realizar o download do video. ", error)
            reject(error)
        })
        // .pipe(fs.createWriteStream('./tmp/' + videoId + '.mp4')) // baixando audio do video com o id do video
        .pipe(fs.createWriteStream('./tmp/example.mp4'))
})

// https://www.youtube.com/shorts/XOai8_-Fruw
// https://www.youtube.com/watch?v=tkdLEfFwgvg