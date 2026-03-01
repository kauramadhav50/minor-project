const Jobs = () => {

  const jobs = [

    {
      id: 1,
      company: "Google",
      role: "Frontend Developer",
      location: "Bangalore, India"
    },

    {
      id: 2,
      company: "Microsoft",
      role: "Backend Developer",
      location: "Hyderabad, India"
    },

    {
      id: 3,
      company: "Amazon",
      role: "Software Engineer",
      location: "Delhi, India"
    },

    {
      id: 4,
      company: "TCS",
      role: "React Developer",
      location: "Chandigarh, India"
    }

  ];


  return (

    <div className="pt-16 pb-20 px-2">

      <div className="max-w-[900px] mx-auto flex gap-5">

        
        {/* Left Panel (Desktop) */}

        <div className="hidden md:block w-[250px]">

          <div className="bg-white border rounded-lg p-4">

            <p className="font-semibold mb-3">
              Manage Jobs
            </p>

            <div className="flex flex-col gap-2 text-sm text-gray-600">

              <p className="cursor-pointer hover:text-black">
                My Jobs
              </p>

              <p className="cursor-pointer hover:text-black">
                Preferences
              </p>

              <p className="cursor-pointer hover:text-black">
                Skill Assessments
              </p>

              <p className="cursor-pointer hover:text-black">
                Interview Prep
              </p>

            </div>

          </div>

        </div>



        {/* Job List */}

        <div className="flex-1">

          <div className="bg-white border rounded-lg p-4 mb-3">

            <h2 className="font-semibold text-lg">
              Recommended Jobs
            </h2>

          </div>



          <div className="flex flex-col gap-3">

            {jobs.map((job)=>(
              
              <div
              key={job.id}

              className="bg-white border rounded-lg p-4
              hover:shadow-md transition">

                
                <div className="flex gap-3 items-center">

                  <img
                  src="/logo.png"
                  className="w-12 h-12 rounded"
                  />


                  <div className="flex-1">

                    <p className="font-semibold">

                      {job.role}

                    </p>


                    <p className="text-sm text-gray-600">

                      {job.company}

                    </p>


                    <p className="text-xs text-gray-500">

                      {job.location}

                    </p>

                  </div>



                  <button

                  className="border border-blue-600
                  text-blue-600
                  px-4 py-1 rounded-full
                  hover:bg-blue-50">

                    Apply

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  )
}

export default Jobs;