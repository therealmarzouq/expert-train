import s from './ReportCard.module.css'
import Progress from '../Progress'
import { FC, useEffect, useState } from 'react'

interface ReportsProps {
  id?: string
  policy: number
  claim: number
  total: number
}

const calculateProgress = (value: number, total: number) => {
  return Math.round((value / total) * 100)
}
const ReportCard: FC<ReportsProps> = ({ policy, claim, total }) => {
  const [claimProgress, setClaimProgress] = useState(0)
  const [policyrogress, setPolicyProgress] = useState(0)

  useEffect(() => {
    setClaimProgress(calculateProgress(claim, total))
    setPolicyProgress(calculateProgress(policy, total))
  }, [claim, policy, total])

  return (
    <div className={s.root}>
      <div className={s.total}>
        <h1 className={s['total-amount']}>{total}</h1>
        <div className={s['total-currency']}>$</div>
      </div>

      <p className={s['total-description']}>Total Value of Disbursement</p>

      <div className={'mt-12'}>
        <div className={'flex flex-row items-center justify-between mb-4'}>
          <div className={'text-xl text-black'}>Policy</div>
          <div className={'flex text-black'}>
            <div className={'text-xl text-black'}>{policy}</div>
            <div className="text-xl ">$</div>
          </div>
        </div>
        <Progress value={policyrogress} type="policy" />
      </div>
      <div className={'mt-8'}>
        <div className={'flex flex-row items-center justify-between mb-4'}>
          <div className={'text-xl text-black'}>Claim</div>
          <div className={'flex text-black'}>
            <div className={'text-xl text-black'}>{claim}</div>
            <div className="text-xl ">$</div>
          </div>
        </div>
        <Progress value={claimProgress} type="claim" />
      </div>
    </div>
  )
}

export default ReportCard
