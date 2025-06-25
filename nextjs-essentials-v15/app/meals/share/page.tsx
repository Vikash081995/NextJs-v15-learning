"use client";
import React, { useState } from "react";
import ImagePicker from "../../../components/meals/image-picker";
import { shareMeal } from "@/lib/actions";

export default function ShareMealPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <main>
      <h1>Share a Meal</h1>
      <p>Share your favorite meal with us!</p>
      <form action={shareMeal} method="post">
        <div>
          <label htmlFor="title">Meal Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <ImagePicker label="Image" name="image" />
        <button type="submit">Share Meal</button>
      </form>
    </main>
  );
}
