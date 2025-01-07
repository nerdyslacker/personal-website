'use client';
 
import Giscus from '@giscus/react';
 
interface CommentsProps {
  repo: `${string}/${string}`,
  repoId: string,
  category: string,
  categoryId: string,
}

const Comments = ({ repo, repoId, category, categoryId }: CommentsProps) => {
	return (
		<Giscus
			repo={repo}
			repoId={repoId}
			category={category}
			categoryId={categoryId}
			mapping="pathname"
			reactionsEnabled="1"
			emitMetadata="0"
			inputPosition="top"
			theme="catppuccin_mocha"
			lang="en"
			loading="lazy"
		/>
	);
};
 
export default Comments;