import { Suspense, use } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { friendDataPromise } from '../../data/friendData'
import call from '../../assets/call.png'
import txt from '../../assets/text.png'
import vdo from '../../assets/video.png'
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
function DetailContent() {
  const friends = use(friendDataPromise)
  const { id } = useParams()
  const friend = friends.find((item) => String(item.id) === id)

  const notifyCall = () => toast(`Calling ${friend.name}`)
  const notifyText = () => toast(`Texting ${friend.name}`)
  const notifyVideo = () => toast(`Video call with ${friend.name}`)

  if (!friend) {
    return (
      <section className="bg-[#F8FAFC] px-6 py-16 min-h-[60vh] flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-md p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-[#244D3F]">Friend not found</h2>
          <Link to="/" className="btn bg-green-primary text-white">
            Back to Friends
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-[#F8FAFC] px-6 py-16  ">
      <ToastContainer />
      <div className="max-w-5xl  mx-auto grid gap-6 lg:grid-cols-[350px_1fr]  items-start">
       <div>
         <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center space-y-4">
          <img src={friend.picture} alt={friend.name} className="w-28 h-28 rounded-full" />
          <div>
            <h1 className="text-3xl font-bold text-[#244D3F]">{friend.name}</h1>
             
          </div>
          <p className={`${friend.status === 'overdue' ? 'bg-[#EF4444] text-white' : friend.status === 'almost due' ? 'bg-[#EFAD44] text-white' : 'bg-[#244D3F] text-white'} rounded-full px-3 py-1 text-sm`}>
            {friend.status}

          </p>
           <div className='space-x-2'>
            {friend.tags.map((tag) => (
              <span className='bg-[#CBFADB] text-[#244D3F] text rounded-full px-2 py-1' key={tag}>{tag}</span>
            ))}
          </div>
          <p className="text-[#64748B]">{friend.bio}</p>
         

          
        </div>

          <div className='space-y-2 font-medium mt-4 '>
            <button className='btn  bg-white border-gray-200 p-4 rounded-md  flex justify-center items-center gap-2 w-full shadow-md'><RiNotificationSnoozeLine />Snooze</button>
            <button className='btn  bg-white border-gray-200 p-4 rounded-md  flex justify-center items-center gap-2 w-full shadow-md'><FiArchive /> Archive</button>
            <button className='btn  bg-white border-gray-200 p-4 text-red-500 flex justify-center items-center gap-2 rounded-md w-full shadow-md'><RiDeleteBin5Line />Delete</button>
          </div>


       </div>
      

       <div className='space-y-11 flex flex-col justify-between '>
           <div className="grid gap-4  md:grid-cols-3">
          <div className=" bg-white rounded-xl shadow-md px-4 py-8 space-y-2 text-center">
            
            <h2 className="text-3xl font-bold text-[#244D3F]">{friend.days_since_contact}</h2>
            <p className="text-[#64748B]">Days Since Contact</p>
          </div>
          <div className="bg-white rounded-xl shadow-md px-4 py-8 space-y-2 text-center">
            
            <h2 className="text-3xl font-bold text-[#244D3F]">{friend.goal}</h2>
            <p className="text-[#64748B]">Goal (Days)</p>
          </div>
          <div className="bg-white rounded-xl shadow-md px-4 py-8 space-y-2 text-center">
    
            <h2 className="text-2xl font-bold text-[#244D3F] ">{friend.next_due_date}</h2>
                    <p className="text-[#64748B]">Next Due</p>
          </div>
           
        </div>

          <div className="bg-white h-45  rounded-xl flex flex-col justify-center shadow-md p-6  ">
             <div className='flex justify-between'>
              <h2 className='text-xl font-medium  text-[#244D3F] '>Relationship Goal</h2>
              <button class ='btn bg-[#F8FAFC]  border border-gray-100 rounded font-medium px-4 py-2 hover:bg-green-200'>Edit</button>
             </div>
                <p className='text-[#64748B]'>Connect every <span className='text-[#1F2937] font-bold'>30 days</span></p>
          </div>

            <div className="bg-white rounded-xl shadow-md p-6  ">
            <p className="text-[#244D3F] text-xl font-medium pb-4">Quick Check-In</p>
           <div className='grid md:grid-cols-3 gap-4'>
                <button onClick={notifyCall} className=' bg-[#F8FAFC] p-4 border border-gray-100 flex flex-col items-center gap-2 rounded-md hover:bg-gray-100 cursor-pointer'>
                  <img src={call} alt="call" />
                  <p>Call</p>
                </button>
                <button onClick={notifyText} className=' bg-[#F8FAFC] p-4 border border-gray-100 flex flex-col items-center gap-2 rounded-md hover:bg-gray-100 cursor-pointer'>
                  <img src={txt} alt="text" />
                  <p>Text</p>
                </button>
                <button onClick={notifyVideo} className=' bg-[#F8FAFC] p-4  border border-gray-100  flex flex-col items-center gap-2 rounded-md hover:bg-gray-100 cursor-pointer'>
                  <img src={vdo} alt="video" />
                  <p>Video</p>
                </button>
               
           </div>
          </div>



       </div>
          
      </div>
    </section>
  )
}

export default function FriendDetails() {
  return (
    <Suspense fallback={<span className="loading loading-spinner text-accent"></span>}>
      <DetailContent />
    </Suspense>
  )
}