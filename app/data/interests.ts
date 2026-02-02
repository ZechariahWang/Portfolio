export interface Album {
  id: string
  title: string
  artist: string
  image: string
}

export interface Show {
  id: string
  title: string
  image: string
}

export const albums: Album[] = [
  { id: '1', title: 'Album Name', artist: 'Artist', image: '/music/album1.jpg' },
  { id: '2', title: 'Album Name', artist: 'Artist', image: '/music/album2.jpg' },
  { id: '3', title: 'Album Name', artist: 'Artist', image: '/music/album3.jpg' },
  { id: '4', title: 'Album Name', artist: 'Artist', image: '/music/album4.jpg' },
  { id: '5', title: 'Album Name', artist: 'Artist', image: '/music/album5.jpg' },
  { id: '6', title: 'Album Name', artist: 'Artist', image: '/music/album6.jpg' },
]

export const shows: Show[] = [
  { id: '1', title: 'Show Name', image: '/shows/show1.jpg' },
  { id: '2', title: 'Show Name', image: '/shows/show2.jpg' },
  { id: '3', title: 'Show Name', image: '/shows/show3.jpg' },
  { id: '4', title: 'Show Name', image: '/shows/show4.jpg' },
  { id: '5', title: 'Show Name', image: '/shows/show5.jpg' },
  { id: '6', title: 'Show Name', image: '/shows/show6.jpg' },
]
