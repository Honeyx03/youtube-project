const URL = process.env.REACT_APP_API_KEY;

// Videos

// Index/Get all
export function getAllVideos() {
  return fetch(`${URL}/videos`).then((response) => response.json());
}

// Video/Get one
export function getOneVideo(id) {
  return fetch(`${URL}/videos/${id}`).then((response) => response.json())
}



