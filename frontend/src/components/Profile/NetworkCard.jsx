export default function NetworkCard({
  followers = 1234,
  following = 567,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">
        Jaringan
      </h2>

      {/* Divider */}
      <div className="h-px bg-gray-100 my-3" />

      {/* Stats */}
      <div className="grid grid-cols-2 text-center">
        
        {/* Followers */}
        <div>
          <p className="text-xl font-bold text-blue-500">
            {followers}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Followers
          </p>
        </div>

        {/* Following */}
        <div>
          <p className="text-xl font-bold text-blue-500">
            {following}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Following
          </p>
        </div>

      </div>
    </div>
  );
}