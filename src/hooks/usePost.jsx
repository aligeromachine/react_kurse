import { useMemo } from "react"

export const usePostsFilter = (posts, query) => {
  const report = useMemo(() => {
    return posts.filter(p => p.title.includes(query))
  },[query, posts]);
  
  return report; 
}

export const useSortedPosts = (posts, sort, query) => {
  const report = usePostsFilter(posts, query);

  const sortedPosts = useMemo(() => {
    if (!report){
      return report;
    }
    return report.sort((a, b) => a[sort] !== b[sort]);
  }, [sort, report]);

  return sortedPosts;
}