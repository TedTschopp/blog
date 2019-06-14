import { Summary } from "../../server/build-posts"

export const isClientSide = !!(
	typeof window !== "undefined" &&
	window.document &&
	window.document.createElement
)
export function makeUrl(article_fname: string) {
	return `/blog/` + `${article_fname.replace(/\.[^.]+$/, "")}`
}

export function filterPosts(summary: Summary) {
	return summary.posts.sort((a, b) => {
		const aDate = Date.parse(a.frontmatter.date)
		const bDate = Date.parse(b.frontmatter.date)
		return bDate > aDate ? 1 : bDate < aDate ? -1 : 0
	})
}
