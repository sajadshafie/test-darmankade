import type {NextPage} from 'next'
import style from './style.module.css'

interface Props {
    title:string,
    icon:any,
    detail:string
}

const ViewLine:NextPage<Props>=(props)=>{
    return (
        <div className='d-flex align-center justify-between' style={{
            marginBottom:10
        }}>
            <div className='d-flex align-center'>
                {props.icon}
                <span className={style.title_line}>{props.title}</span>
            </div>
            <span className={style.detail_line}>{props.detail}</span>
        </div>
    )
}

export default ViewLine