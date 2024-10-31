import { useRef, useState } from 'react';
import style from './FindList.module.scss';
import clsx from 'clsx';

const listContent = [
    "Đắt nhân tâm", "Ngẫm", "Học làm giàu", "Nhẫn nhịn", "Con đường tươi sáng"
]
function FindList() {
    const [content, setContent] = useState(listContent);
    const [search, setSearch] = useState();

    const handleFindContent = (value) => {
        setSearch(value);
        if(value === ''){
            setContent(listContent);
        }else{
            setContent(listContent.filter((it) => it.toLowerCase().includes(value.toLowerCase())));
        }
    }

    return (  
        <div className={clsx(style['wrapper'])}>
            <div className={clsx(style['container'])}>
                <div className={clsx(style['find-content'])}>
                    <input
                        type='text'
                        value={search}
                        placeholder='Nhập tìm kiếm'
                        className={clsx(style['input'])}
                        onChange={(e) => {
                            handleFindContent(e.target.value);
                        }}
                    />
                </div>
                <div className={clsx(style['list-content'])}>
                    {content.length > 0 ? content.map((it, index) => {
                        return (
                            <div key={index} className={clsx(style['list-content-item'])}>
                                {it}
                            </div>
                        )
                    }) : (
                        <div className={clsx(style['list-content-item'])}>Không có kết quả nào phù hợp!</div>
                    )}
                    
                </div>
            </div>
        </div>
    );
}

export default FindList;