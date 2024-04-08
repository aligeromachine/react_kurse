import { useState } from "react";

export const useFetching = (callback) => {
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [isErr, setIsErr] = useState("");
  
  const fetching = async (...args) => {
    try {
      setIsPostLoading(true);
      await callback(...args);
    } catch (error) {
      setIsErr(error.message);
    } finally {
      setIsPostLoading(false);  
    }
  }

  return [fetching, isPostLoading, isErr];
}