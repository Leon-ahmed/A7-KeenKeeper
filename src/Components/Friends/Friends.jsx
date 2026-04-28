import React, { use } from 'react';

const Friends = ({ friendData }) => {
  const friends = use(friendData);

  function Color(stats){
   if(stats==='overdue'){
    return   "bg-[#EF4444] text-white"
    
   }
    else if(stats==='almost due'){
    return   "bg-[#EFAD44] text-white"
    
   }
   else{
    return "bg-[#244D3F] text-white"
   }


  }

  return (
    
   <div className='bg-[#F8FAFC]  '>
      <div className='grid px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10   border-b border-[#E9E9E9] '>
                
                <div className='bg-white rounded flex flex-col justify-center p-8   items-center'>
                    <span className='text-green-primary text-3xl font-semibold'>{friends.length}</span>
                    <p className='text-[#64748B]'>Freinds</p>
                </div>
                
                <div className='bg-white rounded flex flex-col justify-center p-8   items-center'>
                    <span className='text-green-primary text-3xl font-semibold'>{friends.filter((friend)=>friend.status==="on-track").length}</span>
                    <p className='text-[#64748B]'>On track</p>
                </div>
                
                <div className='bg-white rounded flex flex-col justify-center p-8   items-center'>
                    <span className='text-green-primary text-3xl font-semibold'>6</span>
                    <p className='text-[#64748B]'>Need Attentation</p>
                </div>
                
                <div className='bg-white rounded flex flex-col justify-center p-8   items-center'>
                    <span className='text-green-primary text-3xl font-semibold'>12</span>
                    <p className='text-[#64748B]'>Interactions This Month</p>
                </div>


            </div>
     
    <p className='px-20 text-2xl font-semibold'>Your Friends </p>
   <div className=" bg-[#F8FAFC] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20  pt-4 px-20">
   
      {friends.map((friend) => (
        <div key={friend.id} className=" bg-white  flex flex-col justify-center items-center text-center space-y-5  shadow-md rounded-md p-6">
          <img src={friend.picture} alt={friend.name} className='w-20 h-20 rounded-full' />
          <h3>{friend.name}</h3>
          <p>{friend.days_since_contact} d ago</p>

          <div className='space-x-2'>
            {friend.tags.map((tag) => (
              <span className='bg-[#CBFADB] text-[#244D3F] text rounded-full px-2 py-1' key={tag}>{tag}</span>
            ))}
          </div>
         
          <p className={`${Color(friend.status)} rounded-full px-2 py-1` }>{friend.status}</p>

          
        </div>
      ))}
    </div>










   </div>
  );
};

export default Friends;