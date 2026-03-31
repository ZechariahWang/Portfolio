"use client";

import { useEffect } from "react";
import { projects } from "../data/projects";

export default function ImagePreloader() {
  useEffect(() => {
    projects.forEach((project) => {
      const img = new window.Image();
      img.src = project.image;
    });
  }, []);

  return null;
}