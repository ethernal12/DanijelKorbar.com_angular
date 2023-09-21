export async function getGeolocation(): Promise<{ lattitude: number, longtitude: number }> {
  return new Promise((resolve, reject): void => {

    if ('geolocation' in navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          const lattitude: number = position.coords.latitude;
          const longitude: number = position.coords.longitude;
          // @ts-ignore
          resolve({lattitude, longitude})
        }, error => {
          reject(error)
        }
      )
    }
    else {
      reject(new Error('Geolocation not available!'))
    }
  })


}

