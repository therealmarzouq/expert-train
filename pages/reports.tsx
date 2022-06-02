import { Layout } from '@components/common'
import { Banner } from '@components/ui'
import ReportCard from '@components/ui/ReportCard'

interface ReportsProps {
  id: string
  policy: number
  claim: number
  total: number
}

export default function Reports() {
  const reports: ReportsProps[] = [
    { id: 'x34', policy: 400, claim: 800, total: 1000 },
    { id: 'gh4', policy: 1100, claim: 1400, total: 2500 },
    { id: 'q2l', policy: 1100, claim: 1400, total: 2500 },
  ]
  return (
    <div className="md:mt-20">
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4.5xl my-6">
        {reports.map((report) => (
          <ReportCard
            policy={report.policy}
            claim={report.claim}
            total={report.total}
            key={report.id}
          />
        ))}
      </div>
    </div>
  )
}

Reports.Layout = Layout
