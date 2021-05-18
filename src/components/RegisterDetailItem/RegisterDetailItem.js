import React from 'react';
import SCRegisterDetailItem from './RegisterDetailItem.styled';


export default function RegisterDetailItem() {
  return (
    <>
      <SCRegisterDetailItem>
        <div className='details-wrapper'>
          <div className='work-hour'>
            <p className='start-style'>Start Hour: 09:00</p>
            <p className='end-style'>End Hour: 18:00</p>
          </div>
          <div className='break-hour'>
            <p className='start-style'>Start Break: 13:30</p>
            <p className='end-style'>End Break: 14:30</p>
          </div>
          <div className='worked-hours'>
            <p className='worked-style'>Worked Hours: 08:30</p>
            <p className='extra-style'>Extra Hours: 00:30</p>
          </div>
        </div>
        <div className='standup-wrapper'>
          <p>Prework Standup</p>
          <p>Afterwork Standup</p>
        </div>

      </SCRegisterDetailItem>
    </>
  );
}
