import ytdl from 'ytdl-core'
import fs from 'fs'

export const download = (videoId) => {
    // const videoURLShort = "https://www.youtube.com/shorts/" + videoId // video short
    const videoURL = "https://www.youtube.com/watch?v=" + videoId // video normal
    console.log('Realizando o download do video...', videoId)
    
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
        })
        .on("error", (error) => {
            console.log("Não foi possível realizar o download do video: ", error)
        })
        .pipe(fs.createWriteStream('./tmp/' + videoId + '.mp4'))
}

// https://www.youtube.com/shorts/XOai8_-Fruw
// https://www.youtube.com/watch?v=tkdLEfFwgvg