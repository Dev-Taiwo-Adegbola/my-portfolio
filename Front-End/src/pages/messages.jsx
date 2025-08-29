import React, { useState } from 'react'
import { MobileTopNavigations } from '../components/navigations/MobileNavigations'

const Messages = ({ menuToggle, onSetMenuToggle, buttomMenuToggle}) => {
  const [messageType, setMessageType] = useState(null)
  const [anonMessage, setAnonMessage] = useState('')
  const [message, setMessage] = useState({sender:'', email:'', text:''})

  const handleMessage = (e) => {
const { name, value} = e.target
    setMessage(prev => ({...prev, [name]:value }))
    
    
  }
  return (
    <div className={`${buttomMenuToggle ==='message'?'translate-x-0' : '-translate-x-[120vw]'} absolute  -z-1  md:top-0 md:left-[15%] lg:left-[25%] transition-all w-full lg:w-[50%] md:w-[55%]`}>
      <MobileTopNavigations menuToggle={menuToggle} onSetMenuToggle={onSetMenuToggle} midElement={<h2 className='text-center text-xl  font-bold'>Connect Via message</h2>}/>
      <h2 className='hidden md:block mt-3 text-center text-xl h-[45px] border-b border-white/20 font-bold'>Connect Via message</h2>
        <div className=" w-full h-[80vh] flex flex-col items-center ">
          <h2 className='text-center text-lg font-bold mt-5 px-5'>Welcome Here! Every messages goes straight to my Inbox. Fill free to write me a message</h2>
          <div className="w-full flex flex-col items-center mt-8  h-[85%] gap-5">
            <div onClick={()=>setMessageType('normalMessage')} className={`${messageType === 'normalMessage' ? 'h-[400px]' : 'cursor-pointer h-[40px]'} w-[70%] bg-white/95 flex flex-col items-center gap-4  overflow-y-hidden pt-1.5 transition-all rounded-3xl px-4 py-3 border `}>
            <p className='text-black'>Send a message</p>
              
                <input onChange={handleMessage} name='sender' value={message.sender} type="text" className="border-b border-black p-1 placeholder:text-black text-black outline-0" placeholder='Your name' />
                <input onChange={handleMessage} name='email' value={message.email} type="email" className="border-b p-1 border-black placeholder:text-black text-black outline-0" placeholder='Email address' />
              
              <textarea onChange={handleMessage} name='text' value={message.text}  id="" placeholder='write message here' className='resize-none outline-0 p-3 bg-black/20 rounded-2xl w-[90%] h-[160px] placeholder:text-sm text-black placeholder:text-black text-sm  mt-5 no-scrollbar'></textarea>
              <button className="bg-green-500 text-white px-4 py-1.5 rounded-2xl text-sm ">Send message</button>
            </div>
            <div onClick={()=>setMessageType('anonymous')} className={`${messageType === 'anonymous' ? 'h-[300px]' : 'cursor-pointer h-[40px]'} w-[70%] flex flex-col gap-5 overflow-y-hidden items-center pt-1.5 transition-all rounded-3xl px-4  border `}>
              <p>Send an anonymous message</p>
              <textarea onChange={(e) => setAnonMessage(e.target.value)} value={anonMessage} placeholder='write message here' className='resize-none outline-0 p-3 bg-white/10 rounded-2xl w-[90%] h-[160px] placeholder:text-sm text-sm  mt-5 no-scrollbar'></textarea>
              <button className="bg-white text-black px-4 py-1.5 rounded-2xl text-sm">Send message</button>
            </div>
            <p></p>
          </div>
        </div>
    </div>
  )
}

export default Messages