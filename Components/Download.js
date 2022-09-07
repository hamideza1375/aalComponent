import * as RNFS from 'react-native-fs';
import Notification from './notification'
const { create } = Notification();
let prgs;

export function download(filename) {
  RNFS.downloadFile({
    fromUrl: filename,
    toFile: `${RNFS.DownloadDirectoryPath}`,
    discretionary: true,
    progress: (res) => {
      let progressPercent = (res.contentLength * (100 * res.bytesWritten)).toString()
      prgs = progressPercent.slice(0, 2)
      if (prgs > '96') prgs = '100'
      console.log(prgs)
    },
  }).promise
    .then(() => {
      // create(imgName, prgs + '%')
      create('dddd', 'ddddererr')

    })
    .catch((err) => console.log(err))
}



