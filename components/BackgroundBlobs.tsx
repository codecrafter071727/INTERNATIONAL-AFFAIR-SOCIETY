"use client";
import React, { useState, useEffect } from 'react';

interface BackgroundBlobsProps {
  count?: number;
  className?: string;
}

interface Blob {
  id: number;
  size: number;
  left: string;
  top: string;
  animationDuration: string;
  animationDelay: string;
  opacity: number;
  glowDuration: string;
  glowDelay: string;
  floatDuration: string;
  floatDelay: string;
}

export default function BackgroundBlobs({ count = 5, className = "" }: BackgroundBlobsProps) {
  const [blobs, setBlobs] = useState<Blob[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Generate random positions for the blobs after component mounts
    const generatedBlobs = Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 300) + 200, // Random size between 200-500px
      left: `${Math.floor(Math.random() * 80) + 10}%`, // Random position 10-90%
      top: `${Math.floor(Math.random() * 80) + 10}%`, // Random position 10-90%
      animationDuration: `${Math.floor(Math.random() * 20) + 20}s`, // Random duration 20-40s
      animationDelay: `${Math.floor(Math.random() * 10)}s`, // Random delay 0-10s
      opacity: Math.random() * 0.15 + 0.05, // Random opacity between 0.05-0.2
      glowDuration: `${Math.floor(Math.random() * 5) + 5}s`,
      glowDelay: `${Math.floor(Math.random() * 5)}s`,
      floatDuration: `${Math.floor(Math.random() * 10) + 15}s`,
      floatDelay: `${Math.floor(Math.random() * 5)}s`,
    }));
    
    setBlobs(generatedBlobs);
    setIsMounted(true);
  }, [count]);

  // Don't render anything until mounted to avoid hydration mismatch
  if (!isMounted) {
    return (
      <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Empty div to maintain layout */}
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {blobs.map((blob) => (
        <div
          key={blob.id}
          className="absolute rounded-full blob-3d blob-glow blob-float"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.left,
            top: blob.top,
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            filter: 'blur(60px)',
            opacity: blob.opacity,
            '--duration': blob.animationDuration,
            '--delay': blob.animationDelay,
            '--glow-duration': blob.glowDuration,
            '--glow-delay': blob.glowDelay,
            '--float-duration': blob.floatDuration,
            '--float-delay': blob.floatDelay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}