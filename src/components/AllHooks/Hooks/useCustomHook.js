import {useEffect} from 'react';

const CustomHook = (counting) => {
    useEffect(() => {
      if(counting >= 0){
        document.title = `Chat ${counting}`
      }else{
        document.title = `Chat`
      }
    },[counting])
}

export default CustomHook;