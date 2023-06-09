import React, { useState, useEffect, useRef } from "react";
import videosData from "../../dummyData/videos.json"; // Import the JSON data
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";

const Spyclips = () => {
  const containerRef = useRef(null);
  const observerRef = useRef(null);

  const [likedVideos, setLikedVideos] = useState({});
  const [likeCounts, setLikeCounts] = useState({});
  const [openCommentDialog, setOpenCommentDialog] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState("");
  const [comments, setComments] = useState({});
  const [commentInput, setCommentInput] = useState("");

  useEffect(() => {
    const container = containerRef.current;
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      let isFirstVideo = true;

      entries.forEach((entry) => {
        const { target } = entry;
        const video = target.querySelector("video");

        if (entry.isIntersecting) {
          video.play();
          video.classList.add("visible");
          video.src = video.dataset.src; // Set the video source when it comes into view

          if (isFirstVideo) {
            video.play(); // Play the first video automatically
            isFirstVideo = false;
          }
          video.controls = false;
        } else {
          video.pause();
          video.classList.remove("visible");
          video.src = ""; // Set an empty src when the video is out of view
          video.controls = false;
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, observerOptions);
    const videos = Array.from(container.querySelectorAll(".spyclip-video"));

    videos.forEach((video) => {
      observerRef.current.observe(video);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleVideoClick = (event) => {
    const video = event.currentTarget;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleLikeToggle = (videoId) => {
    setLikedVideos((prevLikedVideos) => {
      return {
        ...prevLikedVideos,
        [videoId]: !prevLikedVideos[videoId],
      };
    });

    setLikeCounts((prevLikeCounts) => {
      const currentLikes = prevLikeCounts[videoId] || 0;
      return {
        ...prevLikeCounts,
        [videoId]: likedVideos[videoId] ? currentLikes - 1 : currentLikes + 1,
      };
    });
  };

  const handleCommentOpen = (videoId) => {
    setCurrentVideoId(videoId);
    setOpenCommentDialog(true);
  };

  const handleCommentClose = () => {
    setOpenCommentDialog(false);
  };

  const handleCommentInputChange = (event) => {
    setCommentInput(event.target.value);
  };

  const handleCommentSubmit = () => {
    setComments((prevComments) => {
      return {
        ...prevComments,
        [currentVideoId]: [...(prevComments[currentVideoId] || []), commentInput],
      };
    });
    setCommentInput("");
    handleCommentClose();
  };

  return (
    <div className="bg-[#0F0F0F]">
      <div className="spyclip-container overflow-x-auto snap-type-mandatory custom-scrollbar" ref={containerRef}>
        {videosData.map((video, index) => (
          <div
            key={video.id}
            className="spyclip-video flex flex-col justify-center items-center snap-align-start scroll-snap-align-start mb-[20px] relative w-full max-w-[400px] sm:w-[300px] md:w-[400px] lg:w-[500px] m-auto"
          >
            <video
              src=""
              data-src={video.url} // Store the video URL in a data attribute
              controls
              className="w-full max-w-[400px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[88vh] mt-[60px] object-cover"
              loop
              onClick={handleVideoClick}
            />
            <div className="absolute bottom-[305px] right-[-80px] w-[60px] h-[60px] bg-transparent">
              <button
                className={`text-white focus:outline-none ${likedVideos[video.id] ? "animate-like" : ""
                  }`}
                onClick={() => handleLikeToggle(video.id)}
              >
                {likedVideos[video.id] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="none"
                    className="h-[30px] w-[32px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentcolor"
                    className="h-[30px] w-[32px]"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                )}
              </button>
              <span className="text-white text-xs text-center absolute bottom-[10px] left-[13px]">{likeCounts[video.id] || 0}</span>

              {/* comment */}
              <button
                className="text-white focus:outline-none ml-2"
                onClick={() => handleCommentOpen(video.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-[30px] w-[32px]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                </svg>

              </button>
            </div>
            <div className="absolute bottom-0 w-full max-w-[400px] sm:w-[300px] md:w-[400px] lg:w-[500px] bg-black bg-opacity-40 py-2 px-4 text-white">
              <h3 className="text-lg font-medium mb-2">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Comment Dialog */}
      <Dialog open={openCommentDialog} onClose={handleCommentClose}>
        <DialogTitle>Comments</DialogTitle>
        <DialogContent>
          {comments[currentVideoId] && comments[currentVideoId].map((comment, index) => (
            <p key={index}>{comment}</p>
          ))}
          <TextField
            label="Add a comment"
            variant="outlined"
            fullWidth
            value={commentInput}
            onChange={handleCommentInputChange}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCommentClose}>Cancel</Button>
          <Button onClick={handleCommentSubmit} variant="contained" disableElevation>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Spyclips;
