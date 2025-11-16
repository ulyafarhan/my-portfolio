import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanityClient'

const builder = imageUrlBuilder(client)

/**
 * @param {any} source 
 * @param {number} [width=800] 
 * @returns {string} 
 */
export function urlFor(source: any, width: number = 800): string {
  if (!source || !source.asset) {
    return ''
  }
  
  return builder.image(source)
    .auto('format') 
    .quality(75)    
    .width(width)   
    .url()          
}