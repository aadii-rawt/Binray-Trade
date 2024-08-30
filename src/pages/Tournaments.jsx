import React from 'react';

const Tournaments = () => {
  const tournaments = [
    {
      status: 'Active Now',
      title: 'Free Friday',
      entryFee: '0 $',
      participants: '48575',
      duration: '1 day',
      prizePool: '600 $',
    },
    {
      status: 'Until Start: 12 hours',
      title: 'Weekend Battle',
      entryFee: '1 $',
      participants: '746',
      duration: '2 days',
      prizePool: '3000 $',
    },
    {
      status: 'Until Start: 4 days',
      title: 'Crazy! Wednesday',
      entryFee: '10 $',
      participants: '35',
      duration: '1 day',
      prizePool: '5000 $',
    },
    {
      status: 'Until Start: 6 days',
      title: 'Free Friday',
      entryFee: '0 $',
      participants: '2353',
      duration: '1 day',
      prizePool: '600 $',
    },
  ];

  return (
    <div className="bg-white dark:bg-[#212634] p-3 h-[calc(100%-44px)] rounded-t-md overflow-y-scroll">
      <div className="flex justify-between mb-4">
        <h1 className="text-lg font-semibold">Tournaments</h1>
        <h1 className="text-lg font-semibold">Available for participation ({tournaments.length})</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tournaments?.map((tournament, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <div>
            <div className="flex justify-between items-center mb-4">
              <span className={`py-1 px-3 rounded text-sm ${tournament.status.includes('Active') ? 'bg-blue-500' : 'bg-blue-700'}`}>
                {tournament.status}
              </span>
              <span className="text-green-400 text-base font-semibold">{tournament.prizePool}</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">{tournament.title}</h2>
            </div>
            <div className="flex justify-center my-2 text-sm text-center">
              <div className='border-r border-gray-300 px-4'> 
                <p className='font-bold text-base'>{tournament.entryFee}</p>
                <p className='text-gray-500'>Entry fee</p>
              </div >
              <div className='border-r border-gray-300 px-4'>
                <p className='font-bold text-base'>{tournament.participants}</p>
                <p className='text-gray-500'>Participants</p>
              </div >
              <div className='px-4'>
                <p className='font-bold text-base'>{tournament.duration}</p>
                <p className='text-gray-500'>Duration</p>
              </div>
            </div>
            <button className="bg-gray-700 text-white py-2 px-4 rounded mt-4 w-full font-bold">Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;
