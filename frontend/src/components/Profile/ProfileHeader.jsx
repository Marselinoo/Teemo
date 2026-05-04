import { MapPin, Pencil } from "lucide-react";

export default function ProfileHeader({
  name = "Default",
  role = "Senior FullStack Developer & UI/UX Designer",
  location = "Yogyakarta, Indonesia",
  avatar = "https://api.dicebear.com/7.x/adventurer/svg?seed=John",
  onEdit = () => alert("Edit profile clicked!"),
}) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="relative bg-white rounded-2xl shadow-md overflow-hidden">
        
        {/* Cover */}
        <div className="h-32 sm:h-40 bg-gradient-to-r from-blue-700 to-blue-500" />

        {/* Content */}
        <div className="relative px-6 pb-6 pt-16 sm:pt-12 flex flex-col items-center text-center">
          
          {/* Avatar */}
          <div className="absolute -top-12 sm:left-6 sm:translate-x-0 left-1/2 -translate-x-1/2">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-2 shadow-md">
              <img
                src={avatar}
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Edit Button */}
          <button
            onClick={onEdit}
            className="
              mt-2 sm:mt-0
              sm:absolute sm:right-6 sm:top-20
              flex items-center gap-2 px-4 py-2
              bg-white border rounded-xl shadow-sm
              hover:bg-gray-50 transition
            "
          >
            <Pencil size={16} />
            Edit Profil
          </button>

          {/* Name */}
          <h1 className="text-xl sm:text-2xl font-bold text-blue-900 mt-2">
            {name}
          </h1>

          {/* Role */}
          <p className="text-sm text-gray-600 mt-1">
            {role}
          </p>

          {/* Location */}
          <div className="flex items-center gap-1 text-sm text-gray-500 mt-2">
            <MapPin size={14} />
            {location}
          </div>
        </div>
      </div>
    </div>
  );
}