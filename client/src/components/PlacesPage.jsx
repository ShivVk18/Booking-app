import React from 'react'
import { Link, useParams } from 'react-router-dom'
import NewPlaceAdd from './NewPlaceAdd'
function PlacesPage() {
    const {action} = useParams()

  return (
    <div>

        {action !== 'new' && (
            <div className='text-center'>
   

            <Link className="bg-primary text-white py-2 px-6 rounded-full inline-flex gap-1 " to={'/account/places/new'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
            
            Add new Places</Link>
        </div>    
        )}
        
        {
            action === 'new' && (
              <div>
                <NewPlaceAdd/>
              </div>
            )
        }
        
   </div>
  )
}

export default PlacesPage