import clsx from 'clsx';
import style from './FormLogin.module.scss';
import { useRef, useState } from 'react';

function FormLogin() {
    const [userName, setUserName] = useState('');
    const [password, setPasword] = useState('');
    const elementRef = useRef();

    const handleGetName = (info) => {
        setUserName(info);
    }
    const handleGetPass = (info) => {
        setPasword(info);
        
    }
    const handleSubmit = () => {
        console.log(userName + " " + password);
        
    }
    
    
    return (  
        <div className={clsx(style['wrapper'])}>
            <div className={clsx(style['form-login'])}>
                <div className={clsx(style['title'])}>
                    Đăng nhập
                </div>
                <div className={clsx(style['input-content'])}>
                    <input 
                        type='text'
                        placeholder=' '
                        className={clsx(style['input'])}
                        onChange={(e) => {
                            handleGetName(e.target.value);
                        }}
                    />
                    <label className={clsx(style['input-content-title'])}>
                        Tên người dùng
                    </label>
                </div>
                <div className={clsx(style['input-content'])}>
                    <input 
                        type='email'
                        placeholder=' '
                        className={clsx(style['input'])}
                        onChange={(e) => {
                            handleGetName(e.target.value);
                            if(elementRef.current){
                                elementRef.current.style.display = "none";
                            }
                        }}
                        onBlur={(e) => {
                            const formEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            if((formEmail.test(e.target.value))){
                                if(elementRef.current){
                                    elementRef.current.style.display = "none";
                                }
                                
                            }else{
                                if(elementRef.current){
                                    elementRef.current.style.display = "block";
                                }
                            }
                        }}
                    />
                    <label className={clsx(style['input-content-title'])}>
                        Email
                    </label>
                    <div className={clsx(style['content-message'])}
                        ref={elementRef}
                    >
                        Vui lòng nhập đúng email!
                    </div>
                </div>
                <div className={clsx(style['input-content'])}>
                    <input
                        type='Password'
                        placeholder=' '
                        className={clsx(style['input'])}
                        onChange={(e) => {
                            handleGetPass(e.target.value);
                        }}
                    />
                    <label className={clsx(style['input-content-title'])}>
                        Mât khẩu
                    </label>
                </div>
                <div className={clsx(style['forget-password'])}>
                    Quên mật khẩu?
                </div>
                <button className={clsx(style['button-submit'])}
                    onClick={
                        handleSubmit
                    }
                >
                    Đăng nhập
                </button>
            </div>
        </div>
    );
}

export default FormLogin;