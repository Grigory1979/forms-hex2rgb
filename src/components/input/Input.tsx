import { FormEvent, useState } from 'react';
import './Input.css'

const Input = () => {
    const [hex, setHex] = useState('#CD5C5C');
    const [rgb, setRgb] = useState('rgb(205, 92, 92)');

    const handlerChange = (event: FormEvent<HTMLInputElement>) => {
        const value = (event.target as HTMLInputElement).value
        setHex(value)
        value.length === 7 || value.length > 7 ? convertHex(value) : ''
    }
    const regExp = /#[0-9a-f]{6}/;
    const convertHex = (code: string) => {
        if(!regExp.test(code)){
            setRgb('Ошибка!')
            return;
        }
        let hexCode = code.replace("#", "");
        let red = parseInt(hexCode.substring(0, 2), 16);
        let green = parseInt(hexCode.substring(2, 4), 16);
        let blue = parseInt(hexCode.substring(4, 6), 16);

        setRgb(`rgb(${red}, ${green}, ${blue})`);
    }

    

 return (
<div className="container" style = {{ backgroundColor: rgb === 'Ошибка!'? 'rgb(205, 92, 92)' : rgb  }}>
        <div className="input_form">
            <input placeholder='#CD5C5C'
                className="input" 
                // style={{borderColor: rgb}}
                onChange={handlerChange}
                value = {hex}
                maxLength={7}
            />
            <div className="result">
                {rgb}
            </div>
        </div>
    </div>
 )
}

export default Input; 