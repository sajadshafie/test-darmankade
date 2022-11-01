import type {NextPage} from 'next'
import Link from 'next/link'

interface Props{
    link:string,
}

const LinkPage:NextPage<Props>=({link})=>{
    return (
        <div className='d-flex align-center'>
            <Link className='link-page' href={'/'}>{link}</Link>
            <span className='link-page' style={{
                margin:'0 3px'
            }}>/</span>
            <span className='page-active'> متخصص اعصاب و روان</span>
        </div>
    )
}

export default LinkPage