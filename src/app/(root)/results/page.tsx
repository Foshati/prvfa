import ValveAnalysis from "@/components/prvfa/page";
import PRVAnalysisDashboard from "@/components/prvs/page";

export default function page() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
      
      <ValveAnalysis />
      <PRVAnalysisDashboard/>
    </div>
  )
}
