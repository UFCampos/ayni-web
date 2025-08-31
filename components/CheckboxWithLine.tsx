'use client'
import { Checkbox } from './ui/checkbox'

const CheckboxWithLine = ({ isConnected, balanceOf }: { isConnected: boolean, balanceOf?: number }): JSX.Element => {
  return (
        <div className='flex flex-col w-1/2 mb-14'>
            <div className='flex flex-col items-center'>
              <Checkbox checked={isConnected} className='h-[35px] w-[35px] rounded-full border-sky-500 '/>
              <hr className={`h-28 border ${isConnected ? 'border-sky-500' : 'border-gray-500'}`}/>
              <Checkbox checked={balanceOf !== undefined && balanceOf > 0} className='h-[35px] w-[35px] rounded-full border-sky-500 '/>
              <hr className={`h-28 border  ${balanceOf !== undefined && balanceOf > 0 ? 'border-sky-500' : 'border-gray-500'}`}/>
              <Checkbox checked={balanceOf !== undefined && balanceOf > 0} className='h-[35px] w-[35px] rounded-full border-sky-500 '/>
            </div>
        </div>
  )
}

export default CheckboxWithLine
