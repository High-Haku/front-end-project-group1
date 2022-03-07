import React from "react";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

function BookCanvas() {
  const canvasRef = useRef();
  const {id} = useParams();

  // Initialize loaded state as false
  const [loaded, setLoaded] = useState(false);

  // Create alert message if book not found in Google Database
  function alertNotFound() {
    alert("could not embed the book!");
  }

  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://www.google.com/books/jsapi.js";
    scriptTag.addEventListener("load", () => setLoaded(true));
    scriptTag.id = "google-script";
    document.body.appendChild(scriptTag);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    else {
      if (window.viewer) {
        let viewer = new window.google.books.DefaultViewer(canvasRef.current);
        viewer.load(`http://books.google.co.id/books?${id}`, alertNotFound);
      } else {
        window.google.books.load();
        window.google.books.setOnLoadCallback(() => {
          let viewer = new window.google.books.DefaultViewer(canvasRef.current);
          window.viewer = viewer;
          viewer.load(`http://books.google.co.id/books?${id}`, alertNotFound);
        });
      }
    }

  }, [loaded]);

  

  return (
    <div>
      {loaded ? (
        <div>
          <div ref={canvasRef} id="viewerCanvas" style={{height:'100vh'}}></div>
        </div>
      ) : (
        "Script not loaded"
      )}
    </div>
  );
}

export default BookCanvas;
