import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true, 
  apiVersion: '2023-11-14',
})

const projectFields = `
  _id,
  title,
  'slug': slug.current,
  mainImage,
  'technologies': technologies[]->{_id, title},
  projectUrl,
  githubUrl,
  excerpt
`
export const allProjectsQuery = `*[_type == "project"] | order(_createdAt desc) { ${projectFields} }`

export const singleProjectQuery = `*[_type == "project" && slug.current == $slug][0] {
  ${projectFields},
  description,
  gallery,
}`

export const profileQuery = `*[_type == "profile"][0] {
  name,
  bio,
  profileImage,
  'resumeUrl': resumeUrl.asset->url
}`

const postFields = `
  _id,
  title,
  'slug': slug.current,
  mainImage,
  excerpt,
  publishedAt
`
export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc) { ${postFields} }`

export const singlePostQuery = `*[_type == "post" && slug.current == $slug][0] {
  ${postFields},
  body
}`

export async function fetchData(query: any, params = {}) {
  return await client.fetch(query, params)
}