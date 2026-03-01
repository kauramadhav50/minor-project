const Network = () => {

  const suggestions = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Frontend Developer"
    },
    {
      id: 2,
      name: "Amit Verma",
      role: "Backend Developer"
    },
    {
      id: 3,
      name: "Karan Singh",
      role: "Software Engineer"
    },
    {
      id: 4,
      name: "Priya Mehta",
      role: "UI Designer"
    }
  ];


  return (

    <div className="pt-16 pb-20">

      <div className="max-w-[1100px] mx-auto flex gap-5 px-2">

        {/* Left Sidebar */}

        <div className="hidden md:block w-[250px]">

          <div className="bg-white border rounded-lg p-4">

            <p className="font-semibold mb-3">
              Manage my network
            </p>

          </div>

        </div>



        {/* Main Section */}

        <div className="flex-1">

          <div className="bg-white border rounded-lg p-4 mb-3">

            <p className="font-semibold">
              Invitations
            </p>

          </div>


          <div className="bg-white border rounded-lg p-4">

            <p className="font-semibold mb-4">
              People you may know
            </p>


            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

              {suggestions.map((user) => (

                <div
                  key={user.id}
                  className="border rounded-lg p-3 flex flex-col items-center text-center">

                  <img
                    src="/logo.png"
                    className="w-16 h-16 rounded-full mb-2"
                  />

                  <p className="font-semibold text-sm">
                    {user.name}
                  </p>

                  <p className="text-xs text-gray-500 mb-2">
                    {user.role}
                  </p>

                  <button
                    className="border border-blue-600
                    text-blue-600
                    px-3 py-1
                    rounded-full">

                    Connect

                  </button>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Network;