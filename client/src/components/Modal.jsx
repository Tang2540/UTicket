import PropTypes from 'prop-types';
import Card from './Card';
import ticket from '../assets/ticket.svg'
import search from '../assets/search.svg'
import axios from 'axios';
import { useState,useEffect } from 'react';

const API_BASE_URL = 'http://localhost:3000/';


const Modal = ({ isOpen, onClose }) => {
    const [searchValue,setSearchValue] = useState('');
    const [data,setData] = useState([]);

    useEffect(() => {
        if (isOpen) {
            // Reset states when modal opens
            setSearchValue('');
            setData([])
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const fetchData = async (query='') => {
        await axios.get(`${API_BASE_URL}${query ? `search?q=${query}` : ''}`)
                .then(res=>{
                  setData(res.data)
                })
                .catch(err=>console.log(err))
    }

    console.log(data)
    console.log(searchValue)

    return (
        <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50 gap-4">
            <div className='flex flex-row justify-between w-1/2'>
                <div>
                    <img src={ticket} alt="" className='inline-block' />
                    <p className='inline-block'>Search</p>
                </div>
                <button onClick={onClose} className="flex justify-center items-center text-white hover:text-black bg-grey-mod rounded-full w-8 h-8">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>

            <div className='w-1/2 h-24 flex py-3 px-6 bg-grey-mod rounded-3xl'>
                <div className='h-full w-[5%]'>
                    <img src={search} alt="" className='h-full' />
                </div>
                <div className='w-[95%] h-full'>
                    <input type="text" className='h-full w-full rounded-3xl text-black' onChange={e=>{setSearchValue(e.target.value)}}/>
                </div>
            </div>

            <div className="bg-white rounded-lg">
                <h2 className="text-xl font-bold text-black m-2">Title</h2>
                <div className="grid grid-cols-5 gap-4 container mx-auto px-8">
                    {data.map((data) => (
                        <Card
                            key={data.EventID}
                            id={data.EventID}
                            title={data.EventName}
                            description={data.ArtistName}
                            image={data.imageFile}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Modal;