import {
    MdHomeFilled, 
    MdOutlineExplore,
    MdOutlineVideoLibrary, 
    MdOutlineSubscriptions
} from 'react-icons/md'
import {GrHistory} from 'react-icons/gr'
import {BsClockHistory} from 'react-icons/bs'
import {AiOutlineLike} from 'react-icons/ai'

export const sidebarData = [
    {
        title:'Home',
        Icon:  MdHomeFilled
    },
    {
        title: 'Explore',
        Icon: MdOutlineExplore
    },
    {
        title: 'Subscriptions',
        Icon: MdOutlineSubscriptions
    },
    {
        title: 'Trending',
        Icon: ''
    },
    {
        title: 'Library',
        Icon: MdOutlineVideoLibrary
    },
    {
        title: 'History',
        Icon: GrHistory
    },
    {
        title: 'Watch Later',
        Icon: BsClockHistory
    },
    {
        title: 'Liked Videos',
        Icon: AiOutlineLike
    },
]