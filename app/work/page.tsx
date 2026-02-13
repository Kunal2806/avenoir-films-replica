'use client';
import { useState } from 'react';
import Image from 'next/image';

interface VideoItem {
  id: number;
  videoUrl: string;
  thumbnail: string;
  title: string;
  director: string;
}

export default function Work() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const videos: VideoItem[] = [
    {
      id: 1,
      videoUrl: 'https://video.wixstatic.com/video/5084b6_497a9a75dfaf47039d64b177db360613/360p/mp4/file.mp4',
      thumbnail: '/thumbnails/retirement.jpg', // Replace with actual thumbnail
      title: 'One Finance : Retirement Planning',
      director: 'Director: Shashwat Dwivedi',
    },
    {
      id: 2,
      videoUrl: 'https://video.wixstatic.com/video/5084b6_6d2d72dd18a34506ab0e80df26f2f7f2/480p/mp4/file.mp4',
      thumbnail: '/thumbnails/salary.jpg', // Replace with actual thumbnail
      title: 'One Finance : Salary Aayi Kya?',
      director: 'Director: Shashwat Dwivedi',
    },
    {
      id: 3,
      videoUrl: 'https://video.wixstatic.com/video/5084b6_15997e53c67f4a88978b8d6c8434e92f/360p/mp4/file.mp4',
      thumbnail: '/thumbnails/video3.jpg', // Replace with actual thumbnail
      title: 'Project Title 3',
      director: 'Director: Name',
    },
    {
      id: 4,
      videoUrl: 'https://video.wixstatic.com/video/5084b6_366202c08fd34d70a94dd7e20b6c3500/360p/mp4/file.mp4',
      thumbnail: '/thumbnails/video4.jpg', // Replace with actual thumbnail
      title: 'Project Title 4',
      director: 'Director: Name',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              {/* Video Container */}
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
                {playingVideo === video.id ? (
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    src={video.videoUrl}
                    onEnded={() => setPlayingVideo(null)}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <>
                    {/* Thumbnail */}
                    <div className="w-full h-full bg-gray-800">
                      <video
                        className="w-full h-full object-cover"
                        src={video.videoUrl}
                        muted
                        playsInline
                      />
                    </div>

                    {/* Play Button Overlay */}
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors"
                      onClick={() => setPlayingVideo(video.id)}
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Video Info */}
              <div>
                <h3 className="text-xl md:text-2xl font-light mb-1">
                  {video.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400">
                  {video.director}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}