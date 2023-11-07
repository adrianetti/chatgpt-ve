import React from 'react'

import NewChat from '@/components/NewChat'

function Sidebar() {
  return (
    <div className="p-2 flex flex-col h-screen text-white">
        <div className="flex-1">
            <div>
                {/* New chat */}
                <NewChat /> 

                <div>
                    {/* Model selection */}
                </div>

                {/* Chats */}
            </div>
        </div>
    </div>
  )
}

export default Sidebar