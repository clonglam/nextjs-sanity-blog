type Base = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

interface Post extends Base {
  author: Author
  categories: Category[]
  mainImage: Image
  slug: Slug
  title: string
  tags: Tag[]
  description: string
  content: string
}

interface Author extends Base {
  bio: Block[]
  image: Image
  name: string
  slug: Slug
}

interface Image {
  _type: "image"
  assest: Reference
}

interface Reference {
  _ref: string
  _type: "reference"
}

interface Slug {
  _type: "slug"
  current: string
}

interface Block {
  _key: string
  _type: "block"
  children: Spanp[]
  markDefs: any[]
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote"
}

interface Category extends Base {
  description: string
  title: string
  slug: Slug
}
interface Tag extends Base {
  description: string
  label: string
  slug: Slug
}

interface MainImage {
  _type: "image"
  asset: Reference
}

interface Title {
  _type: "string"
  current: string
}
