import { Image } from "react-native"

export default function Hero() {
    return(
        <Image
        style={{ width: 955, height: 350,
             resizeMode: 'contain' }}
        source={{uri:"https://cdn.pixabay.com/photo/2019/04/14/20/05/duck-meet-4127713_1280.jpg"
    }}/>
    )
}