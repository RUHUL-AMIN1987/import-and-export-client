import React from 'react';
import Img1 from '../../assets/advisor-1.webp'
import Img2 from '../../assets/advisor-2.webp'
import Img3 from '../../assets/advisor-3.webp'
import Img4 from '../../assets/advisor-4.webp'
import { MdAttachEmail } from 'react-icons/md';
import { CiPhone } from 'react-icons/ci';
const OurTeam = () => {
    return (
        <div className="container mx-auto text-center py-8">
  <h4 className="text-sm font-semibold">OUR TEAM</h4>
  <h1 className="text-3xl font-bold mb-8">MEET OUR ADVISOR</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {/* Card 1 */}
    <div className="border-1 border-[#632EE3] p-5 rounded-2xl shadow-md">
      <img className="w-full h-96 object-cover rounded-xl" src={Img1} alt="" />
      <h2 className="text-xl text-[#632EE3] font-bold mt-4">John Doe</h2>
      <p className="text-gray-600 text-sm flex items-center justify-center gap-2 mt-1"><MdAttachEmail className='text-[#632EE3]'/> john@example.com</p>
      <p className="text-gray-600 text-sm  flex items-center justify-center gap-2 mt-1"> <CiPhone  className='text-[#632EE3]'/>+880 1234-567890</p>
    </div>

    {/* Card 2 */}
    <div className="border-1 border-[#632EE3] p-5 rounded-2xl shadow-md">
      <img className="w-full h-96 object-cover rounded-xl" src={Img2} alt="" />
      <h2 className="text-xl text-[#632EE3] font-bold mt-4">Sarah Smith</h2>
      <p className="text-gray-600 text-sm flex items-center justify-center mt-1 gap-2"><MdAttachEmail className='text-[#632EE3]' /> sarah@example.com</p>
      <p className="text-gray-600 text-sm flex items-center justify-center gap-2 mt-1"> <CiPhone  className='text-[#632EE3]'/>+880 9876-543210</p>
    </div>

    {/* Card 3 */}
    <div className="border-1 border-[#632EE3] p-5 rounded-2xl shadow-md">
      <img className="w-full h-96 object-cover rounded-xl" src={Img3} alt="" />
      <h2 className="text-xl text-[#632EE3] font-bold mt-4">Michael Lee</h2>
      <p className="text-gray-600 text-sm flex items-center justify-center gap-2 mt-1"><MdAttachEmail className='text-[#632EE3]'/> michael@example.com</p>
      <p className="text-gray-600 text-sm flex items-center justify-center gap-2 mt-1"> <CiPhone  className='text-[#632EE3]'/>+880 1111-222233</p>
    </div>

    {/* Card 4 */}
    <div className="border-1 border-[#632EE3] p-5 rounded-2xl shadow-md">
      <img className="w-full h-96 object-cover rounded-xl" src={Img4} alt="" />
      <h2 className="text-xl text-[#632EE3] font-bold mt-4">Emily Brown</h2>
      <p className="text-gray-600 text-sm flex items-center justify-center gap-2 mt-1"><MdAttachEmail className='text-[#632EE3]'/> emily@example.com</p>
      <p className="text-gray-600 text-sm flex items-center justify-center gap-2 mt-1"> <CiPhone  className='text-[#632EE3]'/>+880 4444-555566</p>
    </div>
  </div>
</div>

    );
};

export default OurTeam;