import React from 'react';
import {
  useQuery,
} from '@tanstack/react-query'
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
const Allusers = () => {
    const axiossecure=useAxiosSecure()
    const { data:users=[] } = useQuery({
    queryKey: ['users'],
queryFn: async () => {
    const res = await axiossecure.get('users')
    return res.data
  },
})
    return (
        <div>
            <h1 className='text-2xl'>All users</h1>
            <div>total users={users.length}</div>
        </div>
    );
};

export default Allusers;