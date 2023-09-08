import React, { useState } from "react";
import { videoData } from "../Data";
import VideoCard from "../../components/VideoCard";

const VideoTutorials = () => {
  // State for search query and filter
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");

  // Filter videoData based on search query and selected type
  const filteredVideos = videoData.filter((video) => {
    return (
      (video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedType === "All Types" || video.type === selectedType)
    );
  });

  // Get unique video types for filtering
  const uniqueTypes = Array.from(new Set(videoData.map((video) => video.type)));

  return (
    <div>
      <div className="lg:px-28 px-12 lg:pt-8 lg:pb-3 pt-3 pb-3">
        <span className="text-xl font-bold">Video </span>
        <span className="text-xl font-bold text-[#004AAD]">Tutorials</span>
      </div>
      <div className="lg:px-28 px-12 py-3">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by title or description"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-gray-200 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
        />
      </div>
      <div className="lg:px-28 px-12 py-3">
        {/* Filter by type */}
        <select
          onChange={(e) => setSelectedType(e.target.value)}
          value={selectedType}
          className="w-full bg-gray-200 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
        >
          <option value="All Types">All Types</option>
          {uniqueTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="lg:px-28 px-12 py-3 pb-20">
        {/* Video Cards */}
        <div className="flex flex-wrap -mx-4">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              thumbnailUrl={video.thumbnailUrl}
              title={video.title}
              description={video.description}
              videoId={video.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoTutorials;
