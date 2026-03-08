import JobsSidebar from "./JobSidebar"
import JobsFeed from "./JobFeed"

const Jobs = () => {

  return (

    <div className="pt-4">

      <div className="max-w-[1100px] mx-auto flex gap-5 px-2">

        <JobsSidebar />

        <JobsFeed />

      </div>

    </div>

  )

}

export default Jobs