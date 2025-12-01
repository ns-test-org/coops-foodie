'use client';

import { useState } from 'react';
import { Camera, Upload, X, Image as ImageIcon } from 'lucide-react';

interface Photo {
  id: string;
  url: string;
  name: string;
  size: number;
}

export default function PhotoUploadApp() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [dragActive, setDragActive] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500 rounded-lg">
              <ImageIcon className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Photo Upload
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Upload Section */}
        <div className="mb-8">
          <div
            className={`
              relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200
              ${dragActive 
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                : 'border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500'
              }
              bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
            `}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <Upload className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Drop your photos here
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  or click to browse your files
                </p>
              </div>

              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  <Upload className="w-4 h-4" />
                  Choose Files
                </button>
                
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors">
                  <Camera className="w-4 h-4" />
                  Take Photo
                </button>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Supports JPG, PNG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>

        {/* Photos Grid */}
        {photos.length > 0 ? (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Your Photos ({photos.length})
              </h2>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                Clear All
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-gray-400" />
                  </div>
                  
                  <div className="p-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {photo.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {(photo.size / 1024 / 1024).toFixed(1)} MB
                    </p>
                  </div>

                  <button className="absolute top-2 right-2 p-1 bg-red-500 hover:bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <ImageIcon className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No photos yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Upload your first photo to get started
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

