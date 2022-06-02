import { FunctionComponent } from 'react'
import s from './Progress.module.css'
import cn from 'classnames'

interface ProgressProps {
  value: number
  type: 'claim' | 'policy'
  className?: string
}

const Progress: FunctionComponent<ProgressProps> = ({ value = 10, type }) => {
  const bar = cn('w-0 h-full rounded-lg', {
    [s.claim]: type === 'claim',
    [s.policy]: type === 'policy',
  })
  return (
    <div className="w-full h-1.5 bg-gray-200 rounded-lg overflow-hidden">
      <div className={bar} style={{ width: value + '%' }}></div>
    </div>
  )
}

export default Progress
